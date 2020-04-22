import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  constructor() { }

  ngOnInit(): void {
  }

}
