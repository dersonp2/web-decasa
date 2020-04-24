import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  uni: string;
  qntd: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Ticket Passeio', uni: 'km', qntd: ''},
  {name: 'City Tour Personal 08h - Veículo Sedan', uni: 'km', qntd: ''},
  {name: '4 horas de City Tour Personal - Veículo Passeio', uni: 'km', qntd: ''},
  {name: 'City Tour Personal 08h - Veículo Sedan', uni: 'km', qntd: ''},
  {name: 'Ticket Passeio', uni: 'km', qntd: ''},
  {name: 'City Tour Personal 08h - Veículo Sedan', uni: 'km', qntd: ''},
  {name: 'Ticket Passeio', uni: 'km', qntd: ''},
  {name: '4 horas de City Tour Personal - Veículo Passeio', uni: 'km', qntd: ''}
];

@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent {

  displayedColumns: string[] = ['select', 'name', 'qntd',  'uni'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
  }
}
