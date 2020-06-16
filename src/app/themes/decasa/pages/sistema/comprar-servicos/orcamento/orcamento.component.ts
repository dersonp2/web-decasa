import { ViaCepService } from './../../../../../../services/via-cep.service';
import { GrupoService } from './../../../../../../services/grupo.service';
import { TodosOsGruposEClassesResponse } from './../../../../../../model/response/todos-os-grupos-classes-response.module';
import { ServicoService } from './../../../../../../services/servico.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Servico } from 'src/app/model/servico.module';
import { TabelaComponent } from './tabela-orcamento/tabela.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';


@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  gruposClasses: TodosOsGruposEClassesResponse[];
  minDate = new Date();
  municipioId: number;
  classeId: number;
  _dateValue;


  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(private router: Router, private grupoService: GrupoService) {
    const nav = this.router.getCurrentNavigation();
    this.municipioId = Number(localStorage.getItem('municipioId'));
    this.classeId = Number(localStorage.getItem('classeId'));
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

  // Recebe a data

  obterData(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    console.log(moment(event.value).format('YYYY/MM/DD'));
  }

  onOpeningOrClosingTimeChanged(event) {
    console.log(event);
    const date = new  Date('2020/06/16 04:10');
    console.log(date);
  }


}
