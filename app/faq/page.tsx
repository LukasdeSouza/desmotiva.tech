import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Desmotiva Dev | Perguntas Frequentes sobre Humor para Desenvolvedores',
  description: 'Perguntas frequentes sobre o Desmotiva Dev, o site de frases desmotivacionais para desenvolvedores e programadores.',
};

const faqs = [
  {
    category: "Sobre o Site",
    questions: [
      {
        question: "O que é o Desmotiva Dev?",
        answer: "O Desmotiva Dev é um site de humor voltado para desenvolvedores, oferecendo frases desmotivacionais hilariantes sobre programação, desenvolvimento de software e carreira tech. Nosso objetivo é trazer leveza ao dia a dia dos programadores através do humor que só quem programa entende."
      },
      {
        question: "Quantas frases estão disponíveis?",
        answer: "Temos mais de 100 frases únicas e engraçadas sobre a vida de desenvolvedor, desde bugs inexplicáveis até reuniões de daily intermináveis. Estamos sempre adicionando novas frases baseadas nas experiências da comunidade."
      },
      {
        question: "O site é gratuito?",
        answer: "Completamente gratuito! Nossa missão é espalhar humor e reality checks para a comunidade dev. Nunca cobraremos para acessar as frases ou qualquer conteúdo do site."
      },
      {
        question: "Como vocês escolhem as frases?",
        answer: "As frases são baseadas em experiências reais de desenvolvedores. Coletamos situações engraçadas da comunidade, experiências pessoais e aqueles momentos que todo programador já viveu pelo menos uma vez na carreira."
      }
    ]
  },
  {
    category: "Funcionalidades",
    questions: [
      {
        question: "Posso compartilhar as frases?",
        answer: "Sim! Você pode compartilhar as frases no WhatsApp, Twitter, LinkedIn ou simplesmente copiar o texto. Cada frase tem botões de compartilhamento integrados para facilitar o processo."
      },
      {
        question: "As frases são sempre diferentes?",
        answer: "Sim! O sistema seleciona frases aleatoriamente do nosso banco de dados, então você sempre terá uma experiência diferente. É possível que uma frase se repita eventualmente, mas com mais de 100 opções, isso é raro."
      },
      {
        question: "Posso usar as frases em outros projetos?",
        answer: "As frases são de domínio público e você pode usá-las livremente. Só pedimos que, quando possível, mencione o desmotiva.dev como fonte para ajudar outros desenvolvedores a descobrirem o site."
      },
      {
        question: "O site funciona no celular?",
        answer: "Perfeitamente! O site foi desenvolvido com design responsivo, funcionando bem em smartphones, tablets e desktops. Sabemos que muitos devs acessam durante o intervalo no celular."
      }
    ]
  },
  {
    category: "Contribuição",
    questions: [
      {
        question: "Posso sugerir novas frases?",
        answer: "Claro! Entre em contato conosco no Instagram @deveprogramar ou através da página de contato com suas sugestões. As melhores frases são adicionadas ao site com os devidos créditos."
      },
      {
        question: "Como posso contribuir com o projeto?",
        answer: "Além de sugerir frases, você pode compartilhar o site com outros desenvolvedores, seguir nossas redes sociais, dar feedback sobre melhorias ou até mesmo contribuir com código no nosso repositório GitHub."
      },
      {
        question: "Vocês aceitam frases em inglês?",
        answer: "Atualmente focamos em português, mas estamos considerando adicionar suporte a outros idiomas no futuro. Se você tem sugestões em inglês, pode enviar que guardaremos para quando implementarmos o suporte multilíngue."
      }
    ]
  },
  {
    category: "Técnico",
    questions: [
      {
        question: "Que tecnologias vocês usam?",
        answer: "O site é construído com Next.js 14, TypeScript, Tailwind CSS e hospedado na Vercel. Usamos Google Analytics para métricas e Google AdSense para monetização. Todo o código segue boas práticas de desenvolvimento."
      },
      {
        question: "O site coleta dados pessoais?",
        answer: "Coletamos apenas dados básicos de navegação através do Google Analytics (páginas visitadas, tempo no site, localização aproximada) e cookies para anúncios. Não coletamos informações pessoais identificáveis. Veja nossa política de privacidade para detalhes."
      },
      {
        question: "Por que tem anúncios no site?",
        answer: "Os anúncios ajudam a manter o site funcionando e nos permitem continuar criando conteúdo gratuito. Tentamos posicionar os anúncios de forma não intrusiva para não atrapalhar a experiência do usuário."
      },
      {
        question: "O site está sempre disponível?",
        answer: "Sim! O site é hospedado na Vercel com alta disponibilidade. Em caso de manutenção ou problemas técnicos, informamos através das nossas redes sociais."
      }
    ]
  },
  {
    category: "Comunidade",
    questions: [
      {
        question: "Vocês têm redes sociais?",
        answer: "Sim! Nos siga no Twitter @deveprogramar para atualizações, novas frases e interação com a comunidade. É também o melhor canal para enviar sugestões e feedback."
      },
      {
        question: "Posso usar as frases na minha empresa?",
        answer: "Claro! Muitas empresas usam nossas frases em Slack, apresentações ou para quebrar o gelo em reuniões. Só pedimos bom senso no contexto - algumas frases são mais adequadas para ambientes descontraídos."
      },
      {
        question: "Vocês fazem parcerias?",
        answer: "Estamos sempre abertos a parcerias interessantes com a comunidade dev, empresas de tecnologia ou criadores de conteúdo. Entre em contato para conversarmos sobre possibilidades."
      },
      {
        question: "Como posso ficar por dentro das novidades?",
        answer: "Siga nossas redes sociais, visite o blog regularmente ou adicione o site aos favoritos. Também estamos considerando criar uma newsletter para quem quer receber atualizações por email."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            desmotiva.dev
          </Link>
          <h1 className="text-3xl font-bold mt-8 mb-4">Perguntas Frequentes</h1>
          <p className="text-gray-400">Tudo que você precisa saber sobre o Desmotiva Dev</p>
        </header>

        <section className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">{category.category}</h2>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <article key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                    <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Não encontrou sua resposta?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Se você tem alguma pergunta que não está listada aqui, não hesite em entrar em contato conosco. 
            Adoramos conversar com a comunidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://twitter.com/deveprogramar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Twitter @deveprogramar
            </a>
            <Link 
              href="/contato"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Página de Contato
            </Link>
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