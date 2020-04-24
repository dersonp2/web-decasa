import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  uni: string;
  qntd: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Ticket Passeio', uni: 'km', qntd: ''},
  {name: 'City Tour Personal 08h - Veículo Sedan', uni: 'km', qntd: ''},
  {name: '4 horas de City Tour Personal - Veículo Passeio', uni: 'km', qntd: ''},
];

@Component({
  selector: 'app-tabela-servicos',
  templateUrl: './tabela-servicos.component.html',
  styleUrls: ['./tabela-servicos.component.css']
})
export class TabelaServicosComponent {

  value = 'Clear me';
  displayedColumns: string[] = ['name', 'qntd',  'uni', 'opc'];
  dataSource = ELEMENT_DATA;

}
