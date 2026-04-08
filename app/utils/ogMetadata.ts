import { Metadata } from 'next';

type OgImageParams = {
  phrase: string;
  category?: string;
};

export function generateOgImageUrl({ phrase, category }: OgImageParams): string {
  const baseUrl = 'https://desmotiva.dev/api/og';
  const params = new URLSearchParams();
  
  params.set('phrase', phrase);
  if (category) {
    params.set('category', category);
  }
  
  return `${baseUrl}?${params.toString()}`;
}

export function generatePhraseMetadata(
  phrase: string,
  category?: string,
  locale: string = 'pt'
): Metadata {
  const ogImageUrl = generateOgImageUrl({ phrase, category });
  const url = category 
    ? `https://desmotiva.dev/frases/${category}`
    : 'https://desmotiva.dev';

  return {
    title: `"${phrase}" | desmotiva.dev`,
    description: locale === 'pt'
      ? `${phrase} - Sua dose diária de realidade no mundo tech.`
      : `${phrase} - Your daily dose of reality in the tech world.`,
    openGraph: {
      title: `"${phrase}" | desmotiva.dev`,
      description: locale === 'pt'
        ? `${phrase} - Sua dose diária de realidade no mundo tech.`
        : `${phrase} - Your daily dose of reality in the tech world.`,
      url,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: phrase,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `"${phrase}" | desmotiva.dev`,
      description: locale === 'pt'
        ? `${phrase} - Sua dose diária de realidade no mundo tech.`
        : `${phrase} - Your daily dose of reality in the tech world.`,
      images: [ogImageUrl],
    },
  };
}