import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-3 tracking-tight">
            Perguntas Respondidas Rapidamente
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
            Tire suas dúvidas principais sobre os serviços de frete, ajudantes e formas de pagamento em Curitiba.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/80 transition-colors"
                >
                  <span className="font-extrabold text-base text-black flex items-center gap-3 tracking-tight">
                    <HelpCircle className="w-4 h-4 text-black shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-gray-100 text-black transition-transform duration-200 ${isOpen ? 'rotate-180 bg-black text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
