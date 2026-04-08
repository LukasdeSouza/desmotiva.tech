import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { ActivityService } from '@/lib/services/activityService';
import { BadgeService } from '@/lib/services/badgeService';
import { LeaderboardService } from '@/lib/services/leaderboardService';
import Image from 'next/image';
import { supabaseAdmin } from '@/lib/supabaseClient';

import { cookies } from 'next/headers';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const guestId = cookieStore.get('guest_id')?.value;

  let internalUserId: string | null = null;

  if (guestId) {
    const { data } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('clerk_id', guestId)
      .single();
    internalUserId = data?.id || null;
  }

  // If no user found, maybe redirect to home or show empty state?
  // Current logic showed stats for targetUserId.
  if (!internalUserId) {
    // Redirecting to home if no profile found seems reasonable for now
    redirect('/');
  }

  const targetUserId = internalUserId;

  const t = await getTranslations('Profile');

  const [summary, badges, rank] = await Promise.all([
    ActivityService.getActivitySummary(targetUserId),
    BadgeService.getUserBadges(targetUserId),
    LeaderboardService.getUserRank(targetUserId),
  ]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 flex flex-col sm:flex-row items-center gap-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-4xl border-2 border-gray-700 overflow-hidden">
            {/* Clerk UserButton would be here in client component, but we'll show stats */}
            👤
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-1">{t('title')}</h1>
            <p className="text-gray-400 mb-4">{t('welcome')}</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium border border-gray-700">
                Rank #{rank || '---'}
              </span>
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-medium border border-yellow-500/20">
                {summary.points} {t('points')}
              </span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-medium border border-orange-500/20">
                🔥 {summary.streak.currentStreak} {t('daysStreak')}
              </span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Grid */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-xl font-bold mb-6">{t('stats')}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/50 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-xs uppercase mb-1">{t('phrasesGenerated')}</div>
                <div className="text-2xl font-bold">{summary.phrasesSeenCount}</div>
              </div>
              <div className="p-4 bg-black/50 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-xs uppercase mb-1">{t('badgesUnlocked')}</div>
                <div className="text-2xl font-bold">{summary.badgesCount}</div>
              </div>
              <div className="p-4 bg-black/50 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-xs uppercase mb-1">{t('longestStreak')}</div>
                <div className="text-2xl font-bold">{summary.streak.longestStreak}</div>
              </div>
              <div className="p-4 bg-black/50 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-xs uppercase mb-1">{t('totalPoints')}</div>
                <div className="text-2xl font-bold">{summary.points}</div>
              </div>
            </div>
          </section>

          {/* Badges Preview */}
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{t('latestBadges')}</h2>
              <a href="/badges" className="text-sm text-gray-400 hover:text-white underline">
                {t('viewAll')}
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {badges.slice(0, 6).map((ub) => (
                <div key={ub.badge.id} className="text-3xl" title={ub.badge.namePt}>
                  {ub.badge.icon}
                </div>
              ))}
              {badges.length === 0 && (
                <p className="text-gray-500 text-sm italic py-4">
                  {t('noBadges')}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
