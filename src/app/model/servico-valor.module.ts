import { Servico } from 'src/app/model/servico.module';
import { Municipio } from './municipio.module';
export class ServicoValor {
  id: number;
  servico: Servico;
  municipio: Municipio;
  valor: number;
}
