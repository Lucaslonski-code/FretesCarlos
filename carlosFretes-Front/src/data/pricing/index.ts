import { CURITIBA_PRICING } from "./curitiba";
import { COLOMBO_PRICING } from "./colombo";
import { SAO_JOSE_DOS_PINHAIS_PRICING } from "./saojosedospinhais";
import { PINHAIS_PRICING } from "./pinhais";
import { ARAUCARIA_PRICING } from "./araucaria";
import { FAZENDA_RIO_GRANDE_PRICING } from "./fazendariogrande";
import { CAMPO_LARGO_PRICING } from "./campolargo";
import { ALMIRANTE_TAMANDARE_PRICING } from "./almirantetamandare";
import { PIRAQUARA_PRICING } from "./piraquara";
import { QUATRO_BARRAS_PRICING } from "./quatrobarras";
import { CAMPINA_GRANDE_DO_SUL_PRICING } from "./campinagrandedosul";
import { CAMPO_MAGRO_PRICING } from "./campomagro";
import { MANDIRITUBA_PRICING } from "./mandirituba";
import { LAPA_PRICING } from "./lapa";
import { BALSA_NOVA_PRICING } from "./balsanova";
import { CONTENDA_PRICING } from "./contenda";
import { QUITANDINHA_PRICING } from "./quitandinha";
import { RIO_BRANCO_DO_SUL_PRICING } from "./riobrancodosul";
import { ITAPERUCU_PRICING } from "./itaperucu";
import { BOCAIUVA_DO_SUL_PRICING } from "./bocaiuvadosul";
import { TIJUCAS_DO_SUL_PRICING } from "./tijucasdosul";
import { AGUDOS_DO_SUL_PRICING } from "./agudosdosul";
import { PIEN_PRICING } from "./pien";
import { RIO_NEGRO_PRICING } from "./rionegro";
import { CAMPO_DO_TENENTE_PRICING } from "./campodotenente";
import { CERRO_AZUL_PRICING } from "./cerroazul";
import { ADRIANOPOLIS_PRICING } from "./adrianopolis";
import { DOUTOR_ULYSSES_PRICING } from "./doutorulysses";
import { TUNAS_DO_PARANA_PRICING } from "./tunasdoparana";
import { PARANAGUA_PRICING } from "./paranagua";
import { MATINHOS_PRICING } from "./matinhos";
import { GUARATUBA_PRICING } from "./guaratuba";
import { PONTA_GROSSA_PRICING } from "./pontagrossa";
import { MORRETES_PRICING } from "./morretes";
import { ANTONINA_PRICING } from "./antonina";
import { FALLBACK_PRICING } from "./fallback";

/**
 * PRICING reúne a tabela de preços por bairro de cada cidade atendida.
 * As chaves seguem exatamente o mesmo padrão de normalização (minúsculo, sem acento-safe)
 * já usado por CITY_NEIGHBORHOODS_MAP em src/data/curitibaLocations.ts, garantindo
 * que cidade e bairros exibidos no formulário sempre tenham uma tabela correspondente aqui.
 *
 * IMPORTANTE: todos os valores estão temporariamente fixados em R$ 200,00.
 * Os valores reais serão definidos manualmente, bairro a bairro, depois desta migração.
 */
export const PRICING: Record<string, Record<string, number>> = {
  "curitiba": CURITIBA_PRICING,
  "colombo": COLOMBO_PRICING,
  "são josé dos pinhais": SAO_JOSE_DOS_PINHAIS_PRICING,
  "pinhais": PINHAIS_PRICING,
  "araucária": ARAUCARIA_PRICING,
  "fazenda rio grande": FAZENDA_RIO_GRANDE_PRICING,
  "campo largo": CAMPO_LARGO_PRICING,
  "almirante tamandaré": ALMIRANTE_TAMANDARE_PRICING,
  "piraquara": PIRAQUARA_PRICING,
  "quatro barras": QUATRO_BARRAS_PRICING,
  "campina grande do sul": CAMPINA_GRANDE_DO_SUL_PRICING,
  "campo magro": CAMPO_MAGRO_PRICING,
  "mandirituba": MANDIRITUBA_PRICING,
  "lapa": LAPA_PRICING,
  "balsa nova": BALSA_NOVA_PRICING,
  "contenda": CONTENDA_PRICING,
  "quitandinha": QUITANDINHA_PRICING,
  "rio branco do sul": RIO_BRANCO_DO_SUL_PRICING,
  "itaperuçu": ITAPERUCU_PRICING,
  "bocaiúva do sul": BOCAIUVA_DO_SUL_PRICING,
  "tijucas do sul": TIJUCAS_DO_SUL_PRICING,
  "agudos do sul": AGUDOS_DO_SUL_PRICING,
  "piên": PIEN_PRICING,
  "rio negro": RIO_NEGRO_PRICING,
  "campo do tenente": CAMPO_DO_TENENTE_PRICING,
  "cerro azul": CERRO_AZUL_PRICING,
  "adrianópolis": ADRIANOPOLIS_PRICING,
  "doutor ulysses": DOUTOR_ULYSSES_PRICING,
  "tunas do paraná": TUNAS_DO_PARANA_PRICING,
  "paranaguá (litoral)": PARANAGUA_PRICING,
  "matinhos / caiobá": MATINHOS_PRICING,
  "guaratuba": GUARATUBA_PRICING,
  "ponta grossa": PONTA_GROSSA_PRICING,
  "morretes": MORRETES_PRICING,
  "antonina": ANTONINA_PRICING,
};

/**
 * Retorna a tabela de preços (bairro -> valor) da cidade informada.
 * Usa o mesmo algoritmo de correspondência (normalização + substring match)
 * já usado por getNeighborhoodsForCity, para que cidade e preço nunca fiquem
 * dessincronizados. Cidades sem tabela própria caem no FALLBACK_PRICING.
 */
export function getPricingTableForCity(cityName: string): Record<string, number> {
  if (!cityName) return FALLBACK_PRICING;
  const normalized = cityName.toLowerCase().trim();

  for (const [key, table] of Object.entries(PRICING)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return table;
    }
  }

  return FALLBACK_PRICING;
}

/**
 * Retorna o preço fixo (R$) cadastrado para o bairro informado, dentro da cidade informada.
 * Caso o bairro não seja encontrado na tabela da cidade (não deveria ocorrer, já que o
 * formulário só permite selecionar bairros da própria lista), retorna 200 como valor
 * seguro — o mesmo valor temporário usado em toda a tabela atual.
 */
export function getNeighborhoodPrice(cityName: string, neighborhoodName: string): number {
  const table = getPricingTableForCity(cityName);
  const bairro = (neighborhoodName || "").trim();

  if (Object.prototype.hasOwnProperty.call(table, bairro)) {
    return table[bairro];
  }

  return 200;
}
