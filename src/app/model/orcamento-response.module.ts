import { Orcamento } from './orcamento.module';
import { UserInformation } from './user-information.module';
import { CustoAdicional } from './custo-adicional.module';
import { Pagamento } from './pagamento.module';
import { PrestadorOrcamento } from './prestador-orcamento.module';
import { HistoricoOrcamento } from './historico-orcamento.module';
import { TipoOrcamento } from './tipo-orcamento.module';
import { EnderecoCliente } from './endereco-cliente.module';
import { Cliente } from './cliente.module';

export class OrcamentoResponse {
  id: number;
  observacao: string;
  orcamento: Orcamento;
}
