import { Servicos } from './servicos';

export interface Grupo {
  id: number;
  descricao: string;
  ativo: boolean;
  servicos: Servicos[];
}
