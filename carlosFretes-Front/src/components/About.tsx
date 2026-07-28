import React from 'react';
import { DRIVER_PROFILE } from '../data/content';
import { ShieldCheck, Award, ThumbsUp, Truck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Driver Visual / Badge */}
          <div className="lg:col-span-5">
            <div className="bg-black text-white rounded-3xl p-8 sm:p-9 shadow-xl relative overflow-hidden border border-gray-900">
              
              <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center font-black text-2xl mb-6 shadow-md">
                <Truck className="w-7 h-7" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 block mb-1">
                Profissional de Confiança
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-white mb-1.5 tracking-tight">
                {DRIVER_PROFILE.name}
              </h3>
              <p className="text-xs text-gray-400 font-semibold mb-8">
                {DRIVER_PROFILE.role}
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/10">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-white">+1.800</p>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">Fretes Entregues</p>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                  <p className="text-2xl font-bold text-white">99.8%</p>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">Pontualidade</p>
                </div>
              </div>

            </div>
          </div>

          {/* Description & Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
              Quem Cuida da Sua Carga
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Compromisso com o Seu Patrimônio e com Seu Tempo
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {DRIVER_PROFILE.bio}
            </p>

            {/* Badges List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-black shrink-0" />
                <span className="text-xs font-bold text-black">Proteção com Mantas e Cintas</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                <Award className="w-5 h-5 text-black shrink-0" />
                <span className="text-xs font-bold text-black">Experiência em Curitiba e RMC</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                <ThumbsUp className="w-5 h-5 text-black shrink-0" />
                <span className="text-xs font-bold text-black">Comunicação Direta sem Burocracia</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-[#F9FAFB] rounded-2xl border border-gray-100">
                <Truck className="w-5 h-5 text-black shrink-0" />
                <span className="text-xs font-bold text-black">Veículo Inspecionado e Revisado</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
