'use client';

import { useState } from 'react';
import { categories } from '../utils/mocks';

interface SubmitPhraseProps {
  onClose?: () => void;
}

export default function SubmitPhrase({ onClose }: SubmitPhraseProps) {
  const [phraseText, setPhraseText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phraseText.trim().length < 10) {
      setMessage({ type: 'error', text: 'Frase muito curta (mínimo 10 caracteres)' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      // Get guest ID
      let guestId = document.cookie.match(/guest_id=([^;]+)/)?.[1];
      if (!guestId) {
        guestId = `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        document.cookie = `guest_id=${guestId};max-age=${60*60*24*365*10};path=/`;
      }

      const response = await fetch('/api/phrases/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: phraseText,
          category: selectedCategory,
          authorId: guestId
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Frase submetida com sucesso! 🎉' });
        setPhraseText('');
        setSelectedCategory('general');
        
        // Fechar modal após 2 segundos (se onClose existir)
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Erro ao submeter frase' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro de conexão. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-xl w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Submitir Frase ✍️</h3>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Mande sua frase desmotivacional! Ela vai entrar na rotação junto com as outras.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Sua frase</label>
          <textarea
            value={phraseText}
            onChange={(e) => setPhraseText(e.target.value)}
            placeholder="Ex: Seu código tá tão lento que o GitHub demorou 3 anos pra fazer o merge..."
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            rows={4}
            maxLength={500}
          />
          <p className="text-gray-500 text-xs mt-1">{phraseText.length}/500 caracteres</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">Categoria</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="general">🌐 Geral</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.emoji} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            message.type === 'success' 
              ? 'bg-green-600/20 text-green-400 border border-green-600' 
              : 'bg-red-600/20 text-red-400 border border-red-600'
          }`}>
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || phraseText.trim().length < 10}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Frase'}
        </button>
      </form>

      <p className="text-gray-500 text-xs mt-4 text-center">
        Frases com palavras impróprias serão bloqueadas automaticamente.
      </p>
    </div>
  );
}