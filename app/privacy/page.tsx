import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Desmotiva Dev',
  description: 'Política de privacidade do Desmotiva Dev, incluindo informações sobre cookies, Google Analytics e Google AdSense.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Política de Privacidade</h1>
          <p className="text-gray-400">Última atualização: Janeiro de 2026</p>
        </header>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informações que Coletamos</h2>
            <p>
              O Desmotiva Dev coleta informações limitadas para melhorar a experiência do usuário e exibir anúncios relevantes:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Dados de navegação através do Google Analytics</li>
              <li>Informações de cookies para personalização de anúncios</li>
              <li>Dados de interação com o site (cliques, compartilhamentos)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Google Analytics</h2>
            <p>
              Utilizamos o Google Analytics para entender como os visitantes usam nosso site. 
              O Google Analytics coleta informações como:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Páginas visitadas e tempo gasto no site</li>
              <li>Localização geográfica aproximada</li>
              <li>Dispositivo e navegador utilizados</li>
              <li>Como você chegou ao nosso site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Google AdSense</h2>
            <p>
              Utilizamos o Google AdSense para exibir anúncios. O Google pode usar cookies para:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Exibir anúncios baseados em visitas anteriores ao nosso site</li>
              <li>Personalizar anúncios com base em seus interesses</li>
              <li>Medir a eficácia dos anúncios</li>
            </ul>
            <p className="mt-4">
              Você pode optar por não receber anúncios personalizados visitando as 
              <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                {" "}Configurações de Anúncios do Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies</h2>
            <p>
              Nosso site usa cookies para:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Lembrar suas preferências</li>
              <li>Analisar o tráfego do site</li>
              <li>Personalizar anúncios</li>
              <li>Melhorar a funcionalidade do site</li>
            </ul>
            <p className="mt-4">
              Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Quando necessário para fornecer nossos serviços (Google Analytics, AdSense)</li>
              <li>Quando exigido por lei</li>
              <li>Para proteger nossos direitos ou segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Solicitar informações sobre dados coletados</li>
              <li>Solicitar correção de dados incorretos</li>
              <li>Solicitar exclusão de seus dados</li>
              <li>Optar por não receber anúncios personalizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações contra 
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
              regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do 
              <a href="https://twitter.com/deveprogramar" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                {" "}Twitter @deveprogramar
              </a>.
            </p>
          </section>
        </div>

        <footer className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Voltar ao Início
          </Link>
        </footer>
      </main>
    </div>
  );
}