import { TipoVeiculo } from './tipo-veiculo.module';
export class Veiculo {
  id: number;
  descricao: string;
  cor: string;
  placa: string;
  renavam: string;
  chassi: string;
  tipoVeiculo: TipoVeiculo;
}
