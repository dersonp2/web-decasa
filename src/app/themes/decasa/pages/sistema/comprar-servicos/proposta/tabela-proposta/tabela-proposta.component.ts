import { ServicosOrcamento } from './../../../../../../../model/servico-orcamento.module';
import { element } from 'protractor';
import { ServicoElement } from './../../../../../../../model/element/servico.element';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tabela-proposta',
  templateUrl: './tabela-proposta.component.html',
  styleUrls: ['./tabela-proposta.component.css']
})
export class TabelaPropostaComponent implements OnInit {

  total: number;
  displayedColumns: string[] = ['descricao', 'qntd', 'unidade'];
  // dataSource = ELEMENT_DATA;
  dataSource: ServicosOrcamento[];

  constructor() { }

  ngOnInit(): void {
    this.getServicosElement();
  }

  getServicosElement() {
    if (localStorage.hasOwnProperty('servicosSelecionados')) {
      this.dataSource = JSON.parse(localStorage.getItem('servicosSelecionados'));
      this.setTotal();
    }
  }

  setTotal() {
    this.total = 0;
    this.dataSource.forEach(e => {
      this.total += e.valor * e.quantidade;
    });
  }
}
