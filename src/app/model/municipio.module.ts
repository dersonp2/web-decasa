import {Uf} from './uf.module';

export class Municipio {
  id: number;
  nome: string;
  codigoIbge: number;
  ativo: boolean;
  uf: Uf;
}
