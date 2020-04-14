import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  pedido: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {pedido: 'BRA123456MA'},
  {pedido: 'BRA123457MA'},
  {pedido: 'BRA123458MA'},
  {pedido: 'BRA123459MA'}
];

@Component({
  selector: 'app-n-pedidos',
  templateUrl: './n-pedidos.component.html',
  styleUrls: ['./n-pedidos.component.css']
})
export class NPedidosComponent implements OnInit {

  displayedColumns: string[] = ['pedidos'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
