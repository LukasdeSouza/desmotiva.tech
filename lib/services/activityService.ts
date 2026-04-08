import { supabaseAdmin } from '../supabaseClient';
import { ActionType } from '@prisma/client';
import { PointsService } from './pointsService';
import { StreakService } from './streakService';
import { BadgeService } from './badgeService';
import {
  TrackActivityResponse,
  ActivityMetadata
} from '@/types/gamification';

export class ActivityService {
  /**
   * Track phrase generation
   */
  static async trackPhraseGeneration(
    userId: string,
    phraseIndex: number,
    locale: 'pt' | 'en'
  ): Promise<TrackActivityResponse> {
    // 1. Record that the phrase was seen
    // Upsert phrase seen
    const { data: existingSeen } = await supabaseAdmin
      .from('phrase_seen')
      .select('*')
      .eq('user_id', userId)
      .eq('phrase_index', phraseIndex)
      .single();

    if (existingSeen) {
      await supabaseAdmin
        .from('phrase_seen')
        .update({
          seen_count: existingSeen.seen_count + 1,
          last_seen_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .eq('phrase_index', phraseIndex);
    } else {
      await supabaseAdmin
        .from('phrase_seen')
        .insert({
          user_id: userId,
          phrase_index: phraseIndex,
          seen_count: 1,
          last_seen_at: new Date().toISOString()
        });
    }

    // 2. Add points for generation
    const totalPoints = await PointsService.addPoints(userId, 'GENERATE', {
      phraseIndex,
      locale,
    });

    // 3. Update streak
    const streakResult = await StreakService.updateStreak(userId);

    // 4. Check for badges
    const badgeResult = await BadgeService.checkAndUnlockBadges(userId);

    return {
      pointsEarned: 1, // Base points for generate
      totalPoints,
      badges: badgeResult.unlockedBadges,
      streak: streakResult,
    };
  }

  /**
   * Track sharing
   */
  static async trackShare(
    userId: string,
    platform: 'whatsapp' | 'twitter' | 'linkedin',
    phraseIndex?: number
  ): Promise<TrackActivityResponse> {
    // 1. Add points for sharing
    const totalPoints = await PointsService.addPoints(userId, 'SHARE', {
      platform,
      phraseIndex,
    });

    // 2. Check for badges
    const badgeResult = await BadgeService.checkAndUnlockBadges(userId);

    return {
      pointsEarned: 3, // Base points for share
      totalPoints,
      badges: badgeResult.unlockedBadges,
    };
  }

  /**
   * Track login
   */
  static async trackLogin(userId: string): Promise<void> {
    await PointsService.addPoints(userId, 'LOGIN');
    await StreakService.updateStreak(userId);
  }

  /**
   * Toggle favorite phrase
   */
  static async toggleFavoritePhrase(
    userId: string,
    phraseIndex: number
  ): Promise<{ isFavorite: boolean }> {
    const { data: existing } = await supabaseAdmin
      .from('user_favorites')
      .select('*')
      .eq('user_id', userId)
      .eq('phrase_index', phraseIndex)
      .single();

    if (existing) {
      await supabaseAdmin
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('phrase_index', phraseIndex);
      return { isFavorite: false };
    } else {
      await supabaseAdmin
        .from('user_favorites')
        .insert({
          user_id: userId,
          phrase_index: phraseIndex,
        });
      return { isFavorite: true };
    }
  }

  /**
   * Check if phrase is favorited
   */
  static async isPhraseFavorited(userId: string, phraseIndex: number): Promise<boolean> {
    const { count } = await supabaseAdmin
      .from('user_favorites')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('phrase_index', phraseIndex);
    return !!count;
  }

  /**
   * Get user activity summary
   */
  static async getActivitySummary(userId: string) {
    const { count: phrasesSeen } = await supabaseAdmin
      .from('phrase_seen')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    const [points, streak, badges] = await Promise.all([
      PointsService.getUserPoints(userId),
      StreakService.getStreakInfo(userId),
      BadgeService.getUserBadges(userId),
    ]);

    return {
      points,
      streak,
      badgesCount: badges.length,
      phrasesSeenCount: phrasesSeen || 0,
    };
  }

  /**
   * Get recent activities
   */
  static async getRecentActivities(userId: string, limit = 20) {
    const { data } = await supabaseAdmin
      .from('user_activities')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    return (data || []).map(a => ({
      ...a,
      userId: a.user_id,
      actionType: a.action_type,
      pointsEarned: a.points_earned,
      createdAt: new Date(a.created_at)
    }));
  }

  /**
   * Get activity stats
   */
  static async getActivityStats(userId: string) {
    // GroupBy is not directly supported in Supabase JS client simple syntax basically
    // We would need to fetch all and reduce or use RPC.
    // Fetch all for user (might be heavy if many) or just use separate counts for known types.
    // Known types: GENERATE, SHARE, LOGIN, STREAK, BADGE_UNLOCK
    // Let's iterate types or fetch all.
    // If strict on performance, use RPC defined in DB.
    // For now, fetch all activities for user and aggregate in code?
    // If user has 10k activities, this is bad.
    // But this is for "stats" page.
    // Let's assume we can fetch metadata only?

    // Better approach:
    // const { data } = await supabaseAdmin.from('user_activities').select('action_type, points_earned').eq('user_id', userId);
    // aggregate locally.
    const { data } = await supabaseAdmin
      .from('user_activities')
      .select('action_type, points_earned')
      .eq('user_id', userId);

    if (!data) return [];

    const statsMap = new Map<string, { _count: number, _sum: { pointsEarned: number } }>();

    for (const item of data) {
      const type = item.action_type;
      if (!statsMap.has(type)) {
        statsMap.set(type, { _count: 0, _sum: { pointsEarned: 0 } });
      }
      const entry = statsMap.get(type)!;
      entry._count++;
      entry._sum.pointsEarned += item.points_earned;
    }

    return Array.from(statsMap.entries()).map(([key, value]) => ({
      actionType: key,
      _count: value._count,
      _sum: value._sum
    }));
  }
}
