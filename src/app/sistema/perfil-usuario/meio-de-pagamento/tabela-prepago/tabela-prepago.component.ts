import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  data: string;
  valorInfo: string;
  valorConf: string;
  pedido: string;
  usuario: string;
  opc: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { data: '21/02/2020', valorInfo: 'R$ 24.000,00', valorConf: 'R$ 24.000,00', pedido: '', usuario: 'William', opc: '+' },
  { data: '21/02/2020', valorInfo: '', valorConf: 'R$ -5.000,00', pedido: 'BRA2345UF', usuario: 'Anderson', opc: '-' },
];

@Component({
  selector: 'app-tabela-prepago',
  templateUrl: './tabela-prepago.component.html',
  styleUrls: ['./tabela-prepago.component.css']
})
export class TabelaPrepagoComponent implements OnInit {

  displayedColumns: string[] = ['data', 'valorInfo', 'valorConf', 'pedido', 'usuario', 'opc'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
