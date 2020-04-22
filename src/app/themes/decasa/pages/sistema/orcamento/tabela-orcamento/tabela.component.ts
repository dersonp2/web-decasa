import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Ticket Passeio'},
  {name: 'City Tour Personal 08h - Veículo Sedan'},
  {name: '4 horas de City Tour Personal - Veículo Passeio'},
  {name: 'City Tour Personal 08h - Veículo Sedan'},
  {name: 'City Tour Personal 08h - Veículo Sedan'},
  {name: 'Ticket Passeio'},
  {name: 'City Tour Personal 08h - Veículo Sedan'},
  {name: 'Ticket Passeio'},
  {name: '4 horas de City Tour Personal - Veículo Passeio'}
];

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

  displayedColumns: string[] = ['select', 'name'];
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
