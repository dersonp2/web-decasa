export class ServicoElement {
  id: number;
  descricao: string;
  unidade: string;
  qnt: number;
  composicao: string;
  valor: number;

  constructor(id: number, descricao: string, unidade: string, qnt: number, composicao: string, valor: number) {
    this.id = id;
    this.descricao = descricao;
    this.unidade = unidade;
    this.qnt = qnt;
    this.composicao = composicao;
    this.valor = valor;
  }
}
