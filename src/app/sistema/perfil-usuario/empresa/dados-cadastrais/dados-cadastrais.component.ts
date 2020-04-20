import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {

  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  cnpjMask = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.',  /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor() { }

  ngOnInit(): void {
  }

}
