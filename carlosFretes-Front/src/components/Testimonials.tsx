import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Avaliações de Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-3 tracking-tight">
            Quem Já Usou Nosso Serviço Recomenda
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Veja o depoimento de moradores e empresários de Curitiba e Região Metropolitana que contrataram nossos fretes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#F9FAFB] rounded-3xl p-6 border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-black">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-300" />
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-gray-200/60">
                <p className="font-extrabold text-sm text-black tracking-tight">
                  {test.name}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  <span className="truncate">{test.roleLocation}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-gray-400">
                  <span className="bg-gray-200/60 text-gray-700 px-2.5 py-0.5 rounded-full font-bold">
                    {test.serviceType}
                  </span>
                  <span>{test.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
