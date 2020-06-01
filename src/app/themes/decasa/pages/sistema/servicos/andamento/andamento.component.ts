import { ClienteOrcamento } from './../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoEvent } from './../../../../../../events/orcamento-event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.component.html',
  styleUrls: ['./andamento.component.css']
})
export class AndamentoComponent implements OnInit {

  @Input() nome: boolean;
  orcamentoSelected: ClienteOrcamento = new ClienteOrcamento();

  constructor(private orcamentoEvent: OrcamentoEvent) {
    orcamentoEvent.execucao$.subscribe(
      (data: ClienteOrcamento) => { (this.orcamentoSelected = data); }
    );
  }


  ngOnInit(): void {
  }

}
