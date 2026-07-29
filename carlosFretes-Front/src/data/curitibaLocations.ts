import { LocationOption } from '../types';

export interface CityOption {
  id: string;
  name: string;
  zone: 'Curitiba' | 'RMC' | 'Litoral e Interior';
  popular?: boolean;
}

export const CITIES_LIST: CityOption[] = [
  // CAPITAL
  { id: 'city-curitiba', name: 'Curitiba', zone: 'Curitiba', popular: true },

  // TODAS AS 29 CIDADES OFICIAIS DA REGIÃO METROPOLITANA DE CURITIBA (RMC)
  { id: 'city-adrianopolis', name: 'Adrianópolis', zone: 'RMC' },
  { id: 'city-agudos-do-sul', name: 'Agudos do Sul', zone: 'RMC' },
  { id: 'city-almirante-tamandare', name: 'Almirante Tamandaré', zone: 'RMC', popular: true },
  { id: 'city-araucaria', name: 'Araucária', zone: 'RMC', popular: true },
  { id: 'city-balsa-nova', name: 'Balsa Nova', zone: 'RMC' },
  { id: 'city-bocaiuva-do-sul', name: 'Bocaiúva do Sul', zone: 'RMC' },
  { id: 'city-campina-grande-sul', name: 'Campina Grande do Sul', zone: 'RMC', popular: true },
  { id: 'city-campo-do-tenente', name: 'Campo do Tenente', zone: 'RMC' },
  { id: 'city-campo-largo', name: 'Campo Largo', zone: 'RMC', popular: true },
  { id: 'city-campo-magro', name: 'Campo Magro', zone: 'RMC', popular: true },
  { id: 'city-cerro-azul', name: 'Cerro Azul', zone: 'RMC' },
  { id: 'city-colombo', name: 'Colombo', zone: 'RMC', popular: true },
  { id: 'city-contenda', name: 'Contenda', zone: 'RMC' },
  { id: 'city-doutor-ulysses', name: 'Doutor Ulysses', zone: 'RMC' },
  { id: 'city-fazenda-rio-grande', name: 'Fazenda Rio Grande', zone: 'RMC', popular: true },
  { id: 'city-itaperucu', name: 'Itaperuçu', zone: 'RMC' },
  { id: 'city-lapa', name: 'Lapa', zone: 'RMC', popular: true },
  { id: 'city-mandirituba', name: 'Mandirituba', zone: 'RMC' },
  { id: 'city-pien', name: 'Piên', zone: 'RMC' },
  { id: 'city-pinhais', name: 'Pinhais', zone: 'RMC', popular: true },
  { id: 'city-piraquara', name: 'Piraquara', zone: 'RMC', popular: true },
  { id: 'city-quatro-barras', name: 'Quatro Barras', zone: 'RMC', popular: true },
  { id: 'city-quitandinha', name: 'Quitandinha', zone: 'RMC' },
  { id: 'city-rio-branco-sul', name: 'Rio Branco do Sul', zone: 'RMC' },
  { id: 'city-rio-negro', name: 'Rio Negro', zone: 'RMC' },
  { id: 'city-sao-jose-dos-pinhais', name: 'São José dos Pinhais', zone: 'RMC', popular: true },
  { id: 'city-tijucas-do-sul', name: 'Tijucas do Sul', zone: 'RMC' },
  { id: 'city-tunas-do-parana', name: 'Tunas do Paraná', zone: 'RMC' },

  // CIDADES PRÓXIMAS / LITORAL
  { id: 'city-paranagua', name: 'Paranaguá (Litoral)', zone: 'Litoral e Interior', popular: true },
  { id: 'city-matinhos', name: 'Matinhos / Caiobá', zone: 'Litoral e Interior', popular: true },
  { id: 'city-guaratuba', name: 'Guaratuba', zone: 'Litoral e Interior', popular: true },
  { id: 'city-morretes', name: 'Morretes', zone: 'Litoral e Interior' },
  { id: 'city-antonina', name: 'Antonina', zone: 'Litoral e Interior' },
  { id: 'city-ponta-grossa', name: 'Ponta Grossa', zone: 'Litoral e Interior', popular: true },
  { id: 'city-palmeira', name: 'Palmeira', zone: 'Litoral e Interior' },
  { id: 'city-castro', name: 'Castro', zone: 'Litoral e Interior' }
];

