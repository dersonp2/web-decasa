import { Habilitacao } from './habilitacao.module';
export class Profissao {
  id: number;
  descricao: string;
  habilitacoes: Habilitacao[];
  habilitacaoCollection: Habilitacao[];
}
