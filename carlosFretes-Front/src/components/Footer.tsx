import React from 'react';
import { Truck, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { openWhatsApp } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 text-xs border-t border-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-900">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Carlos<span className="text-gray-400">Fretes</span>
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              Serviço profissional de fretes rápidos, transporte de móveis e pequenas mudanças em Curitiba, Região Metropolitana e Cidades Próximas.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>{HERO_CONTENT.whatsappFormatted}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Fast Nav Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Benefícios', id: 'beneficios' },
                { label: 'Como Funciona', id: 'como-funciona' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Área Atendida', id: 'area-atendida' },
                { label: 'Simulador', id: 'simulador' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'FAQ', id: 'faq' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Area Served */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Regiões Atendidas
            </h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                <span><strong>Curitiba:</strong> Batel, Água Verde, Centro, CIC, Portão, Sta. Felicidade, Boqueirão, e todos os bairros.</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                <span><strong>RMC:</strong> São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo, Fazenda Rio Grande.</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                <span><strong>Outras:</strong> Ponta Grossa, Litoral (Paranaguá, Matinhos, Guaratuba) e cidades vizinhas.</span>
              </div>
            </div>
          </div>

          {/* Col 4: Working Hours & Disclaimer */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Horário de Atendimento
            </h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                <span>Segunda a Sábado: 07h00 às 20h00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                <span>Domingos e Feriados: Sob agendamento</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-900 text-[11px] text-gray-500 leading-relaxed">
              *Todas as estimativas apresentadas pelo site são iniciais. O valor final é confirmado após verificação dos detalhes de acesso do imóvel.
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Carlos Fretes. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer bg-white/10 text-white px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
