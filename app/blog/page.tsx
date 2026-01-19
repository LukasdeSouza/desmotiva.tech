import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Desmotiva Dev | Artigos sobre Desenvolvimento e Humor Tech',
  description: 'Artigos sobre desenvolvimento de software, carreira tech, humor na programação e dicas para desenvolvedores.',
};

const blogPosts = [
  {
    id: 1,
    title: "10 Sinais de que Você Precisa de uma Pausa do Código",
    excerpt: "Quando até o Hello World parece complexo demais, talvez seja hora de dar um tempo...",
    date: "2026-01-15",
    readTime: "5 min",
    category: "Carreira"
  },
  {
    id: 2,
    title: "A Psicologia por Trás dos Nomes de Variáveis Ruins",
    excerpt: "Por que chamamos variáveis de 'x1', 'temp' e 'final_final_agora'? Uma análise profunda.",
    date: "2026-01-12",
    readTime: "7 min",
    category: "Humor"
  },
  {
    id: 3,
    title: "Como Sobreviver a uma Daily de 2 Horas",
    excerpt: "Estratégias de sobrevivência para quando a daily vira uma reunião de planejamento estratégico.",
    date: "2026-01-10",
    readTime: "4 min",
    category: "Metodologias"
  },
  {
    id: 4,
    title: "O Guia Definitivo para Entender Mensagens de Erro",
    excerpt: "Traduzindo o que o compilador realmente quer dizer quando fala 'unexpected token'.",
    date: "2026-01-08",
    readTime: "6 min",
    category: "Desenvolvimento"
  },
  {
    id: 5,
    title: "Burnout em Desenvolvedores: Sinais e Soluções",
    excerpt: "Como identificar e lidar com o esgotamento mental na carreira de desenvolvimento.",
    date: "2026-01-05",
    readTime: "8 min",
    category: "Saúde Mental"
  },
  {
    id: 6,
    title: "A Arte de Fazer Code Review sem Destruir Egos",
    excerpt: "Dicas para dar feedback construtivo sem fazer o colega questionar a carreira.",
    date: "2026-01-03",
    readTime: "5 min",
    category: "Soft Skills"
  }
];

const categories = ["Todos", "Carreira", "Humor", "Desenvolvimento", "Metodologias", "Saúde Mental", "Soft Skills"];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Blog Tech</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Artigos sobre desenvolvimento, carreira tech e o lado humano da programação. 
            Porque código é importante, mas quem escreve também é.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">{post.category}</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-white hover:text-gray-300 transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Receba Novos Artigos</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Cadastre-se para receber nossos artigos sobre desenvolvimento, carreira tech e humor na programação. 
            Prometemos não spammar (diferente daquele colega que manda 50 mensagens no Slack).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu.email@dev.com"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Cadastrar
            </button>
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