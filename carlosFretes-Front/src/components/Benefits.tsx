import React from 'react';
import { Zap, ShieldCheck, Clock, UserCheck, BadgeCheck } from 'lucide-react';
import { BENEFITS } from '../data/content';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5 text-white" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-white" />,
  Clock: <Clock className="w-5 h-5 text-white" />,
  UserCheck: <UserCheck className="w-5 h-5 text-white" />,
  BadgeCheck: <BadgeCheck className="w-5 h-5 text-white" />
};

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Por Que Escolher Nosso Serviço
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-4 tracking-tight">
            Transparência, Pontualidade e Cuidado do Início ao Fim
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Oferecemos uma experiência de frete sem dor de cabeça, pensada para quem busca organização e agilidade em Curitiba e Região Metropolitana.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#F9FAFB] hover:bg-white rounded-3xl p-7 border border-gray-100 transition-all duration-200 hover:shadow-lg hover:border-gray-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs">
                  {iconMap[benefit.iconName] || <Zap className="w-5 h-5 text-white" />}
                </div>
                <h3 className="font-bold text-lg text-black mb-2 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
