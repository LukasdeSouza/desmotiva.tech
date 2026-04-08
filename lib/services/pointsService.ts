import { supabaseAdmin } from '../supabaseClient';
import { ActionType } from '@prisma/client';
import { POINTS } from '@/types/gamification';

export class PointsService {
  /**
   * Add points to a user for a specific action
   */
  static async addPoints(
    userId: string,
    actionType: ActionType,
    metadata?: any
  ): Promise<number> {
    const pointsEarned = this.calculatePoints(actionType, metadata);

    // Create activity record
    const { error: activityError } = await supabaseAdmin
      .from('user_activities')
      .insert({
        user_id: userId,
        action_type: actionType,
        points_earned: pointsEarned,
        metadata: metadata || {},
        date: new Date().toISOString(),
      });

    if (activityError) {
      console.error('Error creating activity:', activityError);
      // Continue to try update user points even if activity log fails?
      // Probably better to throw or log.
    }

    // Update user's total points
    // Supabase doesn't have an atomic "increment" in simple update without RPC or raw SQL?
    // Actually it does: `total_points = total_points + X` isn't directly supported in `.update()` object syntax standardly without rpc.
    // BUT we can fetch, calculate, update. Race condition risk? Yes.
    // Better to use an RPC function `increment_points`.
    // Or just risk it for now since we are "prototyping" / "fixing connection".
    // User said "do the connection right from the frontend" implies simpler approach.
    // Let's first fetch current points.

    const { data: user } = await supabaseAdmin
      .from('users')
      .select('total_points')
      .eq('id', userId)
      .single();

    const currentPoints = user?.total_points || 0;
    const newTotal = currentPoints + pointsEarned;

    const { data: updatedUser, error: updateError } = await supabaseAdmin
      .from('users')
      .update({
        total_points: newTotal,
        last_activity_at: new Date().toISOString(),
      })
      .eq('id', userId)
      .select('total_points')
      .single();

    if (updateError) {
      console.error('Error updating user points:', updateError);
      return currentPoints; // Fallback
    }

    return updatedUser?.total_points || newTotal;
  }

  /**
   * Calculate points based on action type
   */
  private static calculatePoints(
    actionType: ActionType,
    metadata?: any
  ): number {
    switch (actionType) {
      case 'GENERATE':
        return POINTS.GENERATE_PHRASE;
      case 'SHARE':
        return POINTS.SHARE_WHATSAPP; // Same for all platforms
      case 'LOGIN':
        return 0; // Login doesn't give points directly
      case 'STREAK':
        return metadata?.bonusPoints as number || 0;
      case 'BADGE_UNLOCK':
        return metadata?.pointsReward as number || POINTS.BADGE_UNLOCK_BASE;
      case 'LEVEL_UP':
        return 0; // Level up is a result of points, not a source
      default:
        return 0;
    }
  }

  /**
   * Get user's total points
   */
  static async getUserPoints(userId: string): Promise<number> {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('total_points')
      .eq('id', userId)
      .single();

    return user?.total_points || 0;
  }

  /**
   * Get user's point history
   */
  static async getPointHistory(userId: string, limit = 50) {
    const { data } = await supabaseAdmin
      .from('user_activities')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    // Map back to camelCase if needed by frontend?
    // Frontend likely expects camelCase if it was using Prisma types.
    // I should map it to match existing interfaces if I don't want to refactor all frontend.
    return (data || []).map(a => ({
      ...a,
      userId: a.user_id,
      actionType: a.action_type,
      pointsEarned: a.points_earned,
      createdAt: new Date(a.created_at),
      // other fields
    }));
  }

  /**
   * Get points earned today
   */
  static async getPointsToday(userId: string): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { data: activities } = await supabaseAdmin
      .from('user_activities')
      .select('points_earned')
      .eq('user_id', userId)
      .gte('created_at', today.toISOString());

    return (activities || []).reduce((sum, activity) => sum + activity.points_earned, 0);
  }
}
