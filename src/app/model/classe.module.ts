import { Grupo } from './grupo.module';

export class Classe {
  id: number;
  descricao: string;
  grupo: Grupo;
  visitaTecnica: boolean;
  valorMinimo: number;
}
