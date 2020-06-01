import { Profissao } from './profissao.module';
import { Prestador } from './prestador.module';

export class ProfissaoPrestador {
  id: number;
  experiencia: number;
  cursoTecnico: boolean;
  observacao: string;
  dataExclusao: Date;
  codUsuarioExclusao: number;
  profissao: Profissao;
  prestador: Prestador;
}
