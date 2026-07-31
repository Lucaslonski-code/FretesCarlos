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

export const CURITIBA_LOCATIONS: LocationOption[] = [
  // CURITIBA BAIRROS
  { id: 'cba-batel', name: 'Batel, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'batel curitiba centro' },
  { id: 'cba-agua-verde', name: 'Água Verde, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'agua verde curitiba' },
  { id: 'cba-centro', name: 'Centro, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'centro curitiba matriz' },
  { id: 'cba-portao', name: 'Portão, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'portao curitiba' },
  { id: 'cba-santa-felicidade', name: 'Santa Felicidade, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'santa felicidade curitiba' },
  { id: 'cba-cic', name: 'CIC (Cidade Industrial), Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'cic cidade industrial curitiba' },
  { id: 'cba-boqueirao', name: 'Boqueirão, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'boqueirao curitiba' },
  { id: 'cba-cajuru', name: 'Cajuru, Curitiba', zone: 'Curitiba', searchKeywords: 'cajuru curitiba' },
  { id: 'cba-pinheirinho', name: 'Pinheirinho, Curitiba', zone: 'Curitiba', searchKeywords: 'pinheirinho curitiba' },
  { id: 'cba-cabral', name: 'Cabral, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'cabral curitiba' },
  { id: 'cba-juveve', name: 'Juvevê, Curitiba', zone: 'Curitiba', searchKeywords: 'juveve curitiba' },
  { id: 'cba-merces', name: 'Mercês, Curitiba', zone: 'Curitiba', searchKeywords: 'merces curitiba' },
  { id: 'cba-bigorrilho', name: 'Bigorrilho / Champagnat, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'bigorrilho champagnat curitiba' },
  { id: 'cba-capao-raso', name: 'Capão Raso, Curitiba', zone: 'Curitiba', searchKeywords: 'capao raso curitiba' },
  { id: 'cba-sitio-cercado', name: 'Sítio Cercado, Curitiba', zone: 'Curitiba', searchKeywords: 'sitio cercado curitiba' },
  { id: 'cba-ecoville', name: 'Mossunguê / Ecoville, Curitiba', zone: 'Curitiba', popular: true, searchKeywords: 'mossungue ecoville curitiba' }
];
