import {Component} from '@angular/core';

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
  selector: 'app-tabela-quantidade',
  templateUrl: './tabela-quantidade.component.html',
  styleUrls: ['./tabela-quantidade.component.css']
})
export class TabelaQuantidadeComponent  {

  value = 'Clear me';
  displayedColumns: string[] = ['name', 'qntd',  'uni',];
  dataSource = ELEMENT_DATA;
}