export const CITY_NEIGHBORHOODS_MAP: Record<string, string[]> = {
  'curitiba': [
    'Centro', 'Batel', 'Água Verde', 'Portão', 'Santa Felicidade', 'CIC (Cidade Industrial)', 'Boqueirão', 
    'Cajuru', 'Pinheirinho', 'Cabral', 'Juvevê', 'Mercês', 'Bigorrilho / Champagnat', 'Alto da XV', 'Rebouças', 
    'Capão Raso', 'Novo Mundo', 'Hauer', 'Xaxim', 'Sítio Cercado', 'Campo Comprido', 'Mossunguê / Ecoville', 
    'Bairro Alto', 'Tarumã', 'Jardim das Américas', 'Uberaba', 'Santa Cândida', 'Boa Vista', 'Pilarzinho', 
    'São Lourenço', 'Ahú', 'Tatuquara', 'Umbará', 'Jardim Botânico', 'Prado Velho', 'Cristo Rei', 'Hugo Lange', 
    'Jardim Social', 'Atuba', 'Bacacheri', 'Tingui', 'Abranches', 'Barreirinha', 'Cascatinha', 'São João', 
    'Lamenha Pequena', 'São Braz', 'Santo Inácio', 'Augusta', 'Riviera', 'São Miguel', 'Ganchinho', 
    'Alto Boqueirão', 'Campo de Santana', 'Parolin', 'Fazendinha', 'Lindóia', 'Vila Izabel', 'Seminário', 
    'Campina do Siqueira', 'Orleans', 'Centro Cívico', 'Guabirotuba', 'Fanny', 'Taboão', 'Vista Alegre', 'Butiatuvinha'
  ],
  'colombo': [
    'Maracanã', 'Guaraituba', 'Roça Grande', 'Alto da Cruz', 'Campo Pequeno', 'Osasco', 'Mauá', 'Centro', 
    'Arruda', 'Jardim Osasco', 'São Gabriel', 'Rio Verde', 'Atuba Colombo', 'Fátima', 'Paloma', 'Jardim Monza', 
    'Santa Tereza', 'Parque Embu'
  ],
  'são josé dos pinhais': [
    'Centro', 'Afonso Pena', 'Boneca do Iguaçu', 'Guatupê', 'Borda do Campo', 'São Pedro', 'Costeira', 
    'Parque da Fonte', 'Cidade Jardim', 'Pedro Moro', 'Iná', 'Ouro Fino', 'Quississana', 'Rio Pequeno', 
    'Aristocrata', 'Cristal', 'Academia', 'Barro Preto', 'Roseira', 'Contenda SJP'
  ],
  'pinhais': [
    'Centro', 'Emboial', 'Atuba Pinhais', 'Estância Pinhais', 'Pineville', 'Vargem Grande', 'Weissópolis', 
    'Emiliano Perneta', 'Jardim Cláudia', 'Maria Antonieta', 'Alto Tarumã', 'Parque das Águas'
  ],
  'araucária': [
    'Centro', 'Costeira', 'Iguaçu', 'Campina da Barra', 'Estação', 'Porto Laranjeiras', 'Cachoeira', 
    'Tindiquera', 'Passaúna', 'Fazenda Velha', 'Sabiá', 'Chapada', 'Barigui', 'Capela Velha'
  ],
  'fazenda rio grande': [
    'Centro', 'Eucaliptos', 'Gralha Azul', 'Nações', 'Estados', 'Iguaçu', 'Santa Teresinha', 'Pioneer', 
    'Green Field', 'Passo da Pátria', 'Nações II'
  ],
  'campo largo': [
    'Centro', 'Rondinha', 'Itaqui', 'Água Clara', 'Vila Bancária', 'Ferrari', 'Bom Jesus', 'Bugre', 
    'Bateias', 'Partenope', 'Moradias Bom Jesus', 'Popular'
  ],
  'almirante tamandaré': [
    'Centro', 'Cachoeira', 'Lamenha Grande', 'Tanguá', 'Prado', 'Jardim Gramados', 'Graziela', 'São Jorge', 
    'Tranqueira', 'Bonfim', 'Parque São Cristóvão'
  ],
  'piraquara': [
    'Centro', 'Guarituba', 'Vila Macedo', 'São Cristóvão', 'Jardim Primavera', 'Planta Deodoro', 
    'Recreio da Serra', 'Guarituba Pequeno', 'Bela Vista'
  ],
  'quatro barras': [
    'Centro', 'Borda do Campo', 'Jardim Menino Deus', 'Graciosa', 'Itupava', 'Humaitá', 'Colônia Maria José'
  ],
  'campina grande do sul': [
    'Centro', 'Jardim Paulista', 'Eugênia Maria', 'Timbu', 'Terra Boa', 'Ribeirão Grande', 'Jurema'
  ],
  'campo magro': [
    'Centro', 'Samambaia', 'Passaúna', 'Jardim Viviane', 'Boa Vista', 'Figueira'
  ],
  'mandirituba': [
    'Centro', 'Areia Branca', 'Lagoinha', 'Chaxim', 'Queimados'
  ],
  'lapa': [
    'Centro', 'Lapa Histórica', 'Mariental', 'São João', 'Feixo', 'Cidade Nova'
  ],
  'balsa nova': [
    'Centro', 'Bugre', 'São Luiz do Purunã', 'Serrinha'
  ],
  'contenda': [
    'Centro', 'Serrinha', 'Catanduvas', 'Pepire'
  ],
  'quitandinha': [
    'Centro', 'Doce Grande', 'Ribeirão', 'Pangaré'
  ],
  'rio branco do sul': [
    'Centro', 'Papanduva', 'Nodari', 'Vila Velha', 'Santo Antônio'
  ],
  'itaperuçu': [
    'Centro', 'São José', 'Butieirinho', 'Jardim Saquarema'
  ],
  'bocaiúva do sul': [
    'Centro', 'Vila Planalto', 'Terra Boa'
  ],
  'tijucas do sul': [
    'Centro', 'Lagoinha', 'Tabatinga', 'Campina'
  ],
  'agudos do sul': [
    'Centro', 'Palmitos', 'Leão'
  ],
  'piên': [
    'Centro', 'Trigolândia', 'Avencal'
  ],
  'rio negro': [
    'Centro', 'Estação', 'Bom Jesus', 'Passa Três'
  ],
  'campo do tenente': [
    'Centro', 'Serrinha', 'Lageado'
  ],
  'cerro azul': [
    'Centro', 'Barra do Rocha'
  ],
  'adrianópolis': [
    'Centro', 'Vila Velha'
  ],
  'doutor ulysses': [
    'Centro'
  ],
  'tunas do paraná': [
    'Centro'
  ],
  'paranaguá (litoral)': [
    'Centro', 'Campo Grande', 'Costeira', 'Alexandra', 'Nilson Neves', 'Jardim Eldorado', 'Ilha dos Valadares', 'Estradinha'
  ],
  'matinhos / caiobá': [
    'Caiobá', 'Matinhos Centro', 'Riviera', 'Sertãozinho', 'Flamingo', 'Tabuleiro', 'Bom Retiro'
  ],
  'guaratuba': [
    'Centro', 'Brejatuba', 'Eliana', 'Piçarras', 'Coroados', 'Barra do Saí'
  ],
  'ponta grossa': [
    'Centro', 'Oficinas', 'Uvaranas', 'Nova Rússia', 'Estrela', 'Jardim Carvalho', 'Contorno', 'Olarias'
  ],
  'morretes': [
    'Centro Histórico', 'Porto de Cima', 'Vila das Flores'
  ],
  'antonina': [
    'Centro Histórico', 'Batel Antonina', 'Penha'
  ]
};

