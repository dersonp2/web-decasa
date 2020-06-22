import { Cliente } from './cliente.module';
import { Municipio } from './municipio.module';
import {Uf} from './uf.module';

export class EnderecoCliente {
  id: number;
  domicilio: boolean;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  complemento: string;
  pontoReferencia: string;
  latGraus: number;
  latMinutos: number;
  latSegundos: number;
  longGraus: number;
  longMinutos: number;
  longSegundos: number;
  municipio: Municipio;
  cliente: Cliente;
  clienteId: number;
  ativo: boolean;


  constructor() {
    this.municipio = new Municipio();
  }
}
