import { supabaseAdmin } from '../supabaseClient';
import { PointsService } from './pointsService';
import { BADGE_RARITY_MULTIPLIER } from '@/types/gamification';

export class BadgeService {
  /**
   * Check and unlock badges for a user based on their activity
   */
  static async checkAndUnlockBadges(userId: string): Promise<{
    unlockedBadges: Array<{
      badge: any;
      isNewUnlock: boolean;
      pointsAwarded: number;
    }>;
    totalPointsAwarded: number;
  }> {
    const unlockedBadges: Array<{
      badge: any;
      isNewUnlock: boolean;
      pointsAwarded: number;
    }> = [];
    let totalPointsAwarded = 0;

    // Get all badges
    const { data: allBadges } = await supabaseAdmin
      .from('badges')
      .select('*');

    if (!allBadges) return { unlockedBadges: [], totalPointsAwarded: 0 };

    // Get user's current badges
    const { data: userBadges } = await supabaseAdmin
      .from('user_badges')
      .select('*, badge:badges(*)')
      .eq('user_id', userId);

    const unlockedBadgeIds = new Set((userBadges || []).map(ub => ub.badge_id));

    // Check each badge
    for (const badge of allBadges) {
      // Skip if already unlocked
      if (unlockedBadgeIds.has(badge.id)) {
        continue;
      }

      // Check if user meets requirements
      const meetsRequirements = await this.checkBadgeRequirements(userId, badge);

      if (meetsRequirements) {
        // Unlock the badge
        await supabaseAdmin
          .from('user_badges')
          .insert({
            user_id: userId,
            badge_id: badge.id,
            progress: badge.requirement_value,
            unlocked_at: new Date().toISOString()
          });

        // Calculate points based on rarity
        // map rarity string if needed, but DB likely uses same enum strings
        const multiplier = BADGE_RARITY_MULTIPLIER[badge.rarity as keyof typeof BADGE_RARITY_MULTIPLIER] || 1;
        const pointsAwarded = badge.points_reward * multiplier;

        // Award points
        await PointsService.addPoints(userId, 'BADGE_UNLOCK', {
          badgeId: badge.id,
          badgeSlug: badge.slug,
          pointsReward: pointsAwarded,
        });

        unlockedBadges.push({
          badge,
          isNewUnlock: true,
          pointsAwarded,
        });

        totalPointsAwarded += pointsAwarded;
      }
    }

    return {
      unlockedBadges,
      totalPointsAwarded,
    };
  }

  /**
   * Check if user meets requirements for a specific badge
   */
  private static async checkBadgeRequirements(userId: string, badge: any): Promise<boolean> {
    switch (badge.requirement_type) {
      case 'COUNT':
        return this.checkCountRequirement(userId, badge);
      case 'STREAK':
        return this.checkStreakRequirement(userId, badge);
      case 'UNIQUE':
        return this.checkUniqueRequirement(userId, badge);
      case 'TIME':
        return this.checkTimeRequirement(userId, badge);
      case 'SPECIAL':
        return this.checkSpecialRequirement(userId, badge);
      default:
        return false;
    }
  }

  /**
   * Check count-based requirements (e.g., generate 100 phrases)
   */
  private static async checkCountRequirement(userId: string, badge: any): Promise<boolean> {
    const { count } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('action_type', this.getActionTypeForBadge(badge.slug));

    return (count || 0) >= badge.requirement_value;
  }

  /**
   * Check streak-based requirements
   */
  private static async checkStreakRequirement(userId: string, badge: any): Promise<boolean> {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('current_streak, longest_streak')
      .eq('id', userId)
      .single();

    if (!user) return false;

    // Check both current and longest streak
    return (user.current_streak || 0) >= badge.requirement_value ||
      (user.longest_streak || 0) >= badge.requirement_value;
  }

  /**
   * Check unique-based requirements (e.g., see all 75 phrases)
   */
  private static async checkUniqueRequirement(userId: string, badge: any): Promise<boolean> {
    const { count } = await supabaseAdmin
      .from('phrase_seen')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    return (count || 0) >= badge.requirement_value;
  }

  /**
   * Check time-based requirements (e.g., after midnight, before 8 AM)
   */
  private static async checkTimeRequirement(userId: string, badge: any): Promise<boolean> {
    // This would need custom logic based on the specific badge
    // For now, we'll check activities during specific hours

    if (badge.slug === 'night-owl') {
      // Count activities between 00:00 and 06:00
      const count = await this.countActivitiesByHour(userId, 0, 6);
      return count >= badge.requirement_value;
    }

    if (badge.slug === 'morning-person') {
      // Count activities between 05:00 and 08:00
      const count = await this.countActivitiesByHour(userId, 5, 8);
      return count >= badge.requirement_value;
    }

    return false;
  }

