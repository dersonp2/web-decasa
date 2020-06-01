import { PrestadorResponse } from './prestador-response.module';
import { PagamentoOrcamentoPendente } from '../pagamento-orcamento-pendente.module';
import { ServicoOrcamentoResponse } from './servico-orcamento-response.module';

export class ClienteOrcamento {
  id: number;
  data: string;
  valor: number;
  observacao: string;
  statusOrcamentoId;
  statusOrcamento: string;
  logradouro: string;
  numero: string;
  bairro: string;
  uf: string;
  cidade: string;
  servicosOrcamento: ServicoOrcamentoResponse[];
  pagamento: PagamentoOrcamentoPendente[];
  prestadores: PrestadorResponse[];
}
