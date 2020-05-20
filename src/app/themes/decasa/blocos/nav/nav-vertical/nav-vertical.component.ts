import { TodosOsGruposEClassesResponse } from './../../../../../model/response/todos-os-grupos-classes-response.module';
import { GrupoService } from './../../../../../services/grupo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  @Input() municipioId: number;
  menuId;
  gruposClasses: TodosOsGruposEClassesResponse[];
  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    console.log('Municipio na nav vertical ' + this.municipioId);
    this.getGruposClassesByMunicipio();
  }

  // Grupos e classes por municipio
  public getGruposClassesByMunicipio() {
    if (this.municipioId !== undefined) {
      this.grupoService.getGruposClassesByMunicipio(this.municipioId).subscribe(
        (data) => { this.gruposClasses = data; console.log(this.gruposClasses); },
        (error) => console.log(error)
      );
    }
  }

  abriSubMenu(id) {
    if (this.menuId === id) {
      this.menuId = 0;
    } else {
      this.menuId = id;
    }
    console.log(this.menuId);
  }

}
