import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  // 0 - Tela iniciada
  // 1 - Atendimento em domicilio
  // 2 - Não é em domicilio
  domicile = 0;

  qtdPrestadores: boolean = false;
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(evt) {
    console.log(evt.target);
    if (evt.target.value === 'option1') {
      this.domicile = 1;
    } else {
      this.domicile = 2;
    }
  }

  searchServiceProviders() {
    this.qtdPrestadores = true;
  }

}
