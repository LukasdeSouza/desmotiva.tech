# 🌍 Internationalization (INTL) Implementation Guide

## Overview

This project now supports multiple languages using **next-intl**, the recommended i18n solution for Next.js App Router.

## 🎯 Supported Languages

- 🇧🇷 **Portuguese (pt)** - Default locale
- 🇺🇸 **English (en)**

## 📁 Project Structure

```
desmotiva.tech/
├── i18n/
│   ├── config.ts          # Locale configuration
│   └── request.ts         # Server-side locale handling
├── messages/
│   ├── pt.json           # Portuguese translations
│   └── en.json           # English translations
├── middleware.ts          # Locale detection & routing
├── app/
│   ├── [locale]/         # Locale-based routes
│   │   ├── layout.tsx    # Locale-aware layout
│   │   ├── page.tsx      # Home page
│   │   ├── blog/
│   │   ├── sobre/
│   │   ├── recursos/
│   │   ├── faq/
│   │   └── privacy/
│   └── components/
│       └── LanguageSwitcher.tsx
```

## 🚀 How It Works

### URL Structure

- **Portuguese (default)**: `https://desmotiva.dev/`
- **English**: `https://desmotiva.dev/en/`

The middleware automatically detects the user's preferred language and redirects accordingly.

### Language Switcher

A language switcher component is available in the top-right corner of every page, allowing users to switch between languages seamlessly.

## 🛠️ Development

### Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm start
```

### Testing Different Locales

1. **Portuguese (default)**: Navigate to `http://localhost:3000/`
2. **English**: Navigate to `http://localhost:3000/en/`
3. Use the language switcher in the UI to toggle between languages

## 📝 Adding New Translations

### 1. Add to Translation Files

Edit `messages/pt.json` and `messages/en.json`:

```json
{
  "NewSection": {
    "title": "Novo Título",
    "description": "Nova descrição"
  }
}
```

### 2. Use in Components

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('NewSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 3. Server Components

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations('NewSection');
  
  return <h1>{t('title')}</h1>;
}
```

## 🌐 Adding New Languages

### 1. Update Configuration

Edit `i18n/config.ts`:

```typescript
export const locales = ['en', 'pt', 'es'] as const; // Add 'es' for Spanish

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español', // Add Spanish
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  pt: '🇧🇷',
  es: '🇪🇸', // Add Spanish flag
};
```

### 2. Create Translation File

Create `messages/es.json` with all translations.

### 3. Update Metadata

Update `app/[locale]/layout.tsx` to include the new locale in alternates:

```typescript
alternates: {
  canonical: 'https://desmotiva.dev',
  languages: {
    'en': 'https://desmotiva.dev/en',
    'pt': 'https://desmotiva.dev',
    'es': 'https://desmotiva.dev/es', // Add Spanish
  },
}
```

## 🔍 SEO Considerations

### Hreflang Tags

The implementation automatically generates hreflang tags for each language:

```html
<link rel="alternate" hreflang="pt" href="https://desmotiva.dev/" />
<link rel="alternate" hreflang="en" href="https://desmotiva.dev/en/" />
```

### Sitemap

The sitemap (`app/sitemap.ts`) automatically includes all locales:

- `https://desmotiva.dev/` (Portuguese)
- `https://desmotiva.dev/en/` (English)
- And all subpages for each locale

### Metadata

Each locale has its own metadata (title, description, OpenGraph, Twitter cards) defined in the layout.

## 📊 Analytics & Ads

All existing functionality is preserved:
- ✅ Google Analytics tracking
- ✅ Google AdSense
- ✅ Vercel Analytics
- ✅ Social sharing buttons

## 🎨 Features

### Current Implementation

- ✅ Automatic locale detection from browser
- ✅ Language switcher component
- ✅ SEO-friendly URLs
- ✅ Type-safe translations
- ✅ Server and client component support
- ✅ Locale-specific metadata
- ✅ Multi-language sitemap
- ✅ 75+ demotivational phrases in both languages

### Future Enhancements

- [ ] Add more languages (Spanish, French, German)
- [ ] Language preference persistence (cookies/localStorage)
- [ ] Locale-specific content for blog posts
- [ ] Translation management system
- [ ] RTL language support

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm run build
```

### Translation Not Showing

1. Check if the translation key exists in both `pt.json` and `en.json`
2. Verify the namespace matches in `useTranslations('Namespace')`
3. Ensure the locale parameter is being passed correctly

### Middleware Issues

The middleware handles locale detection. If you see issues:

1. Check `middleware.ts` configuration
2. Verify the matcher pattern includes your routes
3. Check browser console for any errors

## 📚 Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [i18n Best Practices](https://www.w3.org/International/questions/qa-i18n)

## 🤝 Contributing

When adding new features:

1. Add translations to both `pt.json` and `en.json`
2. Use the `useTranslations` hook for client components
3. Use `getTranslations` for server components
4. Test in both languages before submitting PR
5. Update this documentation if needed

## 📄 License

Same as the main project (MIT License)

---

**Made with 💔 by [@deveprogramar](https://twitter.com/deveprogramar)**