  /**
   * Check special requirements (custom logic)
   */
  private static async checkSpecialRequirement(userId: string, badge: any): Promise<boolean> {
    if (badge.slug === 'early-adopter') {
      // Check if user joined in first month of launch
      const { data: user } = await supabaseAdmin
        .from('users')
        .select('created_at')
        .eq('id', userId)
        .single();

      if (!user) return false;

      // Assuming launch date is when first user was created
      const { data: firstUser } = await supabaseAdmin
        .from('users')
        .select('created_at')
        .order('created_at', { ascending: true })
        .limit(1)
        .single();

      if (!firstUser) return false;

      const oneMonthAfterLaunch = new Date(firstUser.created_at);
      oneMonthAfterLaunch.setMonth(oneMonthAfterLaunch.getMonth() + 1);

      return new Date(user.created_at) <= oneMonthAfterLaunch;
    }

    if (badge.slug === 'explorer') {
      // Check if user has activities in both PT and EN locales
      const { data: activities } = await supabaseAdmin
        .from('user_activities')
        .select('metadata')
        .eq('user_id', userId);

      const locales = new Set(
        (activities || [])
          .map(a => (a.metadata as any)?.locale)
          .filter(Boolean)
      );

      return locales.size >= 2;
    }

    if (badge.slug === 'super-sharer') {
      // Check if user shared on all 3 platforms
      const { data: activities } = await supabaseAdmin
        .from('user_activities')
        .select('metadata')
        .eq('user_id', userId)
        .eq('action_type', 'SHARE');

      const platforms = new Set(
        (activities || [])
          .map(a => (a.metadata as any)?.platform)
          .filter(Boolean)
      );

      return platforms.size >= 3;
    }

    return false;
  }

  /**
   * Helper: Count activities by hour range
   */
  private static async countActivitiesByHour(
    userId: string,
    startHour: number,
    endHour: number
  ): Promise<number> {
    const { data: activities } = await supabaseAdmin
      .from('user_activities')
      .select('created_at')
      .eq('user_id', userId)
      .eq('action_type', 'GENERATE');

    return (activities || []).filter(activity => {
      const hour = new Date(activity.created_at).getHours();
      return hour >= startHour && hour < endHour;
    }).length;
  }

  /**
   * Helper: Get action type for badge slug
   */
  private static getActionTypeForBadge(slug: string): any {
    if (slug.includes('share') || slug.includes('influencer') || slug.includes('viral')) {
      return 'SHARE';
    }
    return 'GENERATE';
  }

  /**
   * Get all badges with user's progress
   */
  static async getBadgesWithProgress(userId: string) {
    const { data: allBadges } = await supabaseAdmin
      .from('badges')
      .select('*')
      .order('category', { ascending: true })
      .order('requirement_value', { ascending: true });

    const { data: userBadges } = await supabaseAdmin
      .from('user_badges')
      .select('*')
      .eq('user_id', userId);

    const userBadgeMap = new Map(
      (userBadges || []).map(ub => [ub.badge_id, ub])
    );

    return (allBadges || []).map(badge => ({
      ...badge,
      // Map back to camelCase for frontend if needed?
      // Assuming frontend matches types which are likely from Prisma.
      // We should probably map response to match what frontend expects.
      requirementValue: badge.requirement_value,
      pointsReward: badge.points_reward,
      requirementType: badge.requirement_type,
      namePt: badge.name_pt,
      nameEn: badge.name_en,
      descriptionPt: badge.description_pt,
      descriptionEn: badge.description_en,

      isUnlocked: userBadgeMap.has(badge.id),
      unlockedAt: userBadgeMap.get(badge.id)?.unlocked_at ? new Date(userBadgeMap.get(badge.id)?.unlocked_at) : undefined,
      progress: userBadgeMap.get(badge.id)?.progress || 0,
    }));
  }

  /**
   * Get user's unlocked badges
   */
  static async getUserBadges(userId: string) {
    const { data } = await supabaseAdmin
      .from('user_badges')
      .select('*, badge:badges(*)')
      .eq('user_id', userId)
      .order('unlocked_at', { ascending: false });

    // Map result structure
    return (data || []).map(ub => ({
      ...ub,
      userId: ub.user_id,
      badgeId: ub.badge_id,
      unlockedAt: new Date(ub.unlocked_at),
      badge: {
        ...ub.badge,
        requirementValue: ub.badge.requirement_value,
        pointsReward: ub.badge.points_reward,
        namePt: ub.badge.name_pt,
        nameEn: ub.badge.name_en,
        // etc
      }
    }));
  }
}
