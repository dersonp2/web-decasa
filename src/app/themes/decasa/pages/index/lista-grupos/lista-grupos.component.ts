import { DialogLocalizacaoComponent } from './../../../blocos/dialog/dialog-localizacao/dialog-localizacao.component';
import { MatDialog } from '@angular/material/dialog';
import { Classe } from './../../../../../model/classe.module';
import { GrupoService } from './../../../../../services/grupo.service';
import { TodosOsGruposEClassesResponse } from './../../../../../model/response/todos-os-grupos-classes-response.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.component.html',
  styleUrls: ['./lista-grupos.component.css']
})
export class ListaGruposComponent implements OnInit {

  gruposClasses: TodosOsGruposEClassesResponse[];
  grupo: TodosOsGruposEClassesResponse;
  classe: Classe;
  classes: Classe[];

  constructor(private grupoService: GrupoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGruposClasses();
  }

  getGruposClasses() {
    this.grupoService.getGruposAllClasses().subscribe(
      (data) => { this.gruposClasses = data; },
      (error) => console.log(error)
    );
  }

  setGruposClasses() {
    this.classe = new Classe();
    this.classe.id = 1;
    this.classe.descricao = 'Classe 1';
    this.classes.push(this.classe);
    this.grupo = new TodosOsGruposEClassesResponse();
    this.grupo.descricao = 'Grupo 1';
    this.grupo.classes = this.classes;
  }

  openModal() {
    this.dialog.open(DialogLocalizacaoComponent, {
      width: '50%',
    });
  }

}
