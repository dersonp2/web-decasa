import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  // Data minima para o calendário
  minDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
