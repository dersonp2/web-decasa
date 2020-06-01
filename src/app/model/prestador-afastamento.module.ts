import { MotivoAfastamento } from './motivo-afastamento.module';
import { Usuario } from './usuario.module';
export class PrestadorAfastamento {
  id: number;
  dataCadastro: Date;
  inicio: Date;
  fim: Date;
  ativo: boolean;
  motivoAfastamento: MotivoAfastamento;
  usuario: Usuario;
}
