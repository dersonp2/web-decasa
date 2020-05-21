import { ClasseEvent } from './../../../../../../../events/ClasseEvent';
import { ServicoService } from './../../../../../../../services/servico.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Servicos } from 'src/app/model/servico.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringify } from 'querystring';


export class PeriodicElement {
  id: number;
  descricao: string;

  constructor(id: number, descricao: string) {
    this.descricao = descricao;
    this.id = id;
  }
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  listaServicos: PeriodicElement[];

  @Input() classeId: number;
  municipioId: number;
  displayedColumns: string[] = ['select', 'descricao'];

  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  servicos: Servicos[];

  constructor(private servicoService: ServicoService, private classeService: ClasseEvent, private _snackBar: MatSnackBar) {
    classeService.alteracao$.subscribe(
      (data) => { this.getServicosByClasseAndMunicipio(data); }
    );
  }

  ngOnInit(): void {
    this.municipioId = Number(localStorage.getItem('municipioId'));
    this.getServicosByClasseAndMunicipio(this.classeId);
  }

  // Pegar todos os servicos por classe e municipio
  getServicosByClasseAndMunicipio(classeId) {
    this.servicoService.getServicosByClasseAndMunicipio(classeId, this.municipioId).subscribe(
      (data) => {
        this.servicos = data;
        this.getElementData();
      },
      (error) => console.log(error)
    );
  }

  // Preencher a tabela
  getElementData() {
    let mensagem: string;
    let classe: string;
    const dt = [];
    // tslint:disable-next-line:only-arrow-functions
    this.servicos.forEach(function(item) {
      dt.push(new PeriodicElement(item.id, item.descricao));
    });
    this.dataSource.data = dt;
    if (dt.length === 0) {
      mensagem = 'Sem serviços para essa classe';
      classe = 'orange-snackbar';
    } else {
      mensagem = 'Tabela atualizada';
      classe = 'blue-snackbar';
    }
    this._snackBar.open(mensagem, '', {
      duration: 3000,
      panelClass: [classe]
    }
    );
  }


  // Padrão tabela
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
