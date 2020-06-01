import { ClienteOrcamento } from '../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoEvent } from './../../../../../../events/orcamento-event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  orcamentoSelected: ClienteOrcamento = new ClienteOrcamento();

  constructor(private orcamentoEvent: OrcamentoEvent) {
    orcamentoEvent.finalizado$.subscribe(
      (data: ClienteOrcamento) => { (this.orcamentoSelected = data); }
    );
  }



  ngOnInit(): void {
  }

}
