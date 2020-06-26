import {Router} from '@angular/router';
import {DialogLocalizacaoComponent} from './../../../blocos/dialog/dialog-localizacao/dialog-localizacao.component';
import {MatDialog} from '@angular/material/dialog';
import {GrupoService} from './../../../../../services/grupo.service';
import {TodosOsGruposEClassesResponse} from './../../../../../model/response/todos-os-grupos-classes-response.module';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {DragScrollComponent} from 'ngx-drag-scroll';


@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.component.html',
  styleUrls: ['./lista-grupos.component.css']
})
export class ListaGruposComponent implements OnInit {

  gruposClasses: TodosOsGruposEClassesResponse[];
  grupo: TodosOsGruposEClassesResponse;
  municipioId: number;
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor(private grupoService: GrupoService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.getGruposClasses();
  }

  // this.gruposClasses = data;
  getGruposClasses() {
    this.grupoService.getGruposAllClasses().subscribe(
      (data) => {
        this.gruposClasses = data;
      },
      (error) => console.log(error)
    );
  }

  // Grupos e classes por municipio
  public getGruposClassesByMunicipio(municipioId) {
    this.municipioId = municipioId;
    this.grupoService.getGruposClassesByMunicipio(municipioId).subscribe(
      (data) => {
        this.gruposClasses = data;
      },
      (error) => console.log(error)
    );
  }

  // Menu de navegação
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  // moveTo(index) {
  //   this.ds.moveTo(index);
  // }

  openModal() {
    this.dialog.open(DialogLocalizacaoComponent, {
      width: '50%',
    });
  }

  // TODO: mudar para this.municipioID
  goToOrcamento(classeId) {
    localStorage.setItem('classeId', classeId);
    this.router.navigateByUrl('/orcamento');
  }

}
