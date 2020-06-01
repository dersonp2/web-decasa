import { Banco } from './banco.module';
export class BancoPrestador {
  id: number;
  descricao: string;
  agencia: string;
  conta: string;
  ativo: boolean;
  dataAtivacao: Date;
  dataExclusao: Date;
  banco: Banco;
}
