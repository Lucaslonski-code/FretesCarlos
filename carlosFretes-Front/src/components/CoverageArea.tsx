import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, ShieldAlert } from 'lucide-react';
import { COVERAGE_AREAS } from '../data/content';
import { CURITIBA_LOCATIONS } from '../data/curitibaLocations';

export const CoverageArea: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = searchTerm.trim() === ''
    ? []
    : CURITIBA_LOCATIONS.filter(loc =>
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (loc.searchKeywords && loc.searchKeywords.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <section id="area-atendida" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 bg-gray-100 px-3.5 py-1.5 rounded-full inline-block">
            Área de Atendimento Completa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-4 tracking-tight">
            Curitiba, Região Metropolitana e Litoral
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Nossos veículos circulam diariamente por todos os bairros da capital paranaense e municípios vizinhos.
          </p>
        </div>

        {/* Live Search Checker Box */}
        <div className="max-w-xl mx-auto mb-16 bg-[#F9FAFB] p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs">
          <label htmlFor="area-search-input" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            Consulte seu Bairro ou Cidade
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="area-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite seu bairro (ex: Batel, Água Verde) ou cidade (ex: SJP, Colombo)..."
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm text-black placeholder:text-gray-300 focus:ring-2 focus:ring-black outline-none transition-all"
            />
          </div>

          {/* Search Result Feedback */}
          {searchTerm.trim() !== '' && (
            <div className="mt-4 pt-4 border-t border-gray-200/80">
              {filteredLocations.length > 0 ? (
                <div className="flex items-start gap-3 bg-green-50 text-green-900 p-4 rounded-2xl border border-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">
                      Excelente! Atendemos {filteredLocations[0].name} com saídas diárias.
                    </p>
                    <p className="text-[11px] text-green-700 mt-0.5">
                      Você pode realizar o cálculo e agendar a coleta imediatamente no simulador abaixo.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3 bg-amber-50 text-amber-900 p-4 rounded-2xl border border-amber-200">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold">
                      Localização sob consulta rápida.
                    </p>
                    <p className="text-[11px] text-amber-800 mt-0.5">
                      Mesmo que seu bairro ou cidade não esteja listado explicitamente, atendemos toda a Região Metropolitana de Curitiba e litoral sob consulta direta no WhatsApp.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COVERAGE_AREAS.map((area, index) => (
            <div key={index} className="bg-[#F9FAFB] hover:bg-white rounded-3xl p-7 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-bold text-lg text-black tracking-tight">
                  {area.name}
                </h3>
              </div>

              <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                {area.details}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {area.keyNeighborhoodsOrCities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
