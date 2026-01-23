'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    // Don't do anything if clicking the current locale
    if (newLocale === locale) return;
    
    // Get the pathname without the locale prefix
    const segments = pathname.split('/').filter(Boolean);
    
    // Check if first segment is a locale
    const hasLocaleInPath = locales.includes(segments[0] as Locale);
    
    // Remove locale from segments if present
    const pathWithoutLocale = hasLocaleInPath 
      ? '/' + segments.slice(1).join('/')
      : pathname;
    
    // Build new path
    const newPath = newLocale === 'pt' 
      ? pathWithoutLocale || '/'
      : `/${newLocale}${pathWithoutLocale || '/'}`;
    
    // Navigate to new path
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
            locale === loc
              ? 'bg-white text-black font-medium'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
        >
          <span className="mr-1">{localeFlags[loc]}</span>
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
