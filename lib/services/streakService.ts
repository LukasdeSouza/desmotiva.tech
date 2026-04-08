import { supabaseAdmin } from '../supabaseClient';
import { PointsService } from './pointsService';
import { POINTS } from '@/types/gamification';
import { differenceInDays, startOfDay } from 'date-fns';

export class StreakService {
  /**
   * Update user's streak and award bonus points
   */
  static async updateStreak(userId: string): Promise<{
    currentStreak: number;
    longestStreak: number;
    bonusPoints: number;
    milestoneReached: boolean;
    milestone?: number;
  }> {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('current_streak, longest_streak, last_activity_at')
      .eq('id', userId)
      .single();

    if (!user) {
      throw new Error('User not found');
    }

    const today = startOfDay(new Date());
    const lastActivity = user.last_activity_at ? startOfDay(new Date(user.last_activity_at)) : null;

    let currentStreak = user.current_streak || 0;
    let bonusPoints = 0;
    let milestoneReached = false;
    let milestone: number | undefined;

    if (!lastActivity) {
      // First activity ever
      currentStreak = 1;
    } else {
      const daysSinceLastActivity = differenceInDays(today, lastActivity);

      if (daysSinceLastActivity === 0) {
        // Already active today, no streak update
        return {
          currentStreak: user.current_streak || 0,
          longestStreak: user.longest_streak || 0,
          bonusPoints: 0,
          milestoneReached: false,
        };
      } else if (daysSinceLastActivity === 1) {
        // Consecutive day - increment streak
        currentStreak += 1;

        // Award streak bonus
        bonusPoints = this.calculateStreakBonus(currentStreak);

        // Check for milestones
        const milestoneInfo = this.checkMilestone(currentStreak);
        milestoneReached = milestoneInfo.reached;
        milestone = milestoneInfo.milestone;
      } else {
        // Streak broken - reset to 1
        currentStreak = 1;
      }
    }

    // Update longest streak if current is higher
    const longestStreak = Math.max(currentStreak, user.longest_streak || 0);

    // Update user record
    await supabaseAdmin
      .from('users')
      .update({
        current_streak: currentStreak,
        longest_streak: longestStreak,
        last_activity_at: new Date().toISOString(),
      })
      .eq('id', userId);

    // Record daily streak
    // Check if entry exists first to decide increment vs insert/update
    // Supabase upset handles insert/update but incrementing a value in upsert is tricky without RPC.
    // simpler: fetch, if exists update (increment), else insert.
    // Or just "set" values if we know what they should be.
    // Logic said: phrasesGenerated: increment 1.
    // If I just upsert with static 1, I lose the count if I generate multiple phrases a day.
    // Wait, `updateStreak` is called on *every* activity?
    // `ActivityService.trackPhraseGeneration` calls `updateStreak`.
    // So yes, we want to increment `phrasesGenerated`.

    // Check for existing daily streak
    const { data: existingDaily } = await supabaseAdmin
      .from('daily_streaks')
      .select('phrases_generated, points_earned')
      .eq('user_id', userId)
      .eq('date', today.toISOString())
      .single();

    if (existingDaily) {
      await supabaseAdmin
        .from('daily_streaks')
        .update({
          phrases_generated: (existingDaily.phrases_generated || 0) + 1,
          points_earned: (existingDaily.points_earned || 0) + bonusPoints
        })
        .eq('user_id', userId)
        .eq('date', today.toISOString());
    } else {
      await supabaseAdmin
        .from('daily_streaks')
        .insert({
          user_id: userId,
          date: today.toISOString(),
          phrases_generated: 1,
          points_earned: bonusPoints
        });
    }

    // Award bonus points if any
    if (bonusPoints > 0) {
      await PointsService.addPoints(userId, 'STREAK', {
        bonusPoints,
        currentStreak,
        milestone: milestoneReached ? milestone : undefined,
      });
    }

    return {
      currentStreak,
      longestStreak,
      bonusPoints,
      milestoneReached,
      milestone,
    };
  }

  /**
   * Calculate bonus points based on streak length
   */
  private static calculateStreakBonus(streak: number): number {
    // Daily bonus
    let bonus = POINTS.DAILY_STREAK_BONUS;

    // Weekly bonus (every 7 days)
    if (streak % 7 === 0) {
      bonus += POINTS.WEEKLY_STREAK_BONUS;
    }

    // Monthly bonus (every 30 days)
    if (streak % 30 === 0) {
      bonus += POINTS.MONTHLY_STREAK_BONUS;
    }

    return bonus;
  }

  /**
   * Check if streak reached a milestone
   */
  private static checkMilestone(streak: number): {
    reached: boolean;
    milestone?: number;
  } {
    const milestones = [3, 7, 14, 30, 60, 90, 100, 365];

    if (milestones.includes(streak)) {
      return { reached: true, milestone: streak };
    }

    return { reached: false };
  }

  /**
   * Get user's streak info
   */
  static async getStreakInfo(userId: string) {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('current_streak, longest_streak, last_activity_at')
      .eq('id', userId)
      .single();

    if (!user) {
      return {
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: null,
        isActiveToday: false,
        streakBroken: false,
      };
    }

    const today = startOfDay(new Date());
    const lastActivity = user.last_activity_at ? startOfDay(new Date(user.last_activity_at)) : null;

    let isActiveToday = false;
    let streakBroken = false;

    if (lastActivity) {
      const daysSinceLastActivity = differenceInDays(today, lastActivity);
      isActiveToday = daysSinceLastActivity === 0;
      streakBroken = daysSinceLastActivity > 1;
    }

    return {
      currentStreak: user.current_streak || 0,
      longestStreak: user.longest_streak || 0,
      lastActivityDate: user.last_activity_at ? new Date(user.last_activity_at) : null,
      isActiveToday,
      streakBroken,
    };
  }

  /**
   * Get streak history for a user
   */
  static async getStreakHistory(userId: string, limit = 30) {
    const { data } = await supabaseAdmin
      .from('daily_streaks')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false })
      .limit(limit);

    return (data || []).map(s => ({
      ...s,
      userId: s.user_id,
      phrasesGenerated: s.phrases_generated,
      pointsEarned: s.points_earned,
      date: new Date(s.date)
    }));
  }
}
