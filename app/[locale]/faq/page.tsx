'use client';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { useState } from 'react';
import AdSense from '../../components/AdSense';

export default function FAQPage() {
  const t = useTranslations('FAQPage');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { id: 'q1', question: t('q1.question'), answer: t('q1.answer') },
    { id: 'q2', question: t('q2.question'), answer: t('q2.answer') },
    { id: 'q3', question: t('q3.question'), answer: t('q3.answer') },
    { id: 'q4', question: t('q4.question'), answer: t('q4.answer') },
    { id: 'q5', question: t('q5.question'), answer: t('q5.answer') },
    { id: 'q6', question: t('q6.question'), answer: t('q6.answer') },
    { id: 'q7', question: t('q7.question'), answer: t('q7.answer') },
    { id: 'q8', question: t('q8.question'), answer: t('q8.answer') },
    { id: 'q9', question: t('q9.question'), answer: t('q9.answer') },
    { id: 'q10', question: t('q10.question'), answer: t('q10.answer') },
    { id: 'q11', question: t('q11.question'), answer: t('q11.answer') },
    { id: 'q12', question: t('q12.question'), answer: t('q12.answer') },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex min-h-screen flex-col items-center px-4 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </header>

        {/* FAQ List */}
        <div className="max-w-4xl w-full space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AdSense - Middle */}
        <div className="w-full max-w-4xl my-8">
          <AdSense 
            adSlot="auto"
            adFormat="rectangle"
            style={{ display: 'block', textAlign: 'center' }}
          />
        </div>

        {/* Contact Section */}
        <section className="max-w-4xl w-full bg-gray-900 border border-gray-800 rounded-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{t('contact.title')}</h2>
          <p className="text-gray-300 mb-4">{t('contact.description')}</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://twitter.com/deveprogramar" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              {t('contact.twitter')}
            </a>
          </div>
        </section>

        {/* AdSense - Bottom */}
        <div className="w-full max-w-4xl my-8">
          <AdSense 
            adSlot="auto"
            adFormat="auto"
            style={{ display: 'block', textAlign: 'center' }}
          />
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <a 
            href="/" 
            className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 inline-block font-semibold"
          >
            ← {t('backButton')}
          </a>
        </div>
      </main>
    </div>
  );
}
