'use client';

import { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

type MemeStyle = 'dark' | 'terminal' | 'syntax' | 'classic' | 'neon';

interface MemeGeneratorProps {
  phrase: string;
  showControls?: boolean;
}

const styleConfigs = {
  dark: {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
    text: '#ffffff',
    accent: '#3b82f6',
    font: 'system-ui, -apple-system, sans-serif',
    border: '1px solid #333',
  },
  terminal: {
    background: '#0d1117',
    text: '#00ff41',
    accent: '#00ff41',
    font: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    border: '2px solid #00ff41',
  },
  syntax: {
    background: '#1e1e1e',
    text: '#d4d4d4',
    accent: '#569cd6',
    font: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    border: 'none',
  },
  classic: {
    background: '#000000',
    text: '#ffffff',
    accent: '#ff4444',
    font: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    border: 'none',
  },
  neon: {
    background: '#0a0a0f',
    text: '#ff00ff',
    accent: '#00ffff',
    font: 'system-ui, -apple-system, sans-serif',
    border: '2px solid #ff00ff',
  },
};

export default function MemeGenerator({ phrase, showControls = true }: MemeGeneratorProps) {
  const [customPhrase, setCustomPhrase] = useState(phrase);
  const [selectedStyle, setSelectedStyle] = useState<MemeStyle>('dark');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const memeRef = useRef<HTMLDivElement>(null);

  const config = styleConfigs[selectedStyle];

  const generateImage = useCallback(async () => {
    if (!memeRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(memeRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      
      const dataUrl = canvas.toDataURL('image/png');
      download(dataUrl, `desmotiva-${Date.now()}.png`);
    } catch (error) {
      console.error('Erro ao gerar meme:', error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const copyToClipboard = useCallback(async () => {
    if (!memeRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(memeRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });
      
      canvas.toBlob(async (blob) => {
        if (blob) {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      });
    } catch (error) {
      console.error('Erro ao copiar:', error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${customPhrase}\n\n🔥 Pegue o seu em: desmotiva.dev` + (showControls ? '\n#desmotivadev' : ''));
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`${customPhrase}\n\n🔥 #desmotivadev`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareLinkedIn = () => {
    const text = encodeURIComponent(`${customPhrase}\n\n🔥 Pegue o seu em: desmotiva.dev`);
    const url = encodeURIComponent('https://desmotiva.dev');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, '_blank');
  };

  return (
    <div className="w-full">
      {showControls && (
        <div className="mb-4 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Frase</label>
            <textarea
              value={customPhrase}
              onChange={(e) => setCustomPhrase(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
              rows={3}
              placeholder="Digite sua frase..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Estilo</label>
            <div className="flex flex-wrap gap-2">
              {(['dark', 'terminal', 'syntax', 'classic', 'neon'] as MemeStyle[]).map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedStyle === style
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {style === 'dark' && '⚫ Dark'}
                  {style === 'terminal' && '💻 Terminal'}
                  {style === 'syntax' && '📝 Code'}
                  {style === 'classic' && '🔴 Classic'}
                  {style === 'neon' && '💜 Neon'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        ref={memeRef}
        className="relative p-6 rounded-xl overflow-hidden"
        style={{
          background: config.background,
          border: config.border,
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="text-center">
          <p
            style={{
              color: config.text,
              fontFamily: config.font,
              fontSize: '1.25rem',
              fontWeight: 600,
              lineHeight: 1.6,
              textAlign: 'center',
              wordBreak: 'break-word',
            }}
          >
            {customPhrase}
          </p>
        </div>
        
        {selectedStyle === 'classic' && (
          <div
            className="absolute bottom-4 right-4 text-xs"
            style={{ color: config.text, opacity: 0.7 }}
          >
            desmotiva.dev
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={generateImage}
          disabled={isGenerating}
          className="flex-1 min-w-[140px] px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {isGenerating ? 'Gerando...' : 'Download'}
        </button>

        <button
          onClick={copyToClipboard}
          disabled={isGenerating}
          className="flex-1 min-w-[140px] px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar Imagem
            </>
          )}
        </button>

        {showControls && (
          <div className="flex gap-2 w-full mt-2">
            <button
              onClick={shareWhatsApp}
              className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp
            </button>

            <button
              onClick={shareTwitter}
              className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </button>

            <button
              onClick={shareLinkedIn}
              className="flex-1 px-4 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>
          </div>
        )}
      </div>
    </div>
  );
}