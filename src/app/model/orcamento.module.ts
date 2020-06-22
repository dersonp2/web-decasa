import {UserInformation} from './user-information.module';
import {CustoAdicional} from './custo-adicional.module';
import {Pagamento} from './pagamento.module';
import {PrestadorOrcamento} from './prestador-orcamento.module';
import {HistoricoOrcamento} from './historico-orcamento.module';
import {TipoOrcamento} from './tipo-orcamento.module';
import {EnderecoCliente} from './endereco-cliente.module';
import {Cliente} from './cliente.module';

export class Orcamento {

  id: number;
  valor: number;
  cliente: Cliente;
  enderecoCliente: EnderecoCliente;
  dataHora: string;
  observacao: string;
  custoAdicional: CustoAdicional;
  prestadorOrcamentos: PrestadorOrcamento[];
  historicoOrcamentos: HistoricoOrcamento[];
  origemWeb: boolean;
  // id: number;
  // data: Date;
  // valor: number;
  // observacao: string;
  // cliente: Cliente;
  // enderecoCliente: EnderecoCliente;
  // tipoOrcamento: TipoOrcamento;
  // historicoOrcamentos: HistoricoOrcamento[];
  // prestadorOrcamentos: PrestadorOrcamento[];
  // dataHora: string;
  // idPrestador: number;
  // bandeiraCartao: string;
  // pagamento: Pagamento;
  // custoAdicional: CustoAdicional;
  // userInformation: UserInformation;

  constructor() {
    this.enderecoCliente = new EnderecoCliente();
  }
}
