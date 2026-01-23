import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A Psicologia por Trás dos Nomes de Variáveis Ruins - Desmotiva Dev',
  description: 'Análise psicológica sobre por que criamos nomes de variáveis como x1, temp e final_final_agora.',
};

export default function BlogPost2() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block">
            ← Voltar ao Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-purple-600 text-xs rounded-full">Humor</span>
            <span className="text-gray-400 text-sm">12 de Janeiro, 2026</span>
            <span className="text-gray-400 text-sm">7 min de leitura</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">A Psicologia por Trás dos Nomes de Variáveis Ruins</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Por que chamamos variáveis de 'x1', 'temp' e 'final_final_agora'? Uma análise profunda.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>
              Todo programador já passou por isso: você está no meio de um código complexo, precisa criar uma variável 
              rapidamente e... nasce o "temp", "x1" ou o clássico "final_final_agora". Mas por que fazemos isso? 
              Vamos explorar a psicologia por trás desses nomes aparentemente irracionais.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">O Fenômeno dos Nomes Genéricos</h2>
            <p>
              Nomes como "temp", "data", "info" e "item" são extremamente comuns no código. Eles representam nossa 
              tentativa de criar algo "temporário" que, inevitavelmente, se torna permanente.
            </p>

            <div className="bg-gray-900 p-4 rounded-lg my-6">
              <h3 className="text-lg font-semibold mb-2">Exemplos Clássicos:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><code>temp</code> - "É só temporário" (spoiler: nunca é)</li>
                <li><code>data</code> - Porque contém... dados</li>
                <li><code>info</code> - Informação sobre... algo</li>
                <li><code>item</code> - Um item de... alguma coisa</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">A Síndrome do "x1, x2, x3"</h2>
            <p>
              Quando precisamos de múltiplas variáveis similares, nossa criatividade simplesmente desliga. 
              O cérebro entra em modo "piloto automático" e começamos a numerar: x1, x2, x3...
            </p>
            <p>
              Isso acontece porque estamos focados no problema principal e não queremos "desperdiçar" energia mental 
              pensando em nomes. É uma forma de procrastinação cognitiva.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">O Drama do "final_final_agora"</h2>
            <p>
              Ah, a evolução natural de uma variável mal nomeada:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg my-6 font-mono text-sm">
              <div>resultado</div>
              <div>resultado_final</div>
              <div>resultado_final_mesmo</div>
              <div>resultado_final_agora</div>
              <div>resultado_final_agora_serio</div>
              <div>resultado_final_definitivo_2</div>
            </div>
            <p>
              Cada iteração representa nossa crescente frustração e a recusa em refatorar o código adequadamente. 
              É mais fácil adicionar "_final" do que pensar em uma arquitetura melhor.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Fatores Psicológicos</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Pressão Temporal</h3>
            <p>
              Quando estamos com pressa, nosso cérebro prioriza a funcionalidade sobre a legibilidade. 
              "Vou arrumar depois" é o mantra que nunca se concretiza.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Fadiga de Decisão</h3>
            <p>
              Depois de tomar centenas de decisões técnicas, escolher um nome de variável parece trivial. 
              Nossa capacidade de tomar decisões fica esgotada.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Síndrome do Impostor</h3>
            <p>
              "Se eu der um nome muito específico, vão descobrir que não sei exatamente o que estou fazendo." 
              Nomes genéricos são uma forma de se esconder.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Otimismo Temporal</h3>
            <p>
              Acreditamos genuinamente que vamos voltar e "limpar" o código depois. 
              Spoiler: raramente voltamos.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Os Tipos de Personalidade e Seus Nomes</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">O Perfeccionista</h4>
                <p className="text-sm mb-2">Nomes longos e descritivos:</p>
                <code className="text-xs">usuarioLogadoComPermissaoDeAdministrador</code>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">O Minimalista</h4>
                <p className="text-sm mb-2">Uma letra é suficiente:</p>
                <code className="text-xs">a, b, c, x, y, z</code>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">O Humorista</h4>
                <p className="text-sm mb-2">Nomes "engraçados":</p>
                <code className="text-xs">coisaDoida, bagulhoLouco, trocoMiudo</code>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">O Desesperado</h4>
                <p className="text-sm mb-2">Reflexo do estado mental:</p>
                <code className="text-xs">socorro, ajuda, naoSeiMaisOQueFazer</code>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">O Impacto no Código</h2>
            <p>
              Nomes ruins não são apenas uma questão estética. Eles têm impactos reais:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Manutenibilidade:</strong> Código difícil de entender é difícil de manter</li>
              <li><strong>Onboarding:</strong> Novos desenvolvedores levam mais tempo para entender</li>
              <li><strong>Bugs:</strong> Confusão sobre o propósito das variáveis gera erros</li>
              <li><strong>Refatoração:</strong> Mudanças se tornam arriscadas e demoradas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Como Quebrar o Ciclo</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Pare e Pense</h3>
            <p>
              Antes de escrever "temp", pare 5 segundos e pense: "O que essa variável realmente representa?"
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Use o Contexto</h3>
            <p>
              Se você está processando usuários, use "usuario" ou "user", não "item" ou "data".
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Seja Específico</h3>
            <p>
              "contador" é melhor que "i". "idadeUsuario" é melhor que "idade".
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Refatore Imediatamente</h3>
            <p>
              Se você escreveu "temp", refatore antes de continuar. Não deixe para depois.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conclusão</h2>
            <p>
              Nomes de variáveis ruins são um reflexo muito humano de como nosso cérebro funciona sob pressão. 
              Reconhecer os padrões psicológicos por trás deles é o primeiro passo para melhorar.
            </p>
            <p>
              Lembre-se: código é comunicação. Você está se comunicando com seu eu do futuro e com seus colegas. 
              Seja gentil com eles - use nomes que façam sentido.
            </p>
            <p>
              E da próxima vez que você for escrever "temp", pare, respire fundo e pense: 
              "Como eu posso ser mais claro aqui?"
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