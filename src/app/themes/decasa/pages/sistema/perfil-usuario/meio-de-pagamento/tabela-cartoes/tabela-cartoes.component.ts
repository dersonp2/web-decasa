import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  bandeira: string;
  numero: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {bandeira: 'fab fa-cc-mastercard fa-lg', numero: '4400 **** **** 5609'},
  {bandeira: 'fab fa-cc-visa fa-lg', numero: '0254 **** **** 9865'},
];

@Component({
  selector: 'app-tabela-cartoes',
  templateUrl: './tabela-cartoes.component.html',
  styleUrls: ['./tabela-cartoes.component.css']
})
export class TabelaCartoesComponent implements OnInit {

 displayedColumns: string[] = ['bandeira', 'numero',  'opc'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
