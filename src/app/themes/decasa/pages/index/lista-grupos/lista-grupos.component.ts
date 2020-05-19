import { DialogLocalizacaoComponent } from './../../../blocos/dialog/dialog-localizacao/dialog-localizacao.component';
import { MatDialog } from '@angular/material/dialog';
import { Classe } from './../../../../../model/classe.module';
import { GrupoService } from './../../../../../services/grupo.service';
import { TodosOsGruposEClassesResponse } from './../../../../../model/response/todos-os-grupos-classes-response.module';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.component.html',
  styleUrls: ['./lista-grupos.component.css']
})
export class ListaGruposComponent implements OnInit {

  gruposClasses: TodosOsGruposEClassesResponse[];
  grupo: TodosOsGruposEClassesResponse;

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: false,
    navSpeed: 900,
    // tslint:disable-next-line:quotemark
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  };

  constructor(private grupoService: GrupoService, public dialog: MatDialog) { }

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
    console.log('Carregaou grupos  e classes');
    this.grupoService.getGruposClassesByMunicipio(municipioId).subscribe(
      (data) => { this.gruposClasses = data; },
      (error) => console.log(error)
    );
  }

  openModal() {
    this.dialog.open(DialogLocalizacaoComponent, {
      width: '50%',
    });
  }

}
