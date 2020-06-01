import { TurnoTrabalho } from './turno-trabalho.module';
import { Prestador } from './prestador.module';

export class Disponibilidade {
  id: number;
  dataCadastro: Date;
  dia: number;
  turnoTrabalho: TurnoTrabalho;
  prestador: Prestador;
  diaSemana: string;
}
