import React from 'react';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroProps {
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator }) => {
  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#F9FAFB] overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 mb-6 border border-gray-200/60">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Atendimento Direto • Curitiba e Região
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] font-extrabold text-black mb-6 tracking-tight">
              Fretes e Pequenas Mudanças <br className="hidden sm:block" /> em Curitiba e Região.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Atendimento humanizado, pontual e sem burocracia. Faça uma simulação rápida e receba seu orçamento na hora a partir de R$ 200,00.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <button
                onClick={() => {
                  onOpenSimulator();
                }}
                className="bg-black text-white rounded-full py-4 px-8 font-bold text-sm sm:text-base flex items-center justify-center gap-3 hover:bg-gray-800 hover:scale-[1.01] transition-all cursor-pointer shadow-md active:scale-[0.98]"
                id="hero-simular-cta"
              >
                <span>Calcular Orçamento</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={() => openWhatsApp()}
                className="bg-white border border-gray-200 text-black hover:bg-gray-50 rounded-full py-4 px-7 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                id="hero-whatsapp-cta"
              >
                <MessageSquare className="w-4 h-4 text-gray-900" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-10 sm:gap-12 border-t border-gray-200/80 pt-8 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-black">+5.000</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-0.5">Fretes Realizados</p>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-black">4.9/5.0</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-0.5">Avaliação Clientes</p>
              </div>
            </div>

          </div>

          {/* Right Column: Simulation Preview Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
              
              {/* Black Card Header */}
              <div className="bg-black px-7 py-6 text-white">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Simulador de Orçamento</span>
                  <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider text-white">Curitiba & RMC</span>
                </div>
                <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                  <div className="h-1 bg-white w-2/5 rounded-full"></div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Onde retiramos a carga?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      readOnly
                      onClick={() => {
                        onOpenSimulator();
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 cursor-pointer hover:border-black transition-all placeholder:text-gray-400"
                      value="Selecione Bairro ou Endereço de Origem..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Para onde vamos levar?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      readOnly
                      onClick={() => {
                        onOpenSimulator();
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-sm font-medium text-gray-800 cursor-pointer hover:border-black transition-all placeholder:text-gray-400"
                      value="Selecione Bairro ou Cidade de Destino..."
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    onOpenSimulator();
                  }}
                  className="w-full bg-black text-white rounded-xl py-4 font-bold text-base flex items-center justify-center gap-2.5 hover:scale-[1.02] transition-transform active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  <span>Iniciar Simulação Grátis</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>

                {/* Micro guarantees */}
                <div className="pt-2 flex items-center justify-center gap-6 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Sem Taxas Ocultas</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
