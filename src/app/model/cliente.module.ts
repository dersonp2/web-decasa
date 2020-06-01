import { EnderecoCliente } from './endereco-cliente.module';
import { TipoPessoa } from './tipo-pessoa.module';
import { Usuario } from './usuario.module';
import { Uf } from './uf.module';
import { OrgaoExpedidor } from './orgao-expedidor.module';
import { EstadoCivil } from './estado-civil.module';
import { Sexo } from './sexo.module';
export class Cliente {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  cpf: string;
  cnpj: string;
  rg: string;
  dataRg: Date;
  dataCadastro: Date;
  sexo: Sexo;
  estadoCivil: EstadoCivil;
  orgaoExpedidor: OrgaoExpedidor;
  ufRg: Uf;
  usuario: Usuario;
  tipoPessoa: TipoPessoa;
  enderecos: EnderecoCliente[];
  creditoPre: number;
  dataNascimento: Date;
  newPassword: string;
  idConsultor: number;
}
