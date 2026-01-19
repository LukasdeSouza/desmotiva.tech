import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recursos - Desmotiva Dev | Ferramentas e Links Úteis para Desenvolvedores',
  description: 'Coleção de recursos, ferramentas, links úteis e dicas para desenvolvedores de software e programadores.',
};

const resources = {
  tools: [
    {
      name: "Visual Studio Code",
      description: "Editor de código gratuito e poderoso da Microsoft",
      url: "https://code.visualstudio.com/",
      category: "Editor"
    },
    {
      name: "GitHub",
      description: "Plataforma de hospedagem de código e colaboração",
      url: "https://github.com/",
      category: "Versionamento"
    },
    {
      name: "Stack Overflow",
      description: "Comunidade de perguntas e respostas para programadores",
      url: "https://stackoverflow.com/",
      category: "Comunidade"
    },
    {
      name: "MDN Web Docs",
      description: "Documentação completa sobre tecnologias web",
      url: "https://developer.mozilla.org/",
      category: "Documentação"
    }
  ],
  learning: [
    {
      name: "freeCodeCamp",
      description: "Aprenda programação gratuitamente com projetos práticos",
      url: "https://www.freecodecamp.org/",
      category: "Curso"
    },
    {
      name: "Codecademy",
      description: "Cursos interativos de programação",
      url: "https://www.codecademy.com/",
      category: "Curso"
    },
    {
      name: "LeetCode",
      description: "Pratique algoritmos e estruturas de dados",
      url: "https://leetcode.com/",
      category: "Prática"
    },
    {
      name: "HackerRank",
      description: "Desafios de programação e preparação para entrevistas",
      url: "https://www.hackerrank.com/",
      category: "Prática"
    }
  ],
  productivity: [
    {
      name: "Notion",
      description: "Workspace all-in-one para notas e organização",
      url: "https://www.notion.so/",
      category: "Organização"
    },
    {
      name: "Figma",
      description: "Ferramenta de design colaborativo",
      url: "https://www.figma.com/",
      category: "Design"
    },
    {
      name: "Postman",
      description: "Plataforma para desenvolvimento e teste de APIs",
      url: "https://www.postman.com/",
      category: "API"
    },
    {
      name: "Trello",
      description: "Gerenciamento de projetos com boards Kanban",
      url: "https://trello.com/",
      category: "Projeto"
    }
  ]
};

const tips = [
  {
    title: "Organize seu Código",
    description: "Use nomes descritivos para variáveis e funções. Seu eu do futuro agradecerá.",
    icon: "📝"
  },
  {
    title: "Faça Commits Frequentes",
    description: "Commits pequenos e frequentes são melhores que um commit gigante no final.",
    icon: "🔄"
  },
  {
    title: "Documente seu Código",
    description: "Comentários explicam o 'porquê', não o 'como'. O código já mostra o como.",
    icon: "📚"
  },
  {
    title: "Teste seu Código",
    description: "Testes automatizados são seus amigos. Eles não mentem nem têm preguiça.",
    icon: "🧪"
  },
  {
    title: "Aprenda Continuamente",
    description: "A tecnologia evolui rápido. Dedique tempo para aprender coisas novas.",
    icon: "🎓"
  },
  {
    title: "Cuide da Saúde Mental",
    description: "Faça pausas, pratique exercícios e não leve bugs para casa (literalmente).",
    icon: "🧘"
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Recursos para Desenvolvedores</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma coleção curada de ferramentas, recursos e dicas para tornar sua jornada de desenvolvimento mais produtiva e menos frustrante.
          </p>
        </header>

        {/* Ferramentas Essenciais */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">🛠️ Ferramentas Essenciais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.tools.map((tool, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <span className="px-2 py-1 bg-blue-600 text-xs rounded">{tool.category}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Acessar →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Aprendizado */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">📚 Plataformas de Aprendizado</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.learning.map((resource, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{resource.name}</h3>
                  <span className="px-2 py-1 bg-green-600 text-xs rounded">{resource.category}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Aprender →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Produtividade */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">⚡ Produtividade</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.productivity.map((tool, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <span className="px-2 py-1 bg-purple-600 text-xs rounded">{tool.category}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Usar →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Dicas Rápidas */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">💡 Dicas de Ouro</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="font-semibold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comunidades */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">👥 Comunidades Tech Brasileiras</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-3">Discord/Slack</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• He4rt Developers - Comunidade de devs brasileiros</li>
                <li>• Training Center - Mentoria e networking</li>
                <li>• Brasil.io - Dados abertos e transparência</li>
                <li>• Python Brasil - Comunidade Python nacional</li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-3">Eventos e Meetups</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• DevFest - Eventos Google Developers</li>
                <li>• TDC - The Developer's Conference</li>
                <li>• Campus Party - Tecnologia e inovação</li>
                <li>• Meetups locais - Busque na sua cidade</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Conhece algum recurso incrível?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Ajude a comunidade! Envie sugestões de ferramentas, cursos ou recursos que você usa e recomenda.
          </p>
          <a 
            href="https://twitter.com/deveprogramar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Enviar Sugestão
          </a>
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