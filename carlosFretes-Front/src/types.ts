export type ZoneType = 'Curitiba' | 'RMC' | 'Litoral e Interior' | 'Cidades Próximas';

export interface LocationOption {
  id: string;
  name: string;
  zone: ZoneType;
  popular?: boolean;
  searchKeywords?: string;
}

export type MoveTypeOption = 'quick' | 'full_single' | 'multi_trip';

export type ExtraHelpersOption = 'none' | 'one' | 'two';

export type AccessDifficultyOption = 'ground' | 'elevator' | 'stairs';

export interface SimulationForm {
  originCity: string;
  originNeighborhood: string;
  originAddress: string;
  destinationCity: string;
  destinationNeighborhood: string;
  destinationAddress: string;
  date: string;
  time: string;
  moveType: MoveTypeOption;
  cargoDescription: string;
  extraHelpers: ExtraHelpersOption;
  accessOrigin: AccessDifficultyOption;
  accessDestination: AccessDifficultyOption;
  observations: string;
}

export interface CalculationResult {
  originPrice: number;
  destinationPrice: number;
  moveTypePrice: number;
  extraHelpersPrice: number;
  accessOriginPrice: number;
  accessDestinationPrice: number;
  totalPrice: number | null;
  requiresManualQuote: boolean;
  originName: string;
  destinationName: string;
  formattedWhatsAppText: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  iconName: string;
  popular?: boolean;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleLocation: string;
  comment: string;
  rating: number;
  date: string;
  serviceType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CoverageAreaItem {
  name: string;
  zone: ZoneType;
  details: string;
  keyNeighborhoodsOrCities: string[];
}
