import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato - Desmotiva Dev | Entre em Contato Conosco',
  description: 'Entre em contato com a equipe do Desmotiva Dev. Envie sugestões, feedback ou apenas diga oi!',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Entre em Contato</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem uma frase épica? Encontrou um bug? Quer apenas dizer oi? Estamos aqui para ouvir!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="seu.email@dev.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="frase">Sugestão de Frase</option>
                  <option value="bug">Reportar Bug</option>
                  <option value="feedback">Feedback Geral</option>
                  <option value="parceria">Proposta de Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                  placeholder="Conte-nos o que você tem em mente..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Outras Formas de Contato</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  A forma mais rápida de entrar em contato. Respondemos rapidamente!
                </p>
                <a 
                  href="https://twitter.com/deveprogramar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  @deveprogramar
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Quer contribuir com código? Abra uma issue ou pull request!
                </p>
                <a 
                  href="https://github.com/LukasdeSouza/desmotiva.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  desmotiva.dev
                </a>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold text-white mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Conecte-se conosco para networking profissional.
                </p>
                <a 
                  href="https://linkedin.com/company/desmotiva-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Desmotiva Dev
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-800/30">
              <h3 className="font-semibold text-white mb-3">💡 Dica Rápida</h3>
              <p className="text-gray-300 text-sm">
                Tem uma frase desmotivacional épica que aconteceu com você? Mande para gente! 
                As melhores frases são adicionadas ao site com os devidos créditos.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Rápido */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Como posso sugerir uma frase?</h3>
              <p className="text-gray-400 text-sm">
                Use o formulário acima, mande um DM no Twitter ou abra uma issue no GitHub. 
                Adoramos receber contribuições da comunidade!
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Vocês respondem todas as mensagens?</h3>
              <p className="text-gray-400 text-sm">
                Sim! Tentamos responder todas as mensagens em até 24-48 horas. 
                No Twitter geralmente é mais rápido.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Posso usar as frases em outros projetos?</h3>
              <p className="text-gray-400 text-sm">
                Claro! As frases são de domínio público. Só pedimos que mencione o desmotiva.dev 
                como fonte quando possível.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Vocês fazem parcerias?</h3>
              <p className="text-gray-400 text-sm">
                Estamos sempre abertos a parcerias interessantes com a comunidade dev. 
                Entre em contato para conversarmos!
              </p>
            </div>
          </div>
        </section>

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