import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AdSense from '../../components/AdSense';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ResourcesPage' });

  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default function ResourcesPage() {
  const t = useTranslations('ResourcesPage');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        {/* Resources Content */}
        <div className="max-w-4xl w-full space-y-12">
          {/* Learning Platforms */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span>📚</span> {t('learning.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('learning.item1.name')}</h3>
                <p className="text-gray-300 mb-2">{t('learning.item1.description')}</p>
                <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  freecodecamp.org →
                </a>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('learning.item2.name')}</h3>
                <p className="text-gray-300 mb-2">{t('learning.item2.description')}</p>
                <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  theodinproject.com →
                </a>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('learning.item3.name')}</h3>
                <p className="text-gray-300 mb-2">{t('learning.item3.description')}</p>
                <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  codecademy.com →
                </a>
              </div>
            </div>
          </section>

          {/* Developer Tools */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span>🛠️</span> {t('tools.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('tools.item1.name')}</h3>
                <p className="text-gray-300 mb-2">{t('tools.item1.description')}</p>
                <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  code.visualstudio.com →
                </a>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('tools.item2.name')}</h3>
                <p className="text-gray-300 mb-2">{t('tools.item2.description')}</p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  github.com →
                </a>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('tools.item3.name')}</h3>
                <p className="text-gray-300 mb-2">{t('tools.item3.description')}</p>
                <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  postman.com →
                </a>
              </div>
            </div>
          </section>

          {/* AdSense - Middle */}
          <div className="my-8">
            <AdSense 
              adSlot="auto"
              adFormat="rectangle"
              style={{ display: 'block', textAlign: 'center' }}
            />
          </div>

          {/* Communities */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span>👥</span> {t('communities.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('communities.item1.name')}</h3>
                <p className="text-gray-300 mb-2">{t('communities.item1.description')}</p>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  stackoverflow.com →
                </a>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('communities.item2.name')}</h3>
                <p className="text-gray-300 mb-2">{t('communities.item2.description')}</p>
                <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  dev.to →
                </a>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('communities.item3.name')}</h3>
                <p className="text-gray-300 mb-2">{t('communities.item3.description')}</p>
                <a href="https://www.reddit.com/r/programming" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                  reddit.com/r/programming →
                </a>
              </div>
            </div>
          </section>

          {/* Books */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span>📖</span> {t('books.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('books.item1.name')}</h3>
                <p className="text-gray-300">{t('books.item1.description')}</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('books.item2.name')}</h3>
                <p className="text-gray-300">{t('books.item2.description')}</p>
              </div>
              <div className="border-l-4 border-lime-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('books.item3.name')}</h3>
                <p className="text-gray-300">{t('books.item3.description')}</p>
              </div>
            </div>
          </section>

          {/* Podcasts */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span>🎙️</span> {t('podcasts.title')}
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-rose-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('podcasts.item1.name')}</h3>
                <p className="text-gray-300">{t('podcasts.item1.description')}</p>
              </div>
              <div className="border-l-4 border-violet-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('podcasts.item2.name')}</h3>
                <p className="text-gray-300">{t('podcasts.item2.description')}</p>
              </div>
              <div className="border-l-4 border-fuchsia-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('podcasts.item3.name')}</h3>
                <p className="text-gray-300">{t('podcasts.item3.description')}</p>
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
        </div>

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
