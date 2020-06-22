import { ServicosOrcamento } from './../../../../../../../model/servico-orcamento.module';
import { CarrinhoEvent } from './../../../../../../../events/carrinho-event';
import { ServicoElement } from './../../../../../../../model/element/servico.element';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-quantidade',
  templateUrl: './tabela-quantidade.component.html',
  styleUrls: ['./tabela-quantidade.component.css']
})
export class TabelaQuantidadeComponent implements OnInit {

  displayedColumns: string[] = ['descricao', 'qntd', 'unidade', 'opc'];
  dataSource: ServicosOrcamento[];
  servicosSelecionados: ServicosOrcamento[] = [];

  constructor(private carrinhoService: CarrinhoEvent) {
    carrinhoService.alteracao$.subscribe(
      (data) => { this.getServicosElement(); }
    );
  }

  ngOnInit(): void {
    this.getServicosElement();
  }

  getServicosElement() {
    if (localStorage.hasOwnProperty('servicosSelecionados')) {
      this.servicosSelecionados = JSON.parse(localStorage.getItem('servicosSelecionados'));
      this.dataSource = this.servicosSelecionados;
    }
  }

  deleteElement(servico) {
    // Remove
    this.servicosSelecionados.splice(this.servicosSelecionados.indexOf(servico), 1);
    localStorage.setItem('servicosSelecionados', JSON.stringify(this.servicosSelecionados));
    this.carrinhoService.alteracao();
  }

  onSearchChange(qnt: number, servico: ServicosOrcamento): void {
    console.log(qnt);
    console.log(servico);
    const pos = this.servicosSelecionados.indexOf(servico);
    this.servicosSelecionados[pos].quantidade = Number(qnt);
    localStorage.setItem('servicosSelecionados', JSON.stringify(this.servicosSelecionados));

  }

  // Atualizar valor localStorage
  updateQtde(servico) {
    servico = this.servicosSelecionados[this.servicosSelecionados.indexOf(servico)];
  }
}
