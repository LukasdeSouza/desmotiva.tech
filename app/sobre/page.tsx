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
            <h2 className="text-2xl font-semibold text-white mb-4">🎯 Nossa Missão</h2>
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
            <h2 className="text-2xl font-semibold text-white mb-4">📖 Como Surgiu a Ideia</h2>
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
            <div className="mt-6 p-4 bg-gray-900 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm italic">
                "A ideia surgiu quando percebemos que rir dos nossos próprios problemas de código 
                era mais terapêutico que chorar por eles." - Criador do Desmotiva Dev
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">🎭 Por Que Humor na Programação?</h2>
            <p className="mb-6">
              O humor não é apenas entretenimento - é uma ferramenta poderosa para lidar com o estresse 
              e criar conexões na comunidade de desenvolvimento. Estudos mostram que o riso reduz cortisol 
              e aumenta endorfinas, melhorando nossa capacidade de resolver problemas complexos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">💪 Benefícios do Humor</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Reduz o estresse do desenvolvimento</li>
                  <li>Cria conexão entre desenvolvedores</li>
                  <li>Torna problemas complexos mais leves</li>
                  <li>Melhora o ambiente de trabalho</li>
                  <li>Ajuda a lidar com a síndrome do impostor</li>
                  <li>Aumenta a criatividade na resolução de problemas</li>
                  <li>Fortalece a resiliência emocional</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-3">🚀 Impacto na Carreira</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Desenvolve resiliência emocional</li>
                  <li>Melhora a comunicação em equipe</li>
                  <li>Reduz burnout e ansiedade</li>
                  <li>Cria networking através do humor</li>
                  <li>Torna você mais humano no trabalho</li>
                  <li>Facilita feedback e code reviews</li>
                  <li>Aumenta a satisfação no trabalho</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">📊 Estatísticas e Impacto</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-sm">Frases Coletadas</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-sm">Visitantes Mensais</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-sm">Taxa de Engajamento</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm">Disponível para Desmotivar</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              *Dados baseados em métricas do Google Analytics e feedback da comunidade
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">⚡ Tecnologias e Arquitetura</h2>
            <p className="mb-6">
              O Desmotiva Dev foi construído com as melhores práticas de desenvolvimento, 
              porque mesmo fazendo piada com código ruim, acreditamos em código de qualidade. 
              O site é um exemplo de como criar aplicações web modernas, performáticas e acessíveis.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🎨 Frontend</h4>
                <ul className="text-sm space-y-1">
                  <li>• Next.js 14 (App Router)</li>
                  <li>• TypeScript para type safety</li>
                  <li>• Tailwind CSS para styling</li>
                  <li>• React Hooks para estado</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-3">📈 Analytics & SEO</h4>
                <ul className="text-sm space-y-1">
                  <li>• Google Analytics 4</li>
                  <li>• Vercel Analytics</li>
                  <li>• SEO otimizado</li>
                  <li>• Structured data (JSON-LD)</li>
                  <li>• Sitemap automático</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🚀 Performance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Hospedagem na Vercel</li>
                  <li>• CDN global</li>
                  <li>• Otimização de imagens</li>
                  <li>• Lazy loading</li>
                  <li>• Core Web Vitals otimizados</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">🤝 Contribua com o Projeto</h2>
            <p className="mb-6">
              O Desmotiva Dev é um projeto da comunidade, para a comunidade. Acreditamos que as melhores 
              frases vêm das experiências reais dos desenvolvedores. Sua contribuição ajuda a tornar 
              o site mais divertido e relevante para todos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">💡 Como Contribuir</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Envie suas frases pelo <a href="https://twitter.com/deveprogramar" className="text-blue-400 hover:text-blue-300">Twitter @deveprogramar</a></li>
                  <li>Abra issues no <a href="https://github.com/LukasdeSouza/desmotiva.dev" className="text-blue-400 hover:text-blue-300">GitHub</a> com sugestões</li>
                  <li>Compartilhe situações engraçadas que viveu</li>
                  <li>Sugira melhorias para o site</li>
                  <li>Espalhe o humor tech para outros desenvolvedores</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🏆 Reconhecimento</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Frases aceitas recebem crédito no site</li>
                  <li>Contribuidores são mencionados nas redes sociais</li>
                  <li>Melhores contribuições viram posts no blog</li>
                  <li>Acesso antecipado a novas funcionalidades</li>
                  <li>Participação em decisões sobre o futuro do projeto</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">🔮 Próximos Passos e Roadmap</h2>
            <p className="mb-6">
              O Desmotiva Dev está sempre evoluindo. Temos grandes planos para tornar a experiência 
              ainda melhor e mais divertida para a comunidade de desenvolvedores.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-white mb-2">✅ Já Implementado</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sistema de compartilhamento social</li>
                  <li>• Blog com artigos sobre desenvolvimento</li>
                  <li>• Suporte a múltiplos idiomas (PT/EN)</li>
                  <li>• Analytics e métricas detalhadas</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-white mb-2">🚧 Em Desenvolvimento</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sistema de categorização por linguagem/tecnologia</li>
                  <li>• API pública para desenvolvedores</li>
                  <li>• Integração com Slack/Discord</li>
                  <li>• Newsletter semanal com as melhores frases</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-white mb-2">🔮 Futuro</h4>
                <ul className="text-sm space-y-1">
                  <li>• Sistema de votação nas melhores frases</li>
                  <li>• Podcast sobre humor na programação</li>
                  <li>• Merchandise para a comunidade</li>
                  <li>• Eventos e meetups presenciais</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">🌟 Depoimentos da Comunidade</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-sm italic mb-3">
                  "Finalmente um site que entende a dor de ser dev! Uso as frases para quebrar o gelo 
                  nas dailies e todo mundo adora."
                </p>
                <div className="text-xs text-gray-400">- João, Frontend Developer</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-sm italic mb-3">
                  "Compartilho no grupo do trabalho toda semana. É incrível como todo mundo se identifica 
                  com as situações."
                </p>
                <div className="text-xs text-gray-400">- Maria, Full Stack Developer</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-sm italic mb-3">
                  "Uso as frases nas apresentações técnicas para deixar o ambiente mais descontraído. 
                  Funciona perfeitamente!"
                </p>
                <div className="text-xs text-gray-400">- Carlos, Tech Lead</div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-sm italic mb-3">
                  "Depois de um dia difícil debugando, nada melhor que rir das próprias frustrações. 
                  Site genial!"
                </p>
                <div className="text-xs text-gray-400">- Ana, Backend Developer</div>
              </div>
            </div>
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