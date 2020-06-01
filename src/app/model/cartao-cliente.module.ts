import { EnderecoCliente } from './endereco-cliente.module';
import { FormaPagamento } from './forma-pagamento.module';
import { Cliente } from './cliente.module';
import { Financeira } from './financeira.module';
export class CartaoCliente {
  id: number;
  financeira: Financeira;
  cliente: Cliente;
  nomeCartao: string;
  numeroCartao: string;
  codigoSegurancaCartao: number;
  validadeCartao: string;
  token: string;
  bandeira: string;
  principal: boolean;
  formasPagamento: FormaPagamento[];
  endereco: EnderecoCliente;
  ativo: boolean;
  mensageRetorno: string;
  holder: string;
}
