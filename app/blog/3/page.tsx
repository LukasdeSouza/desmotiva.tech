import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como Sobreviver a uma Daily de 2 Horas - Desmotiva Dev',
  description: 'Estratégias de sobrevivência para quando a daily vira uma reunião de planejamento estratégico e você questiona suas escolhas de carreira.',
};

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block">
            ← Voltar ao Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-red-600 text-xs rounded-full">Metodologias</span>
            <span className="text-gray-400 text-sm">10 de Janeiro, 2026</span>
            <span className="text-gray-400 text-sm">4 min de leitura</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Como Sobreviver a uma Daily de 2 Horas</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Estratégias de sobrevivência para quando a daily vira uma reunião de planejamento estratégico.
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>
              Ah, a daily. Aquela reunião que deveria durar 15 minutos para sincronizar o time, mas que 
              misteriosamente se transforma em uma sessão de 2 horas onde discutimos a arquitetura do 
              sistema, o sentido da vida e por que o café da empresa é ruim.
            </p>

            <p>
              Se você já se encontrou preso em uma dessas "dailies estendidas", este guia é para você. 
              Aqui estão as estratégias de sobrevivência testadas e aprovadas pela comunidade dev mundial.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🚨 Sinais de Alerta</h2>
            <p>
              Primeiro, vamos identificar quando uma daily está prestes a virar uma maratona:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Alguém começa com "Só uma pergunta rápida..."</li>
              <li>O Scrum Master não está controlando o tempo</li>
              <li>Aparece alguém que não estava na daily anterior</li>
              <li>Começam a desenhar arquitetura no quadro</li>
              <li>Alguém menciona "vamos aproveitar que estamos todos aqui"</li>
              <li>O Product Owner resolve explicar toda a regra de negócio</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🎯 Estratégias de Sobrevivência</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. A Técnica do "Mute Estratégico"</h3>
            <p>
              Se você não está diretamente envolvido na discussão que fugiu do escopo, mute o microfone 
              e aproveite para:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Responder emails importantes</li>
              <li>Revisar código pendente</li>
              <li>Planejar o almoço (prioridade máxima)</li>
              <li>Atualizar sua lista de tarefas</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. O Jogo do Bingo da Daily</h3>
            <p>
              Crie um bingo mental com frases clássicas de dailies longas:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg my-6">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-800 p-2 rounded text-center">"Não tenho impedimentos"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Só uma dúvida rápida"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Vamos alinhar offline"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Isso é blocker?"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Quem pode me ajudar?"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Vou investigar"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Está no backlog"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Precisa de refinamento"</div>
                <div className="bg-gray-800 p-2 rounded text-center">"Vamos criar uma task"</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. A Arte da Participação Mínima</h3>
            <p>
              Mantenha-se presente sem se comprometer demais:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>"Interessante..."</strong> - Funciona para qualquer situação</li>
              <li><strong>"Faz sentido"</strong> - Demonstra que você está acompanhando</li>
              <li><strong>"Boa pergunta"</strong> - Joga a responsabilidade para outro</li>
              <li><strong>"Vou verificar e te retorno"</strong> - Compra tempo</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. O Método da Câmera Estratégica</h3>
            <p>
              Posicione sua câmera de forma que você possa:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ter outro monitor fora do campo de visão</li>
              <li>Fazer anotações "importantes" (lista de compras)</li>
              <li>Manter contato visual ocasional</li>
              <li>Fazer expressões de concordância no momento certo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🛡️ Técnicas Avançadas</h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">A Desculpa do "Hard Stop"</h3>
            <p>
              Sempre tenha uma reunião "importante" logo após a daily. Exemplos:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>"Tenho um hard stop às 10h para uma call com o cliente"</li>
              <li>"Preciso sair para uma reunião de arquitetura"</li>
              <li>"Tenho uma demo para stakeholders"</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">O Redirecionamento Ninja</h3>
            <p>
              Quando a discussão foge do escopo, seja o herói que salva a todos:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg my-4">
              <p className="italic">
                "Essa é uma discussão importante, mas que tal criarmos uma reunião específica 
                para isso? Assim podemos focar na daily e dar o tempo necessário para esse tópico."
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🎭 Tipos de Personagens em Dailies Longas</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🗣️ O Contador de Histórias</h4>
                <p className="text-sm">
                  Transforma cada task em uma saga épica. "Então eu estava debugando e aí..."
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🤔 O Filósofo</h4>
                <p className="text-sm">
                  Questiona a existência de cada feature. "Mas por que o usuário faria isso?"
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">🔧 O Solucionador</h4>
                <p className="text-sm">
                  Quer resolver todos os problemas na hora. "Já tentou fazer um SELECT * FROM..."
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">😴 O Fantasma</h4>
                <p className="text-sm">
                  Está presente mas não fala nada. Você se pergunta se ele ainda está vivo.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">💡 Como Prevenir Dailies Longas</h2>
            <p>
              Se você tem influência no time, aqui estão algumas estratégias preventivas:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Timeboxing rigoroso:</strong> 15 minutos é 15 minutos</li>
              <li><strong>Parking lot:</strong> Anote discussões para depois</li>
              <li><strong>Formato estruturado:</strong> Cada pessoa tem 2 minutos máximo</li>
              <li><strong>Daily em pé:</strong> Literalmente. Ninguém quer ficar em pé por 2 horas</li>
              <li><strong>Timer visível:</strong> Pressão psicológica funciona</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🏆 Benefícios Inesperados</h2>
            <p>
              Acredite ou não, dailies longas também têm seus benefícios:
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li>Você desenvolve paciência zen</li>
              <li>Aprende a fazer multitasking como um ninja</li>
              <li>Descobre problemas que não sabia que existiam</li>
              <li>Fortalece laços com colegas que sofrem junto</li>
              <li>Aprecia ainda mais as dailies de 15 minutos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">🎯 Conclusão</h2>
            <p>
              Dailies longas são como bugs em produção: inevitáveis, frustrantes, mas parte da vida 
              de desenvolvedor. O segredo é não deixar que elas afetem sua sanidade mental.
            </p>
            <p>
              Lembre-se: você não está sozinho nessa luta. Em algum lugar do mundo, outro desenvolvedor 
              está ouvindo pela terceira vez a explicação de por que aquela feature é importante para 
              o negócio.
            </p>
            <p>
              E quando tudo mais falhar, sempre há a opção de "problemas de conexão". 😉
            </p>

            <div className="bg-gray-900 p-6 rounded-lg mt-8 border-l-4 border-blue-500">
              <h3 className="font-semibold text-white mb-2">💡 Dica de Ouro</h3>
              <p className="text-sm">
                Mantenha sempre um segundo monitor ou dispositivo para ser produtivo durante discussões 
                que não te envolvem. Sua sanidade mental e sua produtividade agradecem.
              </p>
            </div>
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