import React from 'react';
import { DIFFERENTIALS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Diferenciais de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-3 tracking-tight">
            O Padrão de Qualidade em Cada Transporte
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-extrabold text-base text-black mb-2 tracking-tight">
                {diff.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
