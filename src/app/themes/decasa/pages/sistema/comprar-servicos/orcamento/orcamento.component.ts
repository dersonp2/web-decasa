import { GrupoService } from './../../../../../../services/grupo.service';
import { TodosOsGruposEClassesResponse } from './../../../../../../model/response/todos-os-grupos-classes-response.module';
import { ServicoService } from './../../../../../../services/servico.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Servicos } from 'src/app/model/servico.module';
import { TabelaComponent } from './tabela-orcamento/tabela.component';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  gruposClasses: TodosOsGruposEClassesResponse[];
  // Data minima para o calendário
  minDate = new Date();
  municipioId: number;
  classeId: number;

  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(private router: Router, private grupoService: GrupoService) {
    const nav = this.router.getCurrentNavigation();
    this.municipioId = Number(localStorage.getItem('municipioId'));
    this.classeId = nav.extras.state.classe;

    this.getGruposClassesByMunicipio(this.municipioId);
  }

  ngOnInit(): void {
  }

  public getGruposClassesByMunicipio(municipioId) {
    this.grupoService.getGruposClassesByMunicipio(municipioId).subscribe(
      (data) => { this.gruposClasses = data; },
      (error) => console.log(error)
    );
  }

}
