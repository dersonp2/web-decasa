import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outros-membros',
  templateUrl: './outros-membros.component.html',
  styleUrls: ['./outros-membros.component.css']
})
export class OutrosMembrosComponent implements OnInit {

  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];

  // 0 - none | 1- Convidar | 2 Add Membro | 3 Buscar
  displayComponent = 0;

  constructor() { }

  ngOnInit(): void {
  }

  display(n){
    this.displayComponent = n;
  }

}
