import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - Desmotiva Dev | Perguntas Frequentes sobre Humor para Desenvolvedores',
  description: 'Perguntas frequentes sobre o Desmotiva Dev, o site de frases desmotivacionais para desenvolvedores e programadores.',
};

const faqs = [
  {
    question: "O que é o Desmotiva Dev?",
    answer: "O Desmotiva Dev é um site de humor voltado para desenvolvedores, oferecendo frases desmotivacionais hilariantes sobre programação, desenvolvimento de software e carreira tech."
  },
  {
    question: "Quantas frases estão disponíveis?",
    answer: "Temos mais de 50 frases únicas e engraçadas sobre a vida de desenvolvedor, desde bugs até reuniões de daily."
  },
  {
    question: "Posso compartilhar as frases?",
    answer: "Sim! Você pode compartilhar as frases no WhatsApp, Twitter ou copiar para usar onde quiser."
  },
  {
    question: "O site é gratuito?",
    answer: "Completamente gratuito! Nossa missão é espalhar humor e realidade checks para a comunidade dev."
  },
  {
    question: "Posso sugerir novas frases?",
    answer: "Claro! Entre em contato conosco no Twitter @deveprogramar com suas sugestões de frases desmotivacionais."
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

        <section className="space-y-8">
          {faqs.map((faq, index) => (
            <article key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3 text-white">{faq.question}</h2>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
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