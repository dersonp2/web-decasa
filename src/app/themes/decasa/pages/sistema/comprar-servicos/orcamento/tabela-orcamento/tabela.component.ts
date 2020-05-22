import { CarrinhoEvent } from './../../../../../../../events/carrinho-event';
import { ServicoElement } from './../../../../../../../model/element/servico.element';
import { ClasseEvent } from './../../../../../../../events/ClasseEvent';
import { ServicoService } from './../../../../../../../services/servico.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Servicos } from 'src/app/model/servico.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringify } from 'querystring';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() classeId: number;
  listaServicos: ServicoElement[];
  servicosSelecionados: ServicoElement[] = [];
  municipioId: number;

  displayedColumns: string[] = ['select', 'descricao'];
  dataSource = new MatTableDataSource<ServicoElement>();
  selection = new SelectionModel<ServicoElement>(true, []);
  servicos: Servicos[];

  // tslint:disable-next-line:variable-name
  constructor(private servicoService: ServicoService, private classeService: ClasseEvent, private _snackBar: MatSnackBar, private carrinhoService: CarrinhoEvent) {
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
    // tslint:disable-next-line:only-arrow-functions space-before-function-paren
    this.servicos.forEach(function (item) {
      dt.push(new ServicoElement(item.id, item.descricao));
    });
    this.dataSource.data = dt;

    if (dt.length === 0) {
      mensagem = 'Sem serviços para essa classe';
      classe = 'orange-snackbar';
    } else {
      mensagem = 'Tabela atualizada';
      classe = 'blue-snackbar';
    }
    this.showSnackBar(mensagem, classe);
  }

  showSnackBar(mensagem, cor) {
    this._snackBar.open(mensagem, '', {
      duration: 3000,
      panelClass: [cor]
    }
    );
  }

  // Adicionar ou Remover na lista de servicos selecionados - TESTE
  // adicionarServicos(servico) {
  //   if (localStorage.hasOwnProperty('servicosSelecionados')) {
  //     this.servicosSelecionados = JSON.parse(localStorage.getItem('servicosSelecionados'));
  //   }
  //   this.servicosSelecionados.push(servico);
  // }

  armazenarServicos() {
    // if (localStorage.hasOwnProperty('servicosSelecionados')) {
    //     const servicos2: ServicoElement[] = JSON.parse(localStorage.getItem('servicosSelecionados'));
    //     }
    localStorage.setItem('servicosSelecionados', JSON.stringify(this.servicosSelecionados));
    this.servicosSelecionados.length = 0;
    this.carrinhoService.alteracao();
    this.showSnackBar('Serviço inserido no carrinho', 'blue-snackbar');
  }

  testeRow(row) {
    // tslint:disable-next-line:no-console
    console.info(row);
    this.selection.toggle(row);
    // tslint:disable-next-line:no-console
    if (localStorage.hasOwnProperty('servicosSelecionados')) {
      const servicos2: ServicoElement[] = JSON.parse(localStorage.getItem('servicosSelecionados'));
      // tslint:disable-next-line:only-arrow-functions

      servicos2.forEach(element => {
        console.log(element);
        const pos = this.servicosSelecionados.indexOf(row);
        if (pos < 0) {
          this.servicosSelecionados.push(element);
        }
      });
    }

    console.log(this.servicosSelecionados);
    this.servicosSelecionados.push(row);
    console.log('Servicos atualizados');
    console.log(this.servicosSelecionados);
    // const pos = this.servicosSelecionados.indexOf(row);

    // if (pos > -1) {
    //   console.log('Servico já cadastrado no carrinho');
    //   this.servicosSelecionados.splice(pos, 1);
    // } else {
    //   this.servicosSelecionados.push(row);
    // }
    // // tslint:disable-next-line:no-console
    // console.info(this.servicosSelecionados);
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
  checkboxLabel(row?: ServicoElement): string {
    // console.log('Selecionou');
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
  }
}
