import { getTranslations } from 'next-intl/server';
import { BadgeService } from '@/lib/services/badgeService';

export default async function BadgesPage() {
  const t = await getTranslations('Badges');

  // If not logged in, we can still show the badges but as locked
  const badges = await BadgeService.getBadgesWithProgress('guest_user');

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-gray-400">
            {t('subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-6 rounded-xl border transition-all duration-300 ${badge.isUnlocked
                ? 'bg-gray-900 border-gray-700'
                : 'bg-gray-900/40 border-gray-800 grayscale opacity-60'
                }`}
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <h3 className="text-lg font-bold mb-2">
                {/* We'd need to handle i18n for badge names here, but for now we'll use namePt/nameEn if available */}
                {(badge as any).namePt || (badge as any).name_pt}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {(badge as any).descriptionPt || (badge as any).description_pt}
              </p>

              <div className="mt-auto">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">{t('rarity')}: {badge.rarity}</span>
                  <span className="text-gray-500">{badge.pointsReward} pts</span>
                </div>
                {badge.isUnlocked ? (
                  <div className="text-xs text-green-500 font-medium">
                    ✓ {t('unlocked')}
                  </div>
                ) : (
                  <div className="w-full bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-gray-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (badge.progress / badge.requirementValue) * 100)}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
