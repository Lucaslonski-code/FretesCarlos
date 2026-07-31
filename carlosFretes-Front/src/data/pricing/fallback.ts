// Preço padrão (fallback) para cidades sem tabela própria cadastrada ainda (ex.: Palmeira, Castro).
// Usa exatamente a mesma lista genérica que getNeighborhoodsForCity() já retornava como fallback.
export const FALLBACK_PRICING: Record<string, number> = {
  "Centro": 200,
  "Bairro Principal": 200,
  "Zona Residencial": 200,
  "Outro Bairro": 200,
};
