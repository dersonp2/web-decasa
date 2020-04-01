import { UnidadeMedida } from './unidadeMedida';
import { Classe } from './classe';
export interface Servicos {
  id: number;
  descricao: string;
  composicao: string;
  valor: number;
  classe: Classe;
  unidadeMedida: UnidadeMedida;
  nomeImagem: string;
  visitaTecnica: boolean;
}
