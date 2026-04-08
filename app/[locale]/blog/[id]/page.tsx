import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AdsterraAd from '../../../components/AdSense';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPage' });

  // Validate ID
  if (!['1', '2', '3', '4', '5', '6', '7'].includes(id)) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: t(`post${id}.title`),
    description: t(`post${id}.excerpt`),
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params;

  if (!['1', '2', '3', '4', '5', '6', '7'].includes(id)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'BlogPage' });

  const post = {
    title: t(`post${id}.title`),
    date: t(`post${id}.date`),
    readTime: t(`post${id}.readTime`),
    category: t(`post${id}.category`),
    content: t(`post${id}.content`),
  };

  // Simple Markdown Renderer
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-white">{line.replace('## ', '')}</h2>;
      }
      // Empty lines
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // Code blocks (simple inline)
      if (line.startsWith('`') && line.endsWith('`')) {
        return <div key={index} className="bg-gray-800 p-4 rounded-lg my-4 font-mono text-sm sm:text-base text-gray-300 overflow-x-auto">{line.replace(/`/g, '')}</div>;
      }

      // Paragraphs
      return <p key={index} className="mb-4 text-gray-300 leading-relaxed text-lg">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        <article className="max-w-3xl w-full">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-6 flex gap-3">
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                ← {locale === 'pt' ? 'Voltar para Blog' : 'Back to Blog'}
              </Link>
            </div>

            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400 border-b border-gray-800 pb-8">
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
          </header>

           {/* Native Banner Top */}
           <div className="mb-8">
             <AdsterraAd
               adType="native-banner"
               adId="ed70a6f25111703ef2de856b55878c9c"
               style={{ display: 'block' }}
             />
           </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

           {/* Popunder Bottom */}
           <div className="mt-12">
             <AdsterraAd
               adType="popunder"
               adId="39ad003a4c4550d552b7bb09f385cafb"
             />
           </div>
        </article>
      </main>
    </div>
  );
}