export function getNeighborhoodsForCity(cityName: string): string[] {
  if (!cityName) return [];
  const normalized = cityName.toLowerCase().trim();
  
  // Exact or partial key match
  for (const [key, list] of Object.entries(CITY_NEIGHBORHOODS_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return list;
    }
  }

  // Default fallback list for any unlisted town
  return ['Centro', 'Bairro Principal', 'Zona Residencial', 'Outro Bairro'];
}

export const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'curitiba': { lat: -25.4284, lng: -49.2733 },
  'adrianópolis': { lat: -24.6572, lng: -48.9908 },
  'agudos do sul': { lat: -25.9933, lng: -49.3350 },
  'almirante tamandaré': { lat: -25.3214, lng: -49.3003 },
  'araucária': { lat: -25.5936, lng: -49.4103 },
  'balsa nova': { lat: -25.5847, lng: -49.6361 },
  'bocaiúva do sul': { lat: -25.2064, lng: -49.1158 },
  'campina grande do sul': { lat: -25.3056, lng: -49.0558 },
  'campo do tenente': { lat: -25.9814, lng: -49.6833 },
  'campo largo': { lat: -25.4597, lng: -49.5275 },
  'campo magro': { lat: -25.3689, lng: -49.4508 },
  'cerro azul': { lat: -24.8236, lng: -49.2608 },
  'colombo': { lat: -25.2917, lng: -49.2242 },
  'contenda': { lat: -25.6764, lng: -49.5358 },
  'doutor ulysses': { lat: -24.5667, lng: -49.4167 },
  'fazenda rio grande': { lat: -25.6608, lng: -49.3061 },
  'itaperuçu': { lat: -25.2214, lng: -49.3486 },
  'lapa': { lat: -25.7686, lng: -49.7161 },
  'mandirituba': { lat: -25.7789, lng: -49.3258 },
  'piên': { lat: -26.0989, lng: -49.4294 },
  'pinhais': { lat: -25.4428, lng: -49.1919 },
  'piraquara': { lat: -25.4431, lng: -49.0622 },
  'quatro barras': { lat: -25.3658, lng: -49.0767 },
  'quitandinha': { lat: -25.8714, lng: -49.5008 },
  'rio branco do sul': { lat: -25.1914, lng: -49.3131 },
  'rio negro': { lat: -26.1039, lng: -49.7978 },
  'são josé dos pinhais': { lat: -25.5347, lng: -49.2064 },
  'tijucas do sul': { lat: -25.9281, lng: -49.0989 },
  'tunas do paraná': { lat: -24.9739, lng: -49.0856 },
  'paranaguá': { lat: -25.5203, lng: -48.5092 },
  'matinhos': { lat: -25.8175, lng: -48.5428 },
  'caiobá': { lat: -25.8175, lng: -48.5428 },
  'guaratuba': { lat: -25.8828, lng: -48.5756 },
  'morretes': { lat: -25.4789, lng: -48.8344 },
  'antonina': { lat: -25.4286, lng: -48.7125 },
  'ponta grossa': { lat: -25.0950, lng: -50.1619 },
  'palmeira': { lat: -25.4217, lng: -50.0069 },
  'castro': { lat: -24.7911, lng: -50.0119 }
};

