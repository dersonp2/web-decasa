import { StatusOrcamento } from './status-orcamento.module';
export class HistoricoOrcamento {
  id: number;
  statusOrcamento: StatusOrcamento;
  data: Date;
  ativo: boolean;
}
