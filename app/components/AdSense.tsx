'use client';

import { useEffect } from 'react';

interface AdsterraProps {
  /** Tipo de ad: 'native-banner', 'popunder' ou 'smartlink' */
  adType: 'native-banner' | 'popunder' | 'smartlink';
  /** ID específico do ad (ex: ed70a6f25111703ef2de856b55878c9c para native-banner, 39ad003a4c4550d552b7bb09f385cafb para popunder) */
  adId: string;
  /** Para smartlink: texto do link (padrão: 'Visit Sponsor') */
  linkText?: string;
  /** Classe CSS para o container */
  className?: string;
  /** Estilo inline para o container (útil para native-banner) */
  style?: React.CSSProperties;
}

export default function AdsterraAd({ 
  adType, 
  adId, 
  linkText = 'Visit Sponsor',
  className = '',
  style = {}
}: AdsterraProps) {
  // Scripts base do Adsterra (já com sua conta configurada)
  const nativeBannerScriptUrl = `https://pl29096222.profitablecpmratenetwork.com/${adId}/invoke.js`;
  const popunderScriptUrl = `https://pl29096221.profitablecpmratenetwork.com/39/ad/00/${adId}.js`;
  const smartlinkUrl = `https://www.profitablecpmratenetwork.com/uxeshzem?key=4b8671867e5f90229c71b6cd260939a8`;

  // Carrega o script do Native Banner quando o componente monta
  useEffect(() => {
    if (adType === 'native-banner' && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = nativeBannerScriptUrl;
      document.body.appendChild(script);
      
      // Cleanup
      return () => {
        script.remove();
      };
    }
  }, [adType, adId, nativeBannerScriptUrl]);

  return (
    <div className={className} style={style}>
      {adType === 'native-banner' && (
        <>
          <script async="async" data-cfasync="false" src={nativeBannerScriptUrl} />
          <div id={`container-${adId}`} />
        </>
      )}
      
      {adType === 'popunder' && (
        <script src={popunderScriptUrl} />
      )}
      
      {adType === 'smartlink' && (
        <a 
          href={smartlinkUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={style}
        >
          {linkText}
        </a>
      )}
    </div>
  );
}