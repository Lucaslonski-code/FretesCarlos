import { SimulationForm, CalculationResult } from '../types';
import { resolveLocationCoordinates } from '../data/curitibaLocations';

export const CONFIG = {
  BASE_PRICE: 220.00, // Mandatory base price (R$ 220,00)
  MOVE_TYPE_PRICES: {
    quick: -40.00,      // Mudança rápida ou poucos itens (-R$ 40,00 aplicado internamente)
    full_single: 0.00,  // Mudança completa (até 1 caminhão cheio)
    multi_trip: 0.00    // Mudança que exige mais de uma viagem (avaliado diretamente)
  },
  EXTRA_HELPERS_PRICES: {
    none: 0.00,   // Nenhum ajudante adicional (apenas o motorista)
    one: 100.00,  // 1 ajudante adicional (+R$ 100,00)
    two: 200.00   // 2 ajudantes adicionais (+R$ 200,00)
  },
  ACCESS_PRICES: {
    ground: 0.00,   // Casa / Térreo / Acesso fácil (R$ 0,00)
    elevator: 20.00, // Prédio com elevador (+R$ 20,00)
    stairs: 40.00    // Prédio sem elevador (+R$ 40,00)
  }
};

/**
 * Calculates the progressive tiered price for kilometers traveled:
 * - Faixa 1 (1º ao 10º km): R$ 6,00 / km
 * - Faixa 2 (11º km em diante): R$ 5,00 / km
 */
export function calculateTieredKmPrice(distanceKm: number): number {
  if (distanceKm <= 0) return 0;

  let totalKmPrice = 0;

  // Faixa 1: do 1º ao 10º KM (R$ 6,00 / km)
  const tier1Km = Math.min(distanceKm, 10);
  totalKmPrice += tier1Km * 6.00;

  // Faixa 2: do 11º KM em diante (R$ 5,00 / km)
  if (distanceKm > 10) {
    const tier2Km = distanceKm - 10;
    totalKmPrice += tier2Km * 5.00;
  }

  return Math.round(totalKmPrice);
}

// Haversine distance calculation formula with road navigation multiplier
function calculateHaversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const directDistance = R * c;

  // Road factor multiplier for urban and metropolitan navigation (~1.25x)
  const roadFactor = directDistance < 5 ? 1.35 : directDistance < 20 ? 1.25 : 1.2;
  const estimatedRoadKm = Math.max(1, directDistance * roadFactor);
  return Math.round(estimatedRoadKm * 10) / 10;
}