export const NEIGHBORHOOD_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'batel': { lat: -25.4431, lng: -49.2828 },
  'água verde': { lat: -25.4522, lng: -49.2789 },
  'agua verde': { lat: -25.4522, lng: -49.2789 },
  'centro': { lat: -25.4284, lng: -49.2733 },
  'portão': { lat: -25.4682, lng: -49.2941 },
  'portao': { lat: -25.4682, lng: -49.2941 },
  'santa felicidade': { lat: -25.4022, lng: -49.3328 },
  'cic': { lat: -25.5050, lng: -49.3380 },
  'cidade industrial': { lat: -25.5050, lng: -49.3380 },
  'boqueirão': { lat: -25.5080, lng: -49.2410 },
  'boqueirao': { lat: -25.5080, lng: -49.2410 },
  'cajuru': { lat: -25.4580, lng: -49.2150 },
  'pinheirinho': { lat: -25.5280, lng: -49.2920 },
  'cabral': { lat: -25.4080, lng: -49.2550 },
  'juvevê': { lat: -25.4140, lng: -49.2580 },
  'juveve': { lat: -25.4140, lng: -49.2580 },
  'mercês': { lat: -25.4260, lng: -49.2920 },
  'merces': { lat: -25.4260, lng: -49.2920 },
  'bigorrilho': { lat: -25.4330, lng: -49.2980 },
  'champagnat': { lat: -25.4330, lng: -49.2980 },
  'capão raso': { lat: -25.4920, lng: -49.2980 },
  'capao raso': { lat: -25.4920, lng: -49.2980 },
  'sítio cercado': { lat: -25.5390, lng: -49.2680 },
  'sitio cercado': { lat: -25.5390, lng: -49.2680 },
  'ecoville': { lat: -25.4410, lng: -49.3280 },
  'mossunguê': { lat: -25.4410, lng: -49.3280 },
  'rebouças': { lat: -25.4415, lng: -49.2675 },
  'reboucas': { lat: -25.4415, lng: -49.2675 },
  'alto da xv': { lat: -25.4278, lng: -49.2567 },
  'bairro alto': { lat: -25.4089, lng: -49.2089 },
  'santa cândida': { lat: -25.3789, lng: -49.2311 },
  'boa vista': { lat: -25.3889, lng: -49.2489 },
  'tatuquara': { lat: -25.5789, lng: -49.3289 },
  'umbará': { lat: -25.5889, lng: -49.2689 },
  'jardim botânico': { lat: -25.4433, lng: -49.2400 },
  'jardim botanico': { lat: -25.4433, lng: -49.2400 },
  'hauer': { lat: -25.4789, lng: -49.2489 },
  'xaxim': { lat: -25.5089, lng: -49.2689 },
  'novo mundo': { lat: -25.4889, lng: -49.2889 },
  'tarumã': { lat: -25.4289, lng: -49.2289 },
  'taruma': { lat: -25.4289, lng: -49.2289 },

  // Regional Matriz
  'ahú': { lat: -25.4050, lng: -49.2600 },
  'ahu': { lat: -25.4050, lng: -49.2600 },
  'centro cívico': { lat: -25.4150, lng: -49.2700 },
  'centro civico': { lat: -25.4150, lng: -49.2700 },
  'cristo rei': { lat: -25.4180, lng: -49.2500 },
  'hugo lange': { lat: -25.4100, lng: -49.2500 },
  'jardim social': { lat: -25.3980, lng: -49.2470 },
  'prado velho': { lat: -25.4490, lng: -49.2600 },

  // Regional Boa Vista
  'abranches': { lat: -25.3700, lng: -49.2550 },
  'atuba': { lat: -25.3650, lng: -49.2100 },
  'bacacheri': { lat: -25.3930, lng: -49.2420 },
  'barreirinha': { lat: -25.3830, lng: -49.2280 },
  'pilarzinho': { lat: -25.3930, lng: -49.2870 },
  'são lourenço': { lat: -25.3750, lng: -49.2350 },
  'sao lourenco': { lat: -25.3750, lng: -49.2350 },
  'taboão': { lat: -25.3600, lng: -49.2450 },
  'taboao': { lat: -25.3600, lng: -49.2450 },
  'tingui': { lat: -25.3860, lng: -49.2620 },

  // Regional Boqueirão
  'alto boqueirão': { lat: -25.5350, lng: -49.2280 },
  'alto boqueirao': { lat: -25.5350, lng: -49.2280 },

  // Regional Cajuru
  'guabirotuba': { lat: -25.4650, lng: -49.2440 },
  'jardim das américas': { lat: -25.4520, lng: -49.2330 },
  'jardim das americas': { lat: -25.4520, lng: -49.2330 },
  'uberaba': { lat: -25.4750, lng: -49.2150 },

  // Regional CIC
  'augusta': { lat: -25.4950, lng: -49.3550 },
  'riviera': { lat: -25.5150, lng: -49.3600 },
  'são miguel': { lat: -25.5250, lng: -49.3450 },
  'sao miguel': { lat: -25.5250, lng: -49.3450 },

  // Regional Fazendinha/Portão
  'fazendinha': { lat: -25.4750, lng: -49.3150 },
  'parolin': { lat: -25.4600, lng: -49.2830 },
  'seminário': { lat: -25.4550, lng: -49.2700 },
  'seminario': { lat: -25.4550, lng: -49.2700 },
  'vila izabel': { lat: -25.4600, lng: -49.2750 },

  // Regional Pinheirinho
  'fanny': { lat: -25.5030, lng: -49.2830 },
  'lindóia': { lat: -25.4950, lng: -49.2870 },
  'lindoia': { lat: -25.4950, lng: -49.2870 },

  // Regional Santa Felicidade
  'butiatuvinha': { lat: -25.3980, lng: -49.3650 },
  'campina do siqueira': { lat: -25.4280, lng: -49.3100 },
  'campo comprido': { lat: -25.4550, lng: -49.3450 },
  'cascatinha': { lat: -25.3850, lng: -49.3200 },
  'lamenha pequena': { lat: -25.3600, lng: -49.3750 },
  'orleans': { lat: -25.4100, lng: -49.3450 },
  'santo inácio': { lat: -25.4650, lng: -49.3500 },
  'santo inacio': { lat: -25.4650, lng: -49.3500 },
  'são braz': { lat: -25.3900, lng: -49.3200 },
  'sao braz': { lat: -25.3900, lng: -49.3200 },
  'são joão': { lat: -25.4050, lng: -49.3500 },
  'sao joao': { lat: -25.4050, lng: -49.3500 },
  'vista alegre': { lat: -25.4180, lng: -49.3050 },

  // Regional Bairro Novo
  'campo de santana': { lat: -25.5700, lng: -49.2550 },
  'ganchinho': { lat: -25.5950, lng: -49.2450 }
};

