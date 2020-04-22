import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  data: string;
  pedido: string;
  valor: string;
  situacao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { data: '21/02/2020', pedido: 'BRA54235UF', valor: 'R$ 25.000,00', situacao: 'PG' },
  { data: '21/02/2020', pedido: 'BRA54235UF', valor: 'R$ 2.000,00', situacao: 'DV' },
];

@Component({
  selector: 'app-tabela-pospago',
  templateUrl: './tabela-pospago.component.html',
  styleUrls: ['./tabela-pospago.component.css']
})
export class TabelaPospagoComponent implements OnInit {

  displayedColumns: string[] = ['data', 'pedido', 'valor', 'situacao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
