import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface FinalCTAProps {
  onOpenSimulator: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenSimulator }) => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-gray-300 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Atendimento Imediato em Curitiba e Região Metropolitana</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Precisa de um Frete Rápido, Pontual e Seguro Hoje?
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Simule seu orçamento online em menos de 1 minuto sem nenhum compromisso ou entre em contato direto pelo WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => {
              onOpenSimulator();
            }}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-bold text-sm px-8 py-4 rounded-full shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-98"
            id="final-cta-simulator-btn"
          >
            <span>Simular Orçamento no Site</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={() => openWhatsApp()}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-8 py-4 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-98"
            id="final-cta-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Falar no WhatsApp Agora</span>
          </button>
        </div>

        {/* Bottom Trust Row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Sem Custos Escondidos</span>
          </div>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Mantas Acolchoadas Inclusas</span>
          </div>
          <span className="text-gray-600">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Resposta em Minutos</span>
          </div>
        </div>

      </div>
    </section>
  );
};