export function resolveLocationCoordinates(cityName: string, neighborhoodName: string): { lat: number; lng: number } {
  const normCity = (cityName || '').toLowerCase().trim();
  const normBairro = (neighborhoodName || '').toLowerCase().trim();

  if (normCity.includes('curitiba') || normCity === '') {
    // 1. Exact match first (most reliable)
    if (Object.prototype.hasOwnProperty.call(NEIGHBORHOOD_COORDINATES, normBairro)) {
      return NEIGHBORHOOD_COORDINATES[normBairro];
    }

    // 2. Partial match fallback: pick the LONGEST matching key so that
    //    specific neighborhoods (e.g. "centro cívico", "alto boqueirão")
    //    are never shadowed by shorter, unrelated keys (e.g. "centro", "boqueirão").
    let bestKey: string | null = null;
    for (const key of Object.keys(NEIGHBORHOOD_COORDINATES)) {
      if (normBairro.includes(key) || key.includes(normBairro)) {
        if (!bestKey || key.length > bestKey.length) {
          bestKey = key;
        }
      }
    }
    if (bestKey) {
      return NEIGHBORHOOD_COORDINATES[bestKey];
    }
  }

  for (const [key, coords] of Object.entries(CITY_COORDINATES)) {
    if (normCity.includes(key) || key.includes(normCity)) {
      return coords;
    }
  }

  return { lat: -25.4284, lng: -49.2733 };
}

