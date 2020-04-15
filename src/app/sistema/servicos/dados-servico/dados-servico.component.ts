import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-servico',
  templateUrl: './dados-servico.component.html',
  styleUrls: ['./dados-servico.component.css']
})
export class DadosServicoComponent implements OnInit {

  // 4 - Finalizar
  @Input() displayBtn;
  displayEmail = false;

  constructor() { }

  ngOnInit(): void {
  }

  setDisplayEmail() {
    this.displayEmail = !this.displayEmail;
  }
}
