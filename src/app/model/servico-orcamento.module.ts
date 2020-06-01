import { Servico } from './servico.module';
import { Classe } from './classe.module';
import { UnidadeMedida } from './unidade-medida.module';

export class ServicosOrcamento {
  id: number;
  agendamentoInicio: Date;
  agendamentoFim: Date;
  inicioExecucao: Date;
  fimExecucao: Date;
  dataAditivo: Date;
  numeroAditivo: number;
  quantidade: number;
  valor: number;
  valorPrestador: number;
  servico: Servico;
  observacao: string;

  constructor(quantidade: number, servico: Servico) {
    this.quantidade = quantidade;
    this.valor = servico.valor;
    this.servico = servico;
  }
}
