import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre - Desmotiva Dev | A História por Trás do Humor Tech',
  description: 'Conheça a história do Desmotiva Dev, como surgiu a ideia e por que o humor é importante na carreira de desenvolvimento de software.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Sobre o Projeto</h1>
          <p className="text-gray-400">A história por trás do humor tech</p>
        </header>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4"> Nossa Missão</h2>
            <p>
              O <strong>Desmotiva Dev</strong> nasceu da necessidade de trazer leveza ao dia a dia dos desenvolvedores. 
              Sabemos que a carreira em tecnologia pode ser desafiadora, cheia de bugs inexplicáveis, 
              deadlines impossíveis e aquele código que funcionava ontem mas hoje decidiu parar.
            </p>
            <p className="mt-4">
              Nossa missão é simples: fazer você rir (ou chorar de rir) com situações que todo programador já viveu. 
              Porque às vezes, a melhor forma de lidar com a frustração é rir dela.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Como Surgiu a Ideia</h2>
            <p>
              Tudo começou durante uma daily particularmente frustrante. Depois de ouvir pela décima vez 
              "não tenho impedimentos" de alguém que claramente estava travado há dias, percebemos que 
              precisávamos de uma válvula de escape.
            </p>
            <p className="mt-4">
              Começamos coletando frases e situações engraçadas que vivíamos no dia a dia. Logo percebemos 
              que não éramos os únicos a passar por essas situações. Nasceu então o Desmotiva Dev: 
              um espaço para compartilhar o humor que só quem programa entende.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">🎭 Por Que Humor na Programação?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Benefícios do Humor</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reduz o estresse do desenvolvimento</li>
                  <li>Cria conexão entre desenvolvedores</li>
                  <li>Torna problemas complexos mais leves</li>
                  <li>Melhora o ambiente de trabalho</li>
                  <li>Ajuda a lidar com a síndrome do impostor</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Impacto na Carreira</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Desenvolve resiliência emocional</li>
                  <li>Melhora a comunicação em equipe</li>
                  <li>Reduz burnout e ansiedade</li>
                  <li>Cria networking através do humor</li>
                  <li>Torna você mais humano no trabalho</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Estatísticas Interessantes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-sm">Frases Coletadas</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-sm">Desenvolvedores se Identificam</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm">Disponível para Desmotivar</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Tecnologias Utilizadas</h2>
            <p>
              O Desmotiva Dev foi construído com as melhores práticas de desenvolvimento, 
              porque mesmo fazendo piada com código ruim, acreditamos em código de qualidade:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Frontend</h4>
                <ul className="text-sm space-y-1">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• React Hooks</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Otimizações</h4>
                <ul className="text-sm space-y-1">
                  <li>• SEO Completo</li>
                  <li>• Google Analytics</li>
                  <li>• Performance Otimizada</li>
                  <li>• Mobile Responsivo</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contribua com o Projeto</h2>
            <p>
              Tem uma frase desmotivacional épica que aconteceu com você? Conhece alguma situação 
              hilária que todo dev já passou? Queremos ouvir!
            </p>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Como Contribuir:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Envie suas frases pelo Instagram <a href="https://twitter.com/deveprogramar" className="text-blue-400 hover:text-blue-300">@deveprogramar</a> ou pelo <a href="https://github.com/LukasdeSouza/desmotiva.tech" className="text-blue-400 hover:text-blue-300">Github</a> do projeto </li>
                <li>Compartilhe situações engraçadas que viveu</li>
                <li>Sugira melhorias para o site</li>
                <li>Espalhe o humor tech para outros desenvolvedores</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Próximos Passos</h2>
            <p>O Desmotiva Dev está sempre evoluindo. Nossos planos incluem:</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Categorização de frases por linguagem/tecnologia</li>
              <li>Sistema de votação nas melhores frases</li>
              <li>Frases em outros idiomas</li>
              <li>Integração com Slack para dailies mais divertidas</li>
              <li>Podcast sobre humor na programação</li>
            </ul>
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