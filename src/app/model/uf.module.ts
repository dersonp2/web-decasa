import { Pais } from './pais.module';

export class Uf {
  id: number;
  nome: string;
  sigla: string;
  pais: Pais;

  constructor() {
    this.pais = new Pais();
  }
}
