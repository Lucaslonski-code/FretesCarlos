import React from 'react';
import { HOW_IT_WORKS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenSimulator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenSimulator }) => {
  return (
    <section id="como-funciona" className="py-20 bg-black text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
            Processo Simples e Sem Burocracia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Como Funciona Seu Orçamento em 4 Passos
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Em menos de 2 minutos você simula a distância, obtém uma estimativa transparente e envia os detalhes diretamente para o WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={item.step}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 relative flex flex-col justify-between hover:border-white/20 transition-all duration-200 hover:bg-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-extrabold text-white bg-white/20 px-3 py-1 rounded-full">
                    Passo {item.step}
                  </span>
                  {index < HOW_IT_WORKS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-gray-500" />
                  )}
                </div>

                <h3 className="font-bold text-lg text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>Rápido & 100% Online</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              onOpenSimulator();
            }}
            className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-gray-100 font-bold text-sm px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg active:scale-98"
          >
            <span>Fazer Minha Simulação Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
