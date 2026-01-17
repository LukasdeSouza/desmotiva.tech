'use client';

import { useState } from 'react';
import { phrases } from './utils/mocks';
import Image from 'next/image';

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
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentPhrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 Pegue o seu em: desmotiva.tech`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 #desmotivatech`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Desmotiva Tech Logo"
              width={200}
              height={200}
              className="mx-auto rounded-lg"
              priority
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            desmotiva.tech
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl -mt-4 font-light">
            sua dose diária de desmotivação, <i>antes da daily</i>.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
          {/* Button */}
          <button
            onClick={getRandomPhrase}
            className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 text-lg"
          >
            Pegue aqui seu desmotivacional
          </button>

          {/* Phrase Display */}
          {isVisible && (
            <div 
              key={animationKey}
              className={`bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-3xl w-full text-center ${
                animationKey === 0 ? 'animate-fade-in' : 'animate-phrase-update'
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-100 mb-6 font-light">
                "{currentPhrase}"
              </p>
              
              {/* Share Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>

                <button
                  onClick={shareWhatsApp}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>

                <button
                  onClick={shareTwitter}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-center">
          <p className="text-gray-500 text-sm">
            Feito com 💔 por @deveprogramar <br /> (para desenvolvedores que precisam de uma realidade check)
          </p>
        </div>
      </main>
    </div>
  );
}