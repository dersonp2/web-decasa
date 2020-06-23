import { ClienteOrcamento } from '../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoEvent } from '../../../../../../events/orcamento-event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendado',
  templateUrl: './agendado.component.html',
  styleUrls: ['./agendado.component.css']
})
export class AgendadoComponent implements OnInit {
  orcamentoSelected: ClienteOrcamento = new ClienteOrcamento();

  constructor(private orcamentoEvent: OrcamentoEvent) {
    orcamentoEvent.agendado$.subscribe(
      (data: ClienteOrcamento) => { (this.orcamentoSelected = data); }
    );
  }

  ngOnInit(): void {
  }


}
