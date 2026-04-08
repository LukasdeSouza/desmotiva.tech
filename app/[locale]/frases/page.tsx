'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { categories, getPhrasesByCategory, Phrase } from '../../utils/mocks';
import MemeGenerator from '../../components/MemeGenerator';

export default function CategoriasPage() {
  const t = useTranslations('CategoriesPage');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPhrase, setCurrentPhrase] = useState<string>('');
  const [showMeme, setShowMeme] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const filteredPhrases = getPhrasesByCategory(selectedCategory);

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * filteredPhrases.length);
    const newPhrase = filteredPhrases[randomIndex].text;
    setAnimationKey(prev => prev + 1);
    setCurrentPhrase(newPhrase);
    setShowMeme(false);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 Pegue o seu em: desmotiva.dev/frases\n#desmotivadev`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`${currentPhrase}\n\n🔥 #desmotivadev`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        <header className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frases por Categoria
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha uma categoria e pegue sua dose diária de realidade
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12 max-w-4xl w-full">
          <button
            onClick={() => { setSelectedCategory('all'); setCurrentPhrase(''); setShowMeme(false); }}
            className={`p-4 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🎲 Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setCurrentPhrase(''); setShowMeme(false); }}
              className={`p-4 rounded-lg font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        <div className="w-full max-w-3xl">
          {currentPhrase ? (
            <div className="space-y-6">
              <div key={animationKey} className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8 text-center">
                <p className="text-xl sm:text-2xl text-white leading-relaxed">
                  "{currentPhrase}"
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={generateRandom}
                  className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  🎲 Nova Frase
                </button>
                <button
                  onClick={() => setShowMeme(!showMeme)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium"
                >
                  🖼️ Gerar Meme
                </button>
                <button
                  onClick={shareWhatsApp}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium"
                >
                  📱 WhatsApp
                </button>
                <button
                  onClick={shareTwitter}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors font-medium"
                >
                  🐦 Twitter
                </button>
              </div>

              {showMeme && (
                <div className="mt-6">
                  <MemeGenerator phrase={currentPhrase} showControls={true} />
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6">
              <p className="text-gray-400 text-lg">
                {selectedCategory === 'all' 
                  ? 'Clique em "Gerar Frase" para começar'
                  : `${filteredPhrases.length} frases disponíveis nesta categoria`
                }
              </p>
              <button
                onClick={generateRandom}
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-semibold text-lg"
              >
                🎲 Gerar Frase
              </button>
            </div>
          )}
        </div>

        <div className="mt-12">
          <Link 
            href="/"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            ← Voltar ao Início
          </Link>
        </div>
      </main>
    </div>
  );
}