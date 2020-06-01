import { Status } from './status.module';
import { Usuario } from './usuario.module';
export class StatusPrestador {
  id: number;
  data: Date;
  ativo: boolean;
  observacao: string;
  status: Status;
  usuario: Usuario;
  descricao: string;
}
