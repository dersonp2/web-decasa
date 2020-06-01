import { ServicosOrcamento } from './servico-orcamento.module';
import { Prestador } from './prestador.module';
export class PrestadorOrcamento {
  id: number;
  prestador: Prestador;
  servicosOrcamentos: ServicosOrcamento[];
  solicitacaoInicio: Date;
  solicitacaoEncerramento: Date;
}
