'use client';

// import { Link } from '@/i18n/config';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-rosto-desmotiva.dev.png"
              alt="Desmotiva Dev"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-bold text-xl hidden sm:block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              desmotiva.dev
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className={`text-sm transition-colors hover:text-white ${pathname.includes('/dashboard') ? 'text-white font-medium' : 'text-gray-400'
                }`}
            >
              Dashboard
            </Link>
            <Link
              href="/leaderboard"
              className={`text-sm transition-colors hover:text-white ${pathname.includes('/leaderboard') ? 'text-white font-medium' : 'text-gray-400'
                }`}
            >
              {t('leaderboard')}
            </Link>
            <Link
              href="/badges"
              className={`text-sm transition-colors hover:text-white ${pathname.includes('/badges') ? 'text-white font-medium' : 'text-gray-400'
                }`}
            >
              {t('badges')}
            </Link>
            <Link
              href="/blog"
              className={`text-sm transition-colors hover:text-white ${pathname.includes('/blog') ? 'text-white font-medium' : 'text-gray-400'
                }`}
            >
              Blog
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button - Placeholder or Implementation */}
            {/* For now keeping it simple as per original file structure which seemed to lack a mobile menu toggle in the visible snippet? 
               Actually the snippet shows `hidden md:flex` for nav. 
               The original code didn't show a mobile menu implementation in the snippet. 
               I will just update the desktop one for now and mentioned it to user.
            */}
            <Link
              href="/dashboard"
              className="md:hidden text-sm text-gray-400 hover:text-white"
            >
              Dash
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
