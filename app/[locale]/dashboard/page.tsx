import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@/lib/supabaseClient';

export default async function DashboardPage() {
  // Check for guest cookie
  const cookieStore = await cookies();
  const guestId = cookieStore.get('guest_id')?.value;

  let dbUser: any = null;

  if (guestId) {
    const { data } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', guestId)
      .single();
    dbUser = data;
  }

  // Fallback guest object if no user found
  // We prioritize dbUser since we are migrating away from Clerk "currentUser()"
  const displayUser = dbUser ? {
    firstName: dbUser.display_name?.split(' ')[0] || 'Visitante',
    lastName: dbUser.display_name?.split(' ').slice(1).join(' ') || '',
    username: dbUser.display_name || 'guest',
    emailAddresses: [{ emailAddress: dbUser.email }],
    imageUrl: dbUser.avatar_url || '/logo-rosto-desmotiva.dev.png',
    createdAt: new Date(dbUser.created_at),
    lastSignInAt: dbUser.last_activity_at ? new Date(dbUser.last_activity_at) : new Date(),
    externalAccounts: [] as any[]
  } : {
    firstName: 'Visitante',
    lastName: '',
    username: 'guest',
    emailAddresses: [{ emailAddress: 'guest@desmotiva.dev' }],
    imageUrl: '/logo-rosto-desmotiva.dev.png',
    createdAt: new Date(),
    lastSignInAt: new Date(),
    externalAccounts: []
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-400 hover:text-gray-300 transition-colors mb-6 inline-block">
            ← Voltar para home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-400">Bem-vindo de volta, {displayUser.firstName || displayUser.username || 'Dev'}!</p>
        </div>

        {/* User Profile Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src={displayUser.imageUrl}
              alt={displayUser.username || 'User avatar'}
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-2">
                {displayUser.firstName} {displayUser.lastName}
              </h2>
              <p className="text-gray-400 mb-4">
                {/* @ts-ignore - simplified for guest */}
                {displayUser.emailAddresses?.[0]?.emailAddress || displayUser.primaryEmailAddress?.emailAddress}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://github.com/${displayUser.externalAccounts?.[0]?.username || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {/* Ver GitHub */}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Membro desde</p>
            <p className="text-xl font-bold">
              {displayUser.createdAt?.toLocaleDateString('pt-BR') || 'Recentemente'}
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Último acesso</p>
            <p className="text-xl font-bold">
              {displayUser.lastSignInAt?.toLocaleDateString('pt-BR') || 'Hoje'}
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Status</p>
            <p className="text-xl font-bold text-green-400">Ativo</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog"
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <p className="font-semibold mb-1">Blog</p>
              <p className="text-sm text-gray-400">Leia nossos artigos sobre desenvolvimento</p>
            </Link>
            <Link
              href="/recursos"
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <p className="font-semibold mb-1"> Recursos</p>
              <p className="text-sm text-gray-400">Ferramentas e dicas úteis</p>
            </Link>
            <Link
              href="/faq"
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <p className="font-semibold mb-1"> FAQ</p>
              <p className="text-sm text-gray-400">Perguntas frequentes</p>
            </Link>
            <Link
              href="/contato"
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <p className="font-semibold mb-1"> Contato</p>
              <p className="text-sm text-gray-400">Entre em contato conosco</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
