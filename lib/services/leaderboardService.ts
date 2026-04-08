import { supabaseAdmin } from '../supabaseClient';
import { LeaderboardPeriod, LeaderboardEntry } from '@/types/gamification';

export class LeaderboardService {
  /**
   * Get leaderboard data for a specific period
   */
  static async getLeaderboard(period: LeaderboardPeriod, limit = 50): Promise<LeaderboardEntry[]> {
    let dateFilter: Date | null = null;
    const now = new Date();

    if (period === 'daily') {
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      dateFilter = start;
    } else if (period === 'weekly') {
      const start = new Date(now);
      start.setDate(now.getDate() - 7);
      dateFilter = start;
    } else if (period === 'monthly') {
      const start = new Date(now);
      start.setMonth(now.getMonth() - 1);
      dateFilter = start;
    }

    // 1. Get top users by points
    let query = supabaseAdmin
      .from('users')
      .select('id, display_name, avatar_url, total_points')
      .order('total_points', { ascending: false })
      .limit(limit);

    // Note: Filtering by activity date for the *leaderboard* (users) is complex without a materialized view 
    // or a "points_earned_in_period" table. 
    // The current implementation (and previous Prisma one) sorts by TOTAL points, 
    // but the date filter in Prisma was only filtering the *creation* of the user (createdAt), which might have been a bug or intended for "new users".
    // Looking at previous Prisma code: `dateFilter = { createdAt: { gte: start } };`
    // It filtered users who *joined* in that period. I will replicate that logic.

    if (dateFilter) {
      query = query.gte('created_at', dateFilter.toISOString());
    }

    const { data: topUsers, error } = await query;

    if (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }

    if (!topUsers) return [];

    // 2. Fetch activity counts for these users concurrently
    const leaderboardEntries = await Promise.all(
      topUsers.map(async (user, index) => {
        // Count phrases generated
        const { count: phrasesCount } = await supabaseAdmin
          .from('user_activities')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('action_type', 'GENERATE');

        // Count shares
        const { count: sharesCount } = await supabaseAdmin
          .from('user_activities')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('action_type', 'SHARE');

        return {
          rank: index + 1,
          userId: user.id,
          username: user.display_name || 'Anônimo',
          avatarUrl: user.avatar_url,
          points: user.total_points,
          phrasesGenerated: phrasesCount || 0,
          sharesCount: sharesCount || 0,
        };
      })
    );

    return leaderboardEntries;
  }

  /**
   * Get specific user's leaderboard entry
   */
  static async getUserLeaderboardEntry(userId: string): Promise<LeaderboardEntry | null> {
    // Get User
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, display_name, avatar_url, total_points')
      .eq('id', userId)
      .single();

    if (error || !user) return null;

    const rank = await this.getUserRank(userId);

    // Count phrases
    const { count: phrasesCount } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('action_type', 'GENERATE');

    // Count shares
    const { count: sharesCount } = await supabaseAdmin
      .from('user_activities')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('action_type', 'SHARE');

    return {
      rank: rank || 0,
      userId: user.id,
      username: user.display_name || 'Anônimo',
      avatarUrl: user.avatar_url,
      points: user.total_points,
      phrasesGenerated: phrasesCount || 0,
      sharesCount: sharesCount || 0,
    };
  }

  /**
   * Get user's rank
   */
  static async getUserRank(userId: string): Promise<number | null> {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('total_points')
      .eq('id', userId)
      .single();

    if (!user) return null;

    // Count users with more points
    const { count, error } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .gt('total_points', user.total_points);

    if (error) return null;

    return (count || 0) + 1;
  }
}