export function calculateFreightEstimate(form: SimulationForm): CalculationResult {
  // 1. Resolve Location Names and Coordinates
  let originName = '';
  if (form.originAddress && form.originNeighborhood && form.originCity) {
    originName = `${form.originAddress}, ${form.originNeighborhood} - ${form.originCity}`;
  } else if (form.originNeighborhood && form.originCity) {
    originName = `${form.originNeighborhood} - ${form.originCity}`;
  } else if (form.originCity) {
    originName = form.originCity;
  } else {
    originName = 'Curitiba (Centro)';
  }

  let destinationName = '';
  if (form.destinationAddress && form.destinationNeighborhood && form.destinationCity) {
    destinationName = `${form.destinationAddress}, ${form.destinationNeighborhood} - ${form.destinationCity}`;
  } else if (form.destinationNeighborhood && form.destinationCity) {
    destinationName = `${form.destinationNeighborhood} - ${form.destinationCity}`;
  } else if (form.destinationCity) {
    destinationName = form.destinationCity;
  } else {
    destinationName = 'Curitiba (Batel)';
  }

  // Geographic coordinates resolution
  const originCoords = resolveLocationCoordinates(form.originCity, form.originNeighborhood);
  const destCoords = resolveLocationCoordinates(form.destinationCity, form.destinationNeighborhood);

  const originLat = originCoords.lat;
  const originLng = originCoords.lng;
  const destLat = destCoords.lat;
  const destLng = destCoords.lng;

  const distanceKm = calculateHaversineKm(originLat, originLng, destLat, destLng);

  // Regra de negócio: "Mais de uma viagem" NUNCA tem preço calculado automaticamente.
  // Nesse caso o motorista precisa avaliar diretamente pelo WhatsApp.
  const requiresManualQuote = form.moveType === 'multi_trip';

  // 2. Exact Business Logic Components (só calculados quando NÃO é multi_trip)
  const basePrice = requiresManualQuote ? 0 : CONFIG.BASE_PRICE; // R$ 220,00 base
  const distancePrice = requiresManualQuote ? 0 : calculateTieredKmPrice(distanceKm);
  const moveTypePrice = requiresManualQuote ? 0 : (CONFIG.MOVE_TYPE_PRICES[form.moveType] ?? 0);
  const extraHelpersPrice = requiresManualQuote ? 0 : (CONFIG.EXTRA_HELPERS_PRICES[form.extraHelpers] ?? 0);
  const accessOriginPrice = requiresManualQuote ? 0 : (CONFIG.ACCESS_PRICES[form.accessOrigin] ?? 0);
  const accessDestinationPrice = requiresManualQuote ? 0 : (CONFIG.ACCESS_PRICES[form.accessDestination] ?? 0);

  // 3. Formula: Base (R$ 220,00) + progressive KM + moveType (-40 if quick) + extraHelpers + accessOrigin + accessDestination
  let totalPrice: number | null = null;
  if (!requiresManualQuote) {
    const calculatedTotal = basePrice + distancePrice + moveTypePrice + extraHelpersPrice + accessOriginPrice + accessDestinationPrice;
    totalPrice = Math.max(0, Math.round(calculatedTotal));
  }

  // Labels for WhatsApp text
  const moveTypeLabels: Record<string, string> = {
    quick: 'Mudança Rápida / Poucos Itens',
    full_single: 'Mudança Completa de Residência (até 1 caminhão)',
    multi_trip: 'Mudança de Grande Porte (exige mais de 1 viagem)'
  };

  const extraHelpersLabels: Record<string, string> = {
    none: 'Nenhum ajudante adicional (Apenas motorista)',
    one: '1 Ajudante Adicional',
    two: '2 Ajudantes Adicionais'
  };

  const accessLabels: Record<string, string> = {
    ground: 'Casa / Térreo / Acesso fácil',
    elevator: 'Prédio com elevador',
    stairs: 'Prédio sem elevador'
  };

  const textLines = [
    `🚚 *SOLICITAÇÃO DE ESTIMATIVA DE FRETE / MUDANÇA*`,
    ``,
    `Olá! Fiz a simulação no site e gostaria de conversar com o motorista para confirmar o orçamento:`,
    ``,
    `📍 *Origem:* ${originName}`,
    `🎯 *Destino:* ${destinationName}`,
    `📦 *Tipo de Mudança:* ${moveTypeLabels[form.moveType]}`,
    requiresManualQuote ? `⚠️ *Observação:* Requer avaliação direta do motorista por necessitar de mais de 1 viagem. Nenhum valor foi calculado automaticamente.` : '',
    form.cargoDescription ? `📝 *Descrição dos Itens:* ${form.cargoDescription}` : '',
    `👥 *Ajudantes:* ${extraHelpersLabels[form.extraHelpers]}`,
    `🏠 *Acesso na Retirada:* ${accessLabels[form.accessOrigin]}`,
    `🏁 *Acesso na Entrega:* ${accessLabels[form.accessDestination]}`,
    `📅 *Data Pretendida:* ${form.date || 'A combinar'} (${form.time || 'Horário flexível'})`,
    form.observations ? `ℹ️ *Observações:* ${form.observations}` : '',
    ``,
    requiresManualQuote
      ? `💬 *Este serviço precisa ser avaliado diretamente com o motorista antes de definir o valor.*`
      : `💰 *PREVISÃO INICIAL DE VALOR: R$ ${totalPrice},00*`,
    requiresManualQuote ? '' : `_(Este valor é uma estimativa inicial sujeito a confirmação com o motorista)_`,
    ``,
    `Aguardo seu retorno para confirmar o orçamento definitivo!`
  ].filter(line => Boolean(line) && line.trim() !== '');

  const formattedWhatsAppText = encodeURIComponent(textLines.join('\n'));

  return {
    distanceKm,
    basePrice,
    distancePrice,
    moveTypePrice,
    extraHelpersPrice,
    accessOriginPrice,
    accessDestinationPrice,
    totalPrice,
    requiresManualQuote,
    originName,
    destinationName,
    formattedWhatsAppText
  };
}
