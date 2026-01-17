'use client';

import { useState } from 'react';
import { phrases } from './utils/mocks';
import { sendGAEvent } from '@next/third-parties/google';
import Image from 'next/image';
import AdSense from './components/AdSense';

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const newPhrase = phrases[randomIndex];
    
    if (isVisible) {
      // Se já tem uma frase visível, anima a troca
      setAnimationKey(prev => prev + 1);
    }
    
    setCurrentPhrase(newPhrase);
    setIsVisible(true);
    setCopied(false);

    // Track event no Google Analytics
    sendGAEvent('event', 'generate_phrase', {
      event_category: 'engagement',
      event_label: 'new_phrase_generated'
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentPhrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Track copy event
      sendGAEvent('event', 'copy_phrase', {
        event_category: 'engagement',
        event_label: 'phrase_copied'
      });
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 Pegue o seu em: desmotiva.dev`);
    window.open(`https://wa.me/?text=${text}`, '_blank');

    // Track WhatsApp share
    sendGAEvent('event', 'share', {
      method: 'whatsapp',
      content_type: 'phrase',
      event_category: 'social_share'
    });
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 #desmotivadev`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');

    // Track Twitter share
    sendGAEvent('event', 'share', {
      method: 'twitter',
      content_type: 'phrase',
      event_category: 'social_share'
    });
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Desmotiva Dev",
            "description": "Sua dose diária de desmotivação para desenvolvedores",
            "url": "https://desmotiva.dev",
            "author": {
              "@type": "Person",
              "name": "@deveprogramar"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Desmotiva Dev"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://desmotiva.dev/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Frases Desmotivacionais para Desenvolvedores",
              "description": "Coleção de frases engraçadas e desmotivacionais sobre programação, desenvolvimento de software e carreira tech",
              "genre": "Humor",
              "inLanguage": "pt-BR"
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-black text-white font-sans">
        <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 font-sans sm:px-6 sm:py-12">
          {/* Header */}
          <header className="text-center mb-12 sm:mb-16">
            <div>
              <Image
                src="/logo-rosto-desmotiva.dev.png"
                alt="Desmotiva Dev - Humor para desenvolvedores e programadores"
                width={160}
                height={160}
                className="mx-auto rounded-lg sm:w-[200px] sm:h-[200px]"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              desmotiva.dev
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl -mt-2 sm:-mt-4 mb-2 sm:mb-1 font-light px-4">
              sua dose diária de desmotivação, <i>antes da daily</i>.
            </p>
            <small className='font-light px-3 py-1 bg-slate-600 rounded-xl text-xs sm:text-sm'>100+ frases and counting</small>
          </header>

          {/* Main Content */}
          <section className="flex flex-col items-center gap-6 sm:gap-8 max-w-4xl w-full">
            {/* Button */}
            <button
              onClick={getRandomPhrase}
              className="px-6 sm:px-8 py-3 sm:py-4 -mt-4 sm:-mt-6 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 text-base sm:text-lg w-full max-w-xs sm:max-w-none sm:w-auto"
              aria-label="Gerar frase desmotivacional aleatória para desenvolvedores"
            >
              Pegue aqui seu desmotivacional
            </button>

            {/* Anúncio Lateral (Desktop) */}
            <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
              <AdSense 
                adSlot="auto"
                adFormat="rectangle"
                style={{ display: 'block', width: '300px', height: '250px' }}
              />
            </div>

            {/* Phrase Display */}
            {isVisible && (
              <article 
                key={animationKey}
                className={`bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-8 max-w-3xl w-full text-center mx-4 sm:mx-0 ${
                  animationKey === 0 ? 'animate-fade-in' : 'animate-phrase-update'
                }`}
              >
                <blockquote className="text-lg sm:text-xl leading-relaxed text-gray-100 mb-4 sm:mb-6">
                  "{currentPhrase}"
                </blockquote>
                
                {/* Share Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4" role="group" aria-label="Opções de compartilhamento">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                    aria-label="Copiar frase para área de transferência"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>

                  <button
                    onClick={shareWhatsApp}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                    aria-label="Compartilhar no WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </button>

                  <button
                    onClick={shareTwitter}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                    aria-label="Compartilhar no Twitter"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                </div>

                {/* Anúncio após a frase */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                  <AdSense 
                    adSlot="auto"
                    adFormat="rectangle"
                    className="mx-auto"
                    style={{ display: 'block', textAlign: 'center', maxWidth: '336px' }}
                  />
                </div>
              </article>
            )}

            {/* Anúncio Banner no Footer - Mobile Friendly */}
            <div className="w-full max-w-4xl mt-8 sm:mt-12 mb-6 sm:mb-8 px-4 sm:px-0">
              <AdSense 
                adSlot="auto"
                adFormat="auto"
                style={{ display: 'block', textAlign: 'center' }}
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center px-4">
            <nav className="mb-4 space-x-4">
              <a href="/faq" className="text-gray-400 hover:text-gray-300 transition-colors text-sm underline">
                FAQ
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors text-sm underline">
                Privacidade
              </a>
            </nav>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Feito com 💔 por <a href="https://twitter.com/deveprogramar" className="hover:text-gray-300 transition-colors">@deveprogramar</a> <br /> 
              (para desenvolvedores que precisam de uma realidade check)
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}