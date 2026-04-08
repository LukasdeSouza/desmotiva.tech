import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { LeaderboardService } from '@/lib/services/leaderboardService';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabaseClient';

export default async function LeaderboardPage() {
  const t = await getTranslations('Leaderboard');
  const leaderboardData = await LeaderboardService.getLeaderboard('monthly');

  // Get current user from cookie
  const cookieStore = await cookies();
  const guestIdCookie = cookieStore.get('guest_id');
  const clerkId = guestIdCookie?.value;

  let internalUserId: string | null = null;

  if (clerkId) {
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('clerk_id', clerkId)
      .single();
    internalUserId = user?.id || null;
  }

  const currentUserEntry = internalUserId ? await LeaderboardService.getUserLeaderboardEntry(internalUserId) : null;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-gray-400">
            {t('subtitle')}
          </p>
        </header>

        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800/50 text-left text-xs uppercase tracking-wider text-gray-400">
                <th className="px-6 py-4 font-medium">{t('rank')}</th>
                <th className="px-6 py-4 font-medium">{t('user')}</th>
                <th className="px-6 py-4 font-medium text-right">{t('points')}</th>
                <th className="px-6 py-4 font-medium text-right hidden sm:table-cell">{t('phrases')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {leaderboardData.map((entry) => (
                <tr
                  key={entry.userId}
                  className={`transition-colors ${currentUserEntry?.userId === entry.userId
                    ? 'bg-blue-900/20 hover:bg-blue-900/30 border-l-2 border-blue-500'
                    : 'hover:bg-gray-800/30'
                    }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                      entry.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                        entry.rank === 3 ? 'bg-amber-600/20 text-amber-600' :
                          'text-gray-500'
                      }`}>
                      {entry.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {entry.avatarUrl ? (
                        <Image
                          src={entry.avatarUrl}
                          alt={entry.username}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                          {entry.username.charAt(0)}
                        </div>
                      )}
                      <span className="font-medium">{entry.username}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-white">
                    {entry.points.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-400 hidden sm:table-cell">
                    {entry.phrasesGenerated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {leaderboardData.length === 0 && (
            <div className="py-20 text-center text-gray-500">
              {t('empty')}
            </div>
          )}
        </div>

        {/* Current User Rank (if not in top listing) */}
        {currentUserEntry && !leaderboardData.find(u => u.userId === currentUserEntry.userId) && (
          <div className="mt-8 bg-blue-900/20 border border-blue-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 bg-blue-900/40 text-sm font-semibold text-blue-200">
              {t('yourPosition')}
            </div>
            <table className="w-full">
              <tbody>
                <tr className="bg-blue-900/10">
                  <td className="px-6 py-4 whitespace-nowrap w-[100px]">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full font-bold bg-blue-500/20 text-blue-400">
                      {currentUserEntry.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-700/50 rounded-full flex items-center justify-center text-xs text-white">
                        {currentUserEntry.username.charAt(0)}
                      </div>
                      <span className="font-medium text-white">{currentUserEntry.username} (Você)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-white">
                    {currentUserEntry.points.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-400 hidden sm:table-cell">
                    {currentUserEntry.phrasesGenerated}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>

  );
}
