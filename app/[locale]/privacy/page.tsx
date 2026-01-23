import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPage' });

  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('lastUpdated')}
          </p>
        </header>

        {/* Privacy Policy Content */}
        <article className="max-w-4xl w-full space-y-8 text-gray-300 leading-relaxed">
          {/* Introduction */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('intro.title')}</h2>
            <div className="space-y-4">
              <p>{t('intro.paragraph1')}</p>
              <p>{t('intro.paragraph2')}</p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('collection.title')}</h2>
            <div className="space-y-4">
              <p>{t('collection.intro')}</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('collection.automatic.title')}</h3>
                  <p>{t('collection.automatic.description')}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>{t('collection.automatic.item1')}</li>
                    <li>{t('collection.automatic.item2')}</li>
                    <li>{t('collection.automatic.item3')}</li>
                    <li>{t('collection.automatic.item4')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('collection.cookies.title')}</h3>
                  <p>{t('collection.cookies.description')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('usage.title')}</h2>
            <div className="space-y-4">
              <p>{t('usage.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>{t('usage.item1')}</li>
                <li>{t('usage.item2')}</li>
                <li>{t('usage.item3')}</li>
                <li>{t('usage.item4')}</li>
                <li>{t('usage.item5')}</li>
              </ul>
            </div>
          </section>

          {/* Google Analytics */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('analytics.title')}</h2>
            <div className="space-y-4">
              <p>{t('analytics.paragraph1')}</p>
              <p>{t('analytics.paragraph2')}</p>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <p className="text-sm">
                  {t('analytics.learnMore')}{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {t('analytics.link')}
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Google AdSense */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('adsense.title')}</h2>
            <div className="space-y-4">
              <p>{t('adsense.paragraph1')}</p>
              <p>{t('adsense.paragraph2')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>{t('adsense.item1')}</li>
                <li>{t('adsense.item2')}</li>
                <li>{t('adsense.item3')}</li>
              </ul>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-4">
                <p className="text-sm">
                  {t('adsense.optOut')}{' '}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {t('adsense.optOutLink')}
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('sharing.title')}</h2>
            <div className="space-y-4">
              <p>{t('sharing.paragraph1')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>{t('sharing.item1')}</li>
                <li>{t('sharing.item2')}</li>
                <li>{t('sharing.item3')}</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('rights.title')}</h2>
            <div className="space-y-4">
              <p>{t('rights.intro')}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>{t('rights.item1')}</li>
                <li>{t('rights.item2')}</li>
                <li>{t('rights.item3')}</li>
                <li>{t('rights.item4')}</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('security.title')}</h2>
            <p>{t('security.paragraph1')}</p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('children.title')}</h2>
            <p>{t('children.paragraph1')}</p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('changes.title')}</h2>
            <p>{t('changes.paragraph1')}</p>
          </section>

          {/* Contact */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('contact.title')}</h2>
            <div className="space-y-4">
              <p>{t('contact.paragraph1')}</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://instagram.com/deveprogramar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  {t('contact.twitter')}
                </a>
              </div>
            </div>
          </section>
        </article>

        {/* Back Button */}
        <div className="mt-12">
          <a 
            href="/" 
            className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 inline-block font-semibold"
          >
            ← {t('backButton')}
          </a>
        </div>
      </main>
    </div>
  );
}