export const CURITIBA_LOCATIONS: LocationOption[] = [
  // CURITIBA BAIRROS
  { id: 'cba-batel', name: 'Batel, Curitiba', zone: 'Curitiba', lat: -25.4431, lng: -49.2828, popular: true, searchKeywords: 'batel curitiba centro' },
  { id: 'cba-agua-verde', name: 'Água Verde, Curitiba', zone: 'Curitiba', lat: -25.4522, lng: -49.2789, popular: true, searchKeywords: 'agua verde curitiba' },
  { id: 'cba-centro', name: 'Centro, Curitiba', zone: 'Curitiba', lat: -25.4284, lng: -49.2733, popular: true, searchKeywords: 'centro curitiba matriz' },
  { id: 'cba-portao', name: 'Portão, Curitiba', zone: 'Curitiba', lat: -25.4682, lng: -49.2941, popular: true, searchKeywords: 'portao curitiba' },
  { id: 'cba-santa-felicidade', name: 'Santa Felicidade, Curitiba', zone: 'Curitiba', lat: -25.4022, lng: -49.3328, popular: true, searchKeywords: 'santa felicidade curitiba' },
  { id: 'cba-cic', name: 'CIC (Cidade Industrial), Curitiba', zone: 'Curitiba', lat: -25.5050, lng: -49.3380, popular: true, searchKeywords: 'cic cidade industrial curitiba' },
  { id: 'cba-boqueirao', name: 'Boqueirão, Curitiba', zone: 'Curitiba', lat: -25.5080, lng: -49.2410, popular: true, searchKeywords: 'boqueirao curitiba' },
  { id: 'cba-cajuru', name: 'Cajuru, Curitiba', zone: 'Curitiba', lat: -25.4580, lng: -49.2150, searchKeywords: 'cajuru curitiba' },
  { id: 'cba-pinheirinho', name: 'Pinheirinho, Curitiba', zone: 'Curitiba', lat: -25.5280, lng: -49.2920, searchKeywords: 'pinheirinho curitiba' },
  { id: 'cba-cabral', name: 'Cabral, Curitiba', zone: 'Curitiba', lat: -25.4080, lng: -49.2550, popular: true, searchKeywords: 'cabral curitiba' },
  { id: 'cba-juveve', name: 'Juvevê, Curitiba', zone: 'Curitiba', lat: -25.4140, lng: -49.2580, searchKeywords: 'juveve curitiba' },
  { id: 'cba-merces', name: 'Mercês, Curitiba', zone: 'Curitiba', lat: -25.4260, lng: -49.2920, searchKeywords: 'merces curitiba' },
  { id: 'cba-bigorrilho', name: 'Bigorrilho / Champagnat, Curitiba', zone: 'Curitiba', lat: -25.4330, lng: -49.2980, popular: true, searchKeywords: 'bigorrilho champagnat curitiba' },
  { id: 'cba-capao-raso', name: 'Capão Raso, Curitiba', zone: 'Curitiba', lat: -25.4920, lng: -49.2980, searchKeywords: 'capao raso curitiba' },
  { id: 'cba-sitio-cercado', name: 'Sítio Cercado, Curitiba', zone: 'Curitiba', lat: -25.5390, lng: -49.2680, searchKeywords: 'sitio cercado curitiba' },
  { id: 'cba-ecoville', name: 'Mossunguê / Ecoville, Curitiba', zone: 'Curitiba', lat: -25.4410, lng: -49.3280, popular: true, searchKeywords: 'mossungue ecoville curitiba' }
];
