import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdSense from '../../components/AdSense';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPage' });

  return {
    title: t('title'),
    description: t('metaDescription'),
  };
}

export default function BlogPage() {
  const t = useTranslations('BlogPage');

  const blogPosts = [
    {
      id: 1,
      title: t('post1.title'),
      excerpt: t('post1.excerpt'),
      date: t('post1.date'),
      readTime: t('post1.readTime'),
      category: t('post1.category'),
    },
    {
      id: 2,
      title: t('post2.title'),
      excerpt: t('post2.excerpt'),
      date: t('post2.date'),
      readTime: t('post2.readTime'),
      category: t('post2.category'),
    },
    {
      id: 3,
      title: t('post3.title'),
      excerpt: t('post3.excerpt'),
      date: t('post3.date'),
      readTime: t('post3.readTime'),
      category: t('post3.category'),
    },
    {
      id: 4,
      title: t('post4.title'),
      excerpt: t('post4.excerpt'),
      date: t('post4.date'),
      readTime: t('post4.readTime'),
      category: t('post4.category'),
    },
  ];

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

        {/* Blog Posts Grid */}
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-200 hover:transform hover:scale-[1.02]"
              >
                <div className="p-6 sm:p-8">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 text-white hover:text-gray-300 transition-colors">
                    {post.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 cursor-pointer">
                    {t('readMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* AdSense - Middle */}
          <div className="my-12">
            <AdSense 
              adSlot="auto"
              adFormat="rectangle"
              style={{ display: 'block', textAlign: 'center' }}
            />
          </div>

          {/* Featured Content Section */}
          <section className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">{t('featured.title')}</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('featured.item1.title')}</h3>
                <p className="text-gray-300">{t('featured.item1.description')}</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('featured.item2.title')}</h3>
                <p className="text-gray-300">{t('featured.item2.description')}</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-white mb-2">{t('featured.item3.title')}</h3>
                <p className="text-gray-300">{t('featured.item3.description')}</p>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-800 rounded-lg p-6 sm:p-8 mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('newsletter.title')}</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              {t('newsletter.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200">
                {t('newsletter.button')}
              </button>
            </div>
          </section>

          {/* AdSense - Bottom */}
          <div className="my-12">
            <AdSense 
              adSlot="auto"
              adFormat="auto"
              style={{ display: 'block', textAlign: 'center' }}
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
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
