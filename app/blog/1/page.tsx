import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Sinais de que Você Precisa de uma Pausa do Código - Desmotiva Dev',
  description: 'Identifique os sinais de burnout e esgotamento mental na programação. Saiba quando é hora de dar uma pausa do código.',
};

export default function BlogPost1() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block">
            ← Voltar ao Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-600 text-xs rounded-full">Carreira</span>
            <span className="text-gray-400 text-sm">15 de Janeiro, 2026</span>
            <span className="text-gray-400 text-sm">5 min de leitura</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">10 Sinais de que Você Precisa de uma Pausa do Código</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Quando até o Hello World parece complexo demais, talvez seja hora de dar um tempo...
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>
              Programar é uma atividade mentalmente intensa que exige concentração, criatividade e resolução constante de problemas. 
              Mas como qualquer atividade que demanda muito do nosso cérebro, é importante reconhecer quando precisamos de uma pausa.
            </p>

            <p>
              Aqui estão 10 sinais claros de que você precisa dar um tempo do código antes que o burnout tome conta:
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Você está debugando o mesmo bug há 3 dias</h2>
            <p>
              Se você está olhando para o mesmo erro há dias e não consegue encontrar a solução, seu cérebro provavelmente 
              está em modo "túnel". Uma pausa pode dar a perspectiva necessária para ver o problema com olhos frescos.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Você esqueceu como fazer um "Hello World"</h2>
            <p>
              Quando tarefas básicas que você fazia no automático começam a parecer complexas, é sinal de que sua mente 
              está sobrecarregada. Se você precisa googlar a sintaxe básica da sua linguagem favorita, pare tudo.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Você está criando bugs ao tentar corrigir bugs</h2>
            <p>
              O famoso "efeito cascata" onde cada correção gera dois novos problemas. Isso acontece quando estamos 
              mentalmente exaustos e não conseguimos mais pensar de forma clara e sistemática.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Você odeia seu código de ontem</h2>
            <p>
              Se você olha para o código que escreveu ontem e pensa "que lixo é esse?", pode ser que você esteja 
              sendo muito crítico consigo mesmo devido ao cansaço mental.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Você está evitando code reviews</h2>
            <p>
              Quando a ideia de alguém olhar seu código te dá ansiedade extrema, ou quando você adia indefinidamente 
              a criação daquele pull request, é hora de uma pausa.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Você está sonhando com código</h2>
            <p>
              Literalmente. Se você está sonhando com loops infinitos, stack overflows ou está debugando em sonhos, 
              seu cérebro não está conseguindo "desligar" do trabalho.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Você perdeu a paciência com a documentação</h2>
            <p>
              Quando ler a documentação oficial vira uma tortura e você prefere tentar adivinhar como uma API funciona, 
              é sinal de que sua capacidade de concentração está comprometida.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Você está usando "gambiarra" como solução padrão</h2>
            <p>
              Se sua primeira reação a qualquer problema é "vou dar um jeito rápido aqui" ao invés de pensar na 
              solução correta, você precisa de uma pausa para recuperar a clareza mental.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Você está irritado com perguntas básicas</h2>
            <p>
              Quando colegas fazem perguntas simples e você sente uma irritação desproporcional, pode ser que o 
              estresse esteja afetando sua capacidade de ser colaborativo.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Você não lembra da última vez que se divertiu programando</h2>
            <p>
              Se programar virou apenas uma obrigação e você não consegue lembrar da última vez que sentiu prazer 
              resolvendo um problema interessante, definitivamente precisa de uma pausa.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">O que fazer durante a pausa?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pratique exercícios físicos - ajuda a oxigenar o cérebro</li>
              <li>Leia um livro (que não seja sobre programação)</li>
              <li>Passe tempo na natureza</li>
              <li>Converse com pessoas sobre assuntos não relacionados a tech</li>
              <li>Pratique um hobby completamente diferente</li>
              <li>Durma bem - o sono é fundamental para consolidar aprendizado</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusão</h2>
            <p>
              Lembre-se: fazer pausas não é sinal de fraqueza, é sinal de inteligência emocional. Programadores 
              descansados são mais produtivos, criativos e escrevem código de melhor qualidade.
            </p>
            <p>
              Sua carreira é uma maratona, não um sprint. Cuide da sua saúde mental para que você possa programar 
              por muitos anos com prazer e eficiência.
            </p>
          </div>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              ← Mais Artigos
            </Link>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Compartilhar
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}