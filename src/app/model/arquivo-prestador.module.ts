import { DocumentoPreCadastro } from './documento-precadastro.module';
import { TipoDocumento } from './tipo-documento.module';
import { Prestador } from './prestador.module';

export class ArquivoPrestador {
  id: number;
  nomeFantasia: string;
  nome: string;
  extensao: string;
  dataCadastro: Date;
  observacao: string;
  tamanho: number;
  fotoAtiva: boolean;
  tipoDocumento: TipoDocumento;
  documentoPreCadastro: DocumentoPreCadastro;
  prestador: Prestador;
  arquivo: [];
}
