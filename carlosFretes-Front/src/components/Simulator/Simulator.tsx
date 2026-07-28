import React, { useState, useMemo, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Package, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw, 
  MessageSquare, 
  Building2, 
  Clock, 
  Sparkles,
  Search,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';
import { 
  CITIES_LIST, 
  getNeighborhoodsForCity 
} from '../../data/curitibaLocations';
import { 
  SimulationForm, 
  AccessDifficultyOption,
  CalculationResult
} from '../../types';
import { calculateFreightEstimate } from '../../utils/calculator';
import { openWhatsApp } from '../../utils/whatsapp';

interface SimulatorProps {
  initialCategory?: string;
}

export const Simulator: React.FC<SimulatorProps> = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Form State with strict Cidade -> Bairro -> Endereço (Opcional)
  const [form, setForm] = useState<SimulationForm>({
    originCity: 'Curitiba',
    originNeighborhood: 'Centro',
    originAddress: '',
    destinationCity: 'Curitiba',
    destinationNeighborhood: 'Batel',
    destinationAddress: '',
    origin: null,
    originCustomText: '',
    destination: null,
    destinationCustomText: '',
    date: new Date().toISOString().split('T')[0],
    time: 'Manhã',
    moveType: 'quick',
    cargoDescription: '',
    extraHelpers: 'none',
    accessOrigin: 'ground',
    accessDestination: 'ground',
    observations: ''
  });

  // Search states for City and Neighborhood dropdowns
  const [originCitySearch, setOriginCitySearch] = useState('');
  const [originCityDropdownOpen, setOriginCityDropdownOpen] = useState(false);

  const [originBairroSearch, setOriginBairroSearch] = useState('');
  const [originBairroDropdownOpen, setOriginBairroDropdownOpen] = useState(false);

  const [destCitySearch, setDestCitySearch] = useState('');
  const [destCityDropdownOpen, setDestCityDropdownOpen] = useState(false);

  const [destBairroSearch, setDestBairroSearch] = useState('');
  const [destBairroDropdownOpen, setDestBairroDropdownOpen] = useState(false);

  // Result State
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-scroll smoothly to simulator card whenever step changes
  useEffect(() => {
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  // Filtering Cities for Origin
  const filteredOriginCities = useMemo(() => {
    const q = originCitySearch.toLowerCase().trim();
    if (!q) return CITIES_LIST;
    return CITIES_LIST.filter(c => c.name.toLowerCase().includes(q) || c.zone.toLowerCase().includes(q));
  }, [originCitySearch]);

  // Filtering Cities for Destination
  const filteredDestCities = useMemo(() => {
    const q = destCitySearch.toLowerCase().trim();
    if (!q) return CITIES_LIST;
    return CITIES_LIST.filter(c => c.name.toLowerCase().includes(q) || c.zone.toLowerCase().includes(q));
  }, [destCitySearch]);

  // Neighborhoods for Origin City
  const originNeighborhoodsList = useMemo(() => {
    return getNeighborhoodsForCity(form.originCity);
  }, [form.originCity]);

  const filteredOriginNeighborhoods = useMemo(() => {
    const q = originBairroSearch.toLowerCase().trim();
    if (!q) return originNeighborhoodsList;
    return originNeighborhoodsList.filter(n => n.toLowerCase().includes(q));
  }, [originNeighborhoodsList, originBairroSearch]);

  // Neighborhoods for Destination City
  const destNeighborhoodsList = useMemo(() => {
    return getNeighborhoodsForCity(form.destinationCity);
  }, [form.destinationCity]);

  const filteredDestNeighborhoods = useMemo(() => {
    const q = destBairroSearch.toLowerCase().trim();
    if (!q) return destNeighborhoodsList;
    return destNeighborhoodsList.filter(n => n.toLowerCase().includes(q));
  }, [destNeighborhoodsList, destBairroSearch]);

  const handleNextStep = () => {
    setErrorMessage('');

    // Step 1 Validation: Cidade and Bairro are REQUIRED. Full Street Address is OPTIONAL.
    if (currentStep === 1) {
      if (!form.originCity.trim()) {
        setErrorMessage('Por favor, selecione a cidade de retirada.');
        return;
      }
      if (!form.originNeighborhood.trim()) {
        setErrorMessage('Por favor, selecione ou digite o bairro de retirada.');
        return;
      }
    }

    // Step 2 Validation: Cidade and Bairro are REQUIRED. Full Street Address is OPTIONAL.
    if (currentStep === 2) {
      if (!form.destinationCity.trim()) {
        setErrorMessage('Por favor, selecione a cidade de entrega.');
        return;
      }
      if (!form.destinationNeighborhood.trim()) {
        setErrorMessage('Por favor, selecione ou digite o bairro de entrega.');
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === 5) {
      // Calculate behind the scenes
      setIsCalculating(true);
      setTimeout(() => {
        const calculated = calculateFreightEstimate(form);
        setResult(calculated);
        setIsCalculating(false);
        setCurrentStep(6); // Result screen
      }, 350);
    }
  };

  const handlePrevStep = () => {
    setErrorMessage('');
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setResult(null);
    setErrorMessage('');
    setForm({
      originCity: 'Curitiba',
      originNeighborhood: 'Centro',
      originAddress: '',
      destinationCity: 'Curitiba',
      destinationNeighborhood: 'Batel',
      destinationAddress: '',
      origin: null,
      originCustomText: '',
      destination: null,
      destinationCustomText: '',
      date: new Date().toISOString().split('T')[0],
      time: '08:00',
      moveType: 'quick',
      cargoDescription: '',
      extraHelpers: 'none',
      accessOrigin: 'ground',
      accessDestination: 'ground',
      observations: ''
    });
  };

  const stepTitles = [
    'Cidade e Bairro de Retirada',
    'Cidade e Bairro de Entrega',
    'Tipo de Mudança',
    'Ajudante Adicional',
    'Dificuldade de Acesso',
    'Estimativa do Orçamento'
  ];

  return (
    <section id="simulador" className="pt-4 sm:pt-5 pb-6 sm:pb-8 bg-[#F9FAFB] border-b border-gray-100 scroll-mt-[72px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-2.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mb-1.5">
            Simulador de Orçamento
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Calcule Seu Frete em Poucos Cliques
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto leading-relaxed">
            Selecione a cidade e bairro para obter uma estimativa de forma simples e rápida.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] overflow-hidden transition-all">
          
          {/* Progress Header */}
          {currentStep <= 5 && (
            <div className="bg-black text-white px-5 py-3.5 sm:px-6 sm:py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Etapa {currentStep} de 5
                </span>
                <span className="text-xs font-semibold text-gray-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                  {stepTitles[currentStep - 1]}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-300 ease-out"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Step Body */}
          <div className="p-4 sm:p-6 md:p-8">
            
            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 text-red-900 rounded-2xl text-sm font-bold flex items-center justify-between">
                <span>⚠️ {errorMessage}</span>
                <button onClick={() => setErrorMessage('')} className="text-red-700 font-extrabold ml-2 text-lg">✕</button>
              </div>
            )}

            {/* STEP 1: RETIRADA (CIDADE -> BAIRRO -> ENDEREÇO OPCIONAL) */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-black flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-black shrink-0" />
                    <span>Local de Retirada (Origem)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                    Informe a Cidade e o Bairro onde os pertences serão coletados.
                  </p>
                </div>

                {/* 1. CAMPO OBRIGATÓRIO: CIDADE */}
                <div className="relative">
                  <label htmlFor="origin-city-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1.5 flex items-center justify-between">
                    <span>1. Em qual Cidade fica o imóvel de Retirada? *</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">Pesquisa rápida</span>
                  </label>
                  
                  <div className="relative">
                    <input
                      id="origin-city-select"
                      type="text"
                      value={originCityDropdownOpen ? originCitySearch : form.originCity}
                      onChange={(e) => {
                        setOriginCitySearch(e.target.value);
                        setOriginCityDropdownOpen(true);
                      }}
                      onFocus={() => {
                        setOriginCitySearch('');
                        setOriginCityDropdownOpen(true);
                      }}
                      placeholder="Digite ou selecione a Cidade (Ex: Curitiba, Colombo, SJP...)"
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-black focus:border-black focus:bg-white outline-none transition-all cursor-pointer shadow-sm"
                    />
                    <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Dropdown list */}
                  {originCityDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border-2 border-black rounded-xl shadow-2xl max-h-48 overflow-y-auto p-1.5 space-y-1">
                      {filteredOriginCities.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            setForm(f => ({ 
                              ...f, 
                              originCity: c.name, 
                              originNeighborhood: getNeighborhoodsForCity(c.name)[0] || 'Centro'
                            }));
                            setOriginCityDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-between hover:bg-gray-100 transition-colors ${
                            form.originCity === c.name ? 'bg-black text-white' : 'text-gray-900'
                          }`}
                        >
                          <span className="text-sm">{c.name}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            form.originCity === c.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {c.zone}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. CAMPO OBRIGATÓRIO: BAIRRO (FILTRADO PELA CIDADE ESCOLHIDA) */}
                <div className="relative">
                  <label htmlFor="origin-bairro-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1.5 flex items-center justify-between">
                    <span>2. Qual é o Bairro em {form.originCity}? *</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">Bairros de {form.originCity}</span>
                  </label>

                  <div className="relative">
                    <input
                      id="origin-bairro-select"
                      type="text"
                      value={originBairroDropdownOpen ? originBairroSearch : form.originNeighborhood}
                      onChange={(e) => {
                        setOriginBairroSearch(e.target.value);
                        setForm(f => ({ ...f, originNeighborhood: e.target.value }));
                        setOriginBairroDropdownOpen(true);
                      }}
                      onFocus={() => {
                        setOriginBairroSearch('');
                        setOriginBairroDropdownOpen(true);
                      }}
                      placeholder={`Selecione ou digite o Bairro de ${form.originCity}...`}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-black focus:border-black focus:bg-white outline-none transition-all cursor-pointer shadow-sm"
                    />
                    <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Dropdown list for Neighborhoods */}
                  {originBairroDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border-2 border-black rounded-xl shadow-2xl max-h-48 overflow-y-auto p-1.5 space-y-1">
                      {filteredOriginNeighborhoods.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            setForm(f => ({ ...f, originNeighborhood: b }));
                            setOriginBairroDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-between hover:bg-gray-100 transition-colors ${
                            form.originNeighborhood === b ? 'bg-black text-white' : 'text-gray-900'
                          }`}
                        >
                          <span className="text-sm">{b}</span>
                          {form.originNeighborhood === b && <Check className="w-4 h-4 text-white" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. CAMPO OPCIONAL: ENDEREÇO (RUA / NÚMERO) */}
                <div>
                  <label htmlFor="origin-street-input" className="block text-xs sm:text-sm font-bold text-gray-800 mb-1">
                    3. Endereço / Rua (Opcional):
                  </label>
                  <input
                    id="origin-street-input"
                    type="text"
                    value={form.originAddress}
                    onChange={(e) => setForm(f => ({ ...f, originAddress: e.target.value }))}
                    placeholder="Ex: Rua Marechal Deodoro, 450 (opcional)"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white outline-none transition-all"
                  />
                  <p className="text-[11px] text-gray-500 mt-1 font-medium">
                    * Não é necessário informar a rua para calcular a Estimativa de Valor.
                  </p>
                </div>

              </div>
            )}

            {/* STEP 2: ENTREGA (CIDADE -> BAIRRO -> ENDEREÇO OPCIONAL) */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-black flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-black shrink-0" />
                    <span>Local de Entrega (Destino)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                    Informe a Cidade e o Bairro de descarregamento.
                  </p>
                </div>

                {/* 1. CAMPO OBRIGATÓRIO: CIDADE */}
                <div className="relative">
                  <label htmlFor="dest-city-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1.5 flex items-center justify-between">
                    <span>1. Em qual Cidade fica o imóvel de Entrega? *</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">Pesquisa rápida</span>
                  </label>
                  
                  <div className="relative">
                    <input
                      id="dest-city-select"
                      type="text"
                      value={destCityDropdownOpen ? destCitySearch : form.destinationCity}
                      onChange={(e) => {
                        setDestCitySearch(e.target.value);
                        setDestCityDropdownOpen(true);
                      }}
                      onFocus={() => {
                        setDestCitySearch('');
                        setDestCityDropdownOpen(true);
                      }}
                      placeholder="Digite ou selecione a Cidade (Ex: Curitiba, Araucária, SJP...)"
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-black focus:border-black focus:bg-white outline-none transition-all cursor-pointer shadow-sm"
                    />
                    <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Dropdown list */}
                  {destCityDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border-2 border-black rounded-xl shadow-2xl max-h-48 overflow-y-auto p-1.5 space-y-1">
                      {filteredDestCities.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => {
                            setForm(f => ({ 
                              ...f, 
                              destinationCity: c.name,
                              destinationNeighborhood: getNeighborhoodsForCity(c.name)[0] || 'Centro'
                            }));
                            setDestCityDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-between hover:bg-gray-100 transition-colors ${
                            form.destinationCity === c.name ? 'bg-black text-white' : 'text-gray-900'
                          }`}
                        >
                          <span className="text-sm">{c.name}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            form.destinationCity === c.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {c.zone}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. CAMPO OBRIGATÓRIO: BAIRRO */}
                <div className="relative">
                  <label htmlFor="dest-bairro-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1.5 flex items-center justify-between">
                    <span>2. Qual é o Bairro em {form.destinationCity}? *</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">Bairros de {form.destinationCity}</span>
                  </label>

                  <div className="relative">
                    <input
                      id="dest-bairro-select"
                      type="text"
                      value={destBairroDropdownOpen ? destBairroSearch : form.destinationNeighborhood}
                      onChange={(e) => {
                        setDestBairroSearch(e.target.value);
                        setForm(f => ({ ...f, destinationNeighborhood: e.target.value }));
                        setDestBairroDropdownOpen(true);
                      }}
                      onFocus={() => {
                        setDestBairroSearch('');
                        setDestBairroDropdownOpen(true);
                      }}
                      placeholder={`Selecione ou digite o Bairro de ${form.destinationCity}...`}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-black focus:border-black focus:bg-white outline-none transition-all cursor-pointer shadow-sm"
                    />
                    <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Dropdown list for Neighborhoods */}
                  {destBairroDropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white border-2 border-black rounded-xl shadow-2xl max-h-48 overflow-y-auto p-1.5 space-y-1">
                      {filteredDestNeighborhoods.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            setForm(f => ({ ...f, destinationNeighborhood: b }));
                            setDestBairroDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-between hover:bg-gray-100 transition-colors ${
                            form.destinationNeighborhood === b ? 'bg-black text-white' : 'text-gray-900'
                          }`}
                        >
                          <span className="text-sm">{b}</span>
                          {form.destinationNeighborhood === b && <Check className="w-4 h-4 text-white" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. CAMPO OPCIONAL: ENDEREÇO (RUA / NÚMERO) */}
                <div>
                  <label htmlFor="dest-street-input" className="block text-xs sm:text-sm font-bold text-gray-800 mb-1">
                    3. Endereço / Rua (Opcional):
                  </label>
                  <input
                    id="dest-street-input"
                    type="text"
                    value={form.destinationAddress}
                    onChange={(e) => setForm(f => ({ ...f, destinationAddress: e.target.value }))}
                    placeholder="Ex: Av. Sete de Setembro, 4200 (opcional)"
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white outline-none transition-all"
                  />
                  <p className="text-[11px] text-gray-500 mt-1 font-medium">
                    * Não é necessário informar a rua para calcular a Estimativa de Valor.
                  </p>
                </div>

              </div>
            )}

            {/* STEP 3: TIPO DE MUDANÇA (SEM PREÇOS) */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-black flex items-center gap-2">
                    <Package className="w-5 h-5 text-black shrink-0" />
                    <span>Qual o Tipo de Mudança ou Carga?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                    Escolha a opção que melhor descreve a sua necessidade.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {/* Option 1: Quick */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, moveType: 'quick' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.moveType === 'quick'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        Mudança rápida ou poucos itens
                      </span>
                      {form.moveType === 'quick' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.moveType === 'quick' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Pequenos fretes, poucos móveis, eletrodomésticos ou caixas avulsas.
                    </p>
                  </button>

                  {/* Option 2: Full Single */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, moveType: 'full_single' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.moveType === 'full_single'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        Mudança completa — até 1 caminhão cheio
                      </span>
                      {form.moveType === 'full_single' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.moveType === 'full_single' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Mudança residencial padrão ocupando até a capacidade completa de um caminhão.
                    </p>
                  </button>

                  {/* Option 3: Multi Trip */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, moveType: 'multi_trip' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.moveType === 'multi_trip'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        Mais de uma viagem necessária
                      </span>
                      {form.moveType === 'multi_trip' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.moveType === 'multi_trip' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Mudança de grande porte que ultrapassa a capacidade de um único percurso. Exige avaliação direta do Motorista.
                    </p>
                  </button>
                </div>

                {/* Cargo Description Optional Input */}
                <div>
                  <label htmlFor="cargo-description-input" className="block text-xs sm:text-sm font-bold text-black mb-1">
                    Quais itens principais serão transportados? (Opcional):
                  </label>
                  <input
                    id="cargo-description-input"
                    type="text"
                    value={form.cargoDescription}
                    onChange={(e) => setForm(f => ({ ...f, cargoDescription: e.target.value }))}
                    placeholder="Ex: Geladeira, Sofá, Cama, Caixas..."
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: AJUDANTE ADICIONAL (SEM PREÇOS) */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-black flex items-center gap-2">
                    <Users className="w-5 h-5 text-black shrink-0" />
                    <span>Deseja ajuda adicional de Ajudantes?</span>
                  </h3>
                  
                  <div className="mt-2 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-blue-950 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      O Motorista já participa do serviço e auxilia no carregamento e descarregamento!
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {/* None */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, extraHelpers: 'none' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.extraHelpers === 'none'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        Nenhum Ajudante adicional
                      </span>
                      {form.extraHelpers === 'none' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.extraHelpers === 'none' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Apenas o Motorista participa do carregamento.
                    </p>
                  </button>

                  {/* 1 Helper */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, extraHelpers: 'one' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.extraHelpers === 'one'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        1 Ajudante adicional
                      </span>
                      {form.extraHelpers === 'one' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.extraHelpers === 'one' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Recomendado para cargas médias ou móveis pesados.
                    </p>
                  </button>

                  {/* 2 Helpers */}
                  <button
                    type="button"
                    onClick={() => setForm(f => ({ ...f, extraHelpers: 'two' }))}
                    className={`p-3.5 sm:p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                      form.extraHelpers === 'two'
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-gray-50 text-black border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm sm:text-base">
                        2 Ajudantes adicionais
                      </span>
                      {form.extraHelpers === 'two' && <Check className="w-5 h-5 text-white shrink-0" />}
                    </div>
                    <p className={`text-xs ${form.extraHelpers === 'two' ? 'text-gray-200' : 'text-gray-600'} leading-normal font-medium`}>
                      Ideal para mudanças completas ou volumes grandes.
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: DIFICULDADE DE ACESSO (SEM PREÇOS) */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-black flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-black shrink-0" />
                    <span>Acesso ao Imóvel, Data e Turno</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                    Informe o tipo de acesso no local de Retirada e Entrega.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Origin Access */}
                  <div>
                    <label htmlFor="origin-access-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1">
                      Acesso na Retirada:
                    </label>
                    <select
                      id="origin-access-select"
                      value={form.accessOrigin}
                      onChange={(e) => setForm(f => ({ ...f, accessOrigin: e.target.value as AccessDifficultyOption }))}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-2.5 sm:p-3 text-sm font-bold focus:border-black focus:bg-white outline-none cursor-pointer shadow-sm"
                    >
                      <option value="ground">Casa / Térreo</option>
                      <option value="elevator">Prédio com elevador</option>
                      <option value="stairs">Prédio sem elevador</option>
                    </select>
                  </div>

                  {/* Destination Access */}
                  <div>
                    <label htmlFor="dest-access-select" className="block text-xs sm:text-sm font-extrabold text-black mb-1">
                      Acesso na Entrega:
                    </label>
                    <select
                      id="dest-access-select"
                      value={form.accessDestination}
                      onChange={(e) => setForm(f => ({ ...f, accessDestination: e.target.value as AccessDifficultyOption }))}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-2.5 sm:p-3 text-sm font-bold focus:border-black focus:bg-white outline-none cursor-pointer shadow-sm"
                    >
                      <option value="ground">Casa / Térreo</option>
                      <option value="elevator">Prédio com elevador</option>
                      <option value="stairs">Prédio sem elevador</option>
                    </select>
                  </div>
                </div>

                {/* Date and Turn Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2.5 border-t border-gray-200">
                  <div>
                    <label htmlFor="simulation-date-input" className="block text-xs sm:text-sm font-extrabold text-black mb-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span>Data Pretendida:</span>
                    </label>
                    <input
                      id="simulation-date-input"
                      type="date"
                      value={form.date}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (!val) {
                          setForm(f => ({ ...f, date: '' }));
                          return;
                        }
                        const selectedDate = new Date(val + 'T00:00:00');
                        const day = selectedDate.getDay(); // 0: Sunday
                        if (day === 0) {
                          alert('Atenção: Não realizamos serviços aos domingos. Atendimento de Segunda a Sexta (07h30 às 18h00) e Sábados (07h30 às 16h00).');
                          setForm(f => ({ ...f, date: '' }));
                        } else {
                          setForm(f => ({ ...f, date: val }));
                        }
                      }}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-2.5 sm:p-3 text-sm font-bold focus:border-black outline-none cursor-pointer shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="simulation-time-input" className="block text-xs sm:text-sm font-extrabold text-black mb-1 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span>Turno Preferencial:</span>
                    </label>
                    <select
                      id="simulation-time-input"
                      value={form.time}
                      onChange={(e) => setForm(f => ({ ...f, time: e.target.value }))}
                      className="w-full bg-gray-50 border-2 border-gray-300 rounded-xl p-2.5 sm:p-3 text-sm font-extrabold text-black focus:border-black outline-none cursor-pointer shadow-sm"
                    >
                      <option value="Manhã">Manhã</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noite">Noite</option>
                    </select>
                  </div>
                </div>

                {/* Institutional Operating Hours & Mandatory Shift Notice Box */}
                <div className="bg-blue-50/90 border-2 border-blue-200 text-blue-950 p-3.5 sm:p-4 rounded-xl space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-extrabold text-sm sm:text-base text-blue-950 border-b border-blue-200/80 pb-1.5">
                    <Info className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Horário Institucional de Atendimento:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-blue-900 font-bold pt-0.5">
                    <div>📅 <strong>Seg a Sex:</strong> 07h30 às 18h00</div>
                    <div>📅 <strong>Sábados:</strong> 07h30 às 16h00</div>
                  </div>
                  <div className="pt-1.5 border-t border-blue-200/80 space-y-1.5 text-blue-950 font-medium leading-normal">
                    <p>
                      ⚠️ <strong>Aviso Importante:</strong> O Turno informado representa apenas sua preferência. O horário exato será combinado pelo WhatsApp.
                    </p>
                    <p>
                      💬 <strong>Horário Diferente:</strong> Se precisar de outro horário, converse com o Motorista no WhatsApp para verificar disponibilidade.
                    </p>
                  </div>
                </div>

                {/* Observations Input */}
                <div>
                  <label htmlFor="simulation-obs-input" className="block text-xs sm:text-sm font-bold text-gray-800 mb-1">
                    Observações Importantes (Opcional):
                  </label>
                  <input
                    id="simulation-obs-input"
                    type="text"
                    value={form.observations}
                    onChange={(e) => setForm(f => ({ ...f, observations: e.target.value }))}
                    placeholder="Ex: Horário de mudança permitido no prédio das 09h às 17h."
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 6: ESTIMATIVA DO ORÇAMENTO (VALOR ESTIMADO + RESUMO + HORÁRIO + AVISOS + BOTÃO WHATSAPP) */}
            {currentStep === 6 && result && (
              <div className="space-y-4 animate-in fade-in duration-300">
                
                {/* 1. Success Banner */}
                <div className="p-3.5 sm:p-4 bg-emerald-50 border-2 border-emerald-300 text-emerald-950 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-extrabold text-base">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg tracking-tight text-emerald-950">
                      Estimativa Gerada com Sucesso!
                    </h3>
                    <p className="text-xs text-emerald-900 mt-0.5 font-medium">
                      Confira a previsão inicial do valor abaixo e confirme os detalhes com o Motorista no WhatsApp.
                    </p>
                  </div>
                </div>

                {/* 2. Previsão Inicial do Valor Estimado */}
                <div className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-xl relative overflow-hidden text-center sm:text-left">
                  <span className="text-xs font-extrabold text-gray-300 uppercase tracking-widest block mb-1">
                    Previsão Inicial do Valor Estimado:
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      R$ {result.totalPrice},00
                    </span>
                    <span className="text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full inline-block self-start">
                      Estimativa Inicial
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 bg-white/10 p-3 rounded-lg border border-white/10 leading-normal font-medium">
                    * Este é apenas um Valor Estimado inicial. O orçamento definitivo será confirmado diretamente com o Motorista pelo WhatsApp.
                  </p>
                </div>

                {/* 3. Resumo dos Dados e Turno Escolhido */}
                <div className="bg-white rounded-xl p-4 sm:p-5 border-2 border-gray-200 space-y-3 text-xs sm:text-sm">
                  <h4 className="font-extrabold text-black text-xs uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center justify-between">
                    <span>Resumo da Solicitação e Turno Escolhido:</span>
                    <span className="text-[10px] text-gray-500 font-bold bg-gray-100 px-2 py-0.5 rounded">Confirmação</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 font-medium">
                    <div>
                      <span className="font-extrabold text-black block">📍 Local de Retirada:</span>
                      <span>{result.originName}</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-black block">🏁 Local de Entrega:</span>
                      <span>{result.destinationName}</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-black block">🚚 Tipo de Mudança:</span>
                      <span>
                        {form.moveType === 'quick' && 'Mudança rápida / Poucos itens'}
                        {form.moveType === 'full_single' && 'Mudança completa (até 1 caminhão)'}
                        {form.moveType === 'multi_trip' && 'Mais de uma viagem'}
                      </span>
                    </div>
                    <div>
                      <span className="font-extrabold text-black block">📅 Data e Turno:</span>
                      <span className="font-extrabold text-black">{form.date ? new Date(form.date + 'T00:00:00').toLocaleDateString('pt-BR') : 'A combinar'} ({form.time})</span>
                    </div>
                  </div>
                </div>

                {/* 4. Horário Institucional de Atendimento */}
                <div className="bg-blue-50/90 border-2 border-blue-200 text-blue-950 p-3.5 sm:p-4 rounded-xl space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-extrabold text-sm text-blue-950 border-b border-blue-200/80 pb-1.5">
                    <Info className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Horário Institucional de Atendimento:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-blue-900 font-bold pt-0.5">
                    <div>📅 <strong>Segunda a Sexta:</strong> das 07h30 às 18h00</div>
                    <div>📅 <strong>Sábado:</strong> das 07h30 às 16h00</div>
                  </div>
                </div>

                {/* 5. Avisos Importantes */}
                <div className="bg-amber-50 border-2 border-amber-300 text-amber-950 p-4 sm:p-5 rounded-xl shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-amber-950 font-medium">
                    <h4 className="font-extrabold text-sm sm:text-base text-amber-950">
                      Aviso Importante sobre a Estimativa e Horário de Atendimento
                    </h4>
                    <p>
                      Este é apenas um Valor Estimado inicial e pode sofrer alterações conforme a análise técnica do serviço. Para confirmar o orçamento definitivo, é indispensável conversar com o Motorista pelo WhatsApp.
                    </p>
                    <p className="pt-1.5 border-t border-amber-200/90 font-bold">
                      ⚠️ O Turno informado representa apenas sua preferência. O horário exato será combinado diretamente com o Motorista pelo WhatsApp.
                    </p>
                    <p>
                      💬 Caso precise de outro horário, entre em contato diretamente com o Motorista pelo WhatsApp.
                    </p>
                    {form.moveType === 'multi_trip' && (
                      <div className="text-xs font-extrabold text-amber-950 pt-1.5 border-t border-amber-300 mt-1 bg-amber-100/80 p-2.5 rounded-lg">
                        ⚠️ <span className="underline">Atenção:</span> Por se tratar de uma Mudança com mais de uma viagem, uma avaliação direta com o Motorista é indispensável para definir o orçamento final.
                      </div>
                    )}
                  </div>
                </div>

                {/* 6. WhatsApp Confirm Action Button */}
                <div className="pt-1 space-y-2">
                  <button
                    type="button"
                    onClick={() => openWhatsApp(result.formattedWhatsAppText)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold py-3.5 px-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer transform hover:-translate-y-0.5"
                    id="simulator-confirm-whatsapp-btn"
                  >
                    <MessageSquare className="w-6 h-6 text-white" />
                    <span>Confirmar orçamento no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-black font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-600" />
                    <span>Simular Nova Estimativa</span>
                  </button>
                </div>

              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep <= 5 && (
              <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 mt-5">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border-2 border-gray-300 text-xs sm:text-sm font-extrabold text-black hover:bg-gray-100 transition-all cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4 text-black" />
                    <span>Voltar</span>
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={isCalculating}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-black text-white text-sm sm:text-base font-extrabold hover:bg-neutral-800 transition-all shadow-md cursor-pointer ml-auto active:scale-[0.99]"
                >
                  {isCalculating ? (
                    <span>Calculando...</span>
                  ) : currentStep === 5 ? (
                    <>
                      <span>Ver Estimativa do Orçamento</span>
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                    </>
                  ) : (
                    <>
                      <span>Avançar</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
