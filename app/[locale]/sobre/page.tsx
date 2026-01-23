import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import AdSense from '../../components/AdSense';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 max-w-4xl">
          <div className="mb-6">
            <Image
              src="/logo-rosto-desmotiva.dev.png"
              alt="Desmotiva Dev Logo"
              width={120}
              height={120}
              className="mx-auto rounded-lg"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        {/* Main Content */}
        <article className="max-w-4xl w-full space-y-8 text-gray-300 leading-relaxed">
          {/* Origin Story */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('origin.title')}</h2>
            <div className="space-y-4">
              <p>{t('origin.paragraph1')}</p>
              <p>{t('origin.paragraph2')}</p>
              <p>{t('origin.paragraph3')}</p>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('mission.title')}</h2>
            <div className="space-y-4">
              <p>{t('mission.paragraph1')}</p>
              <p>{t('mission.paragraph2')}</p>
              <p className="text-lg font-semibold text-gray-200 italic border-l-4 border-gray-600 pl-4">
                {t('mission.quote')}
              </p>
            </div>
          </section>

          {/* AdSense - Middle of content */}
          <div className="my-8">
            <AdSense 
              adSlot="auto"
              adFormat="rectangle"
              style={{ display: 'block', textAlign: 'center' }}
            />
          </div>

          {/* Why It Matters */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('why.title')}</h2>
            <div className="space-y-4">
              <p>{t('why.paragraph1')}</p>
              <p>{t('why.paragraph2')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('why.benefit1')}</li>
                <li>{t('why.benefit2')}</li>
                <li>{t('why.benefit3')}</li>
                <li>{t('why.benefit4')}</li>
              </ul>
            </div>
          </section>

          {/* Creator */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('creator.title')}</h2>
            <div className="space-y-4">
              <p>{t('creator.paragraph1')}</p>
              <p>{t('creator.paragraph2')}</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href="https://instagram.com/deveprogramar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg> */}
                  @deveprogramar
                </a>
              </div>
            </div>
          </section>

          {/* Community */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('community.title')}</h2>
            <div className="space-y-4">
              <p>{t('community.paragraph1')}</p>
              <p>{t('community.paragraph2')}</p>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-400">{t('community.contribute')}</p>
              </div>
            </div>
          </section>

          {/* AdSense - Bottom */}
          <div className="my-8">
            <AdSense 
              adSlot="auto"
              adFormat="auto"
              style={{ display: 'block', textAlign: 'center' }}
            />
          </div>
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
