import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export default function middleware(request: any) {
    const { pathname } = request.nextUrl;
    console.log('>>> [MIDDLEWARE] Request for:', pathname);

    // Explicitly bypass for API
    if (pathname.startsWith('/api')) {
        console.log('>>> [MIDDLEWARE] Bypassing for API');
        return;
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
