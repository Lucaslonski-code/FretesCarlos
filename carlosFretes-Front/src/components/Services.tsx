import React from 'react';
import { Truck, Home, Package, Building, MapPin, Calendar, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-5 h-5 text-white" />,
  Home: <Home className="w-5 h-5 text-white" />,
  Package: <Package className="w-5 h-5 text-white" />,
  Building: <Building className="w-5 h-5 text-white" />,
  MapPin: <MapPin className="w-5 h-5 text-white" />,
  Calendar: <Calendar className="w-5 h-5 text-white" />
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-20 bg-[#F9FAFB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Nossa Linha de Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-4 tracking-tight">
            Soluções Sob Medida para Suas Necessidades de Carga
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Atendemos desde pequenos fretes avulsos e entregas urgentes até pequenas mudanças completas em Curitiba e Região Metropolitana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Tag & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-xs">
                      {iconMap[service.iconName] || <Truck className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-black mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Button */}
                <button
                  onClick={() => {
                    onSelectService(service.id);
                    const el = document.getElementById('simulador');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Simular Este Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
