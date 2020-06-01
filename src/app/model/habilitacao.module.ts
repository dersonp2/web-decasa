import { Profissao } from './profissao.module';
import { Classe } from './classe.module';
export class Habilitacao {
  id: number;
  classe: Classe;
  profissao: Profissao;
}
