import { ServicoService } from './../../../../../../../services/servico.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Servicos } from 'src/app/model/servico.module';

export interface PeriodicElement {
  descricao: string;
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    { descricao: 'Ticket Passeio' },
    { descricao: 'City Tour' },
  ];

  @Input() classeId: number;
  municipioId: number;
  displayedColumns: string[] = ['select', 'descricao'];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  servicos: Servicos[];

  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {
    console.log('Receu a classe id Tabela ' + this.classeId);
    this.municipioId = Number(localStorage.getItem('municipioId'));
    this.getServicosByClasseAndMunicipio(this.classeId, this.municipioId);
  }

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

  getElementData() {

    const p: PeriodicElement = {
      descricao: 'Teste'
    };
    this.ELEMENT_DATA.push(p);
    // tslint:disable-next-line:only-arrow-functions
    this.servicos.forEach(function(value) {
      const p2: PeriodicElement = {
        descricao: 'Teste'
      };
    });
  }


  getServicosByClasseAndMunicipio(classeId, municipioId) {
    this.servicoService.getServicosByClasseAndMunicipio(classeId, municipioId).subscribe(
      (data) => {
        this.servicos = data; console.log('Servicos ' + this.servicos); this.getElementData();
      },
      (error) => console.log(error)
    );
  }
}
