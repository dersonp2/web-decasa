import {Classe} from './classe.module';
import {UnidadeMedida} from './unidade-medida.module';

export class Servicos {
  id: number;
  descricao: string;
  composicao: string;
  valor: number;
  classe: Classe;
  unidadeMedida: UnidadeMedida;
  nomeImagem: string;
  visitaTecnica: boolean;
}
