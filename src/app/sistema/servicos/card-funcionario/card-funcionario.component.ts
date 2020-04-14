import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-funcionario',
  templateUrl: './card-funcionario.component.html',
  styleUrls: ['./card-funcionario.component.css']
})
export class CardFuncionarioComponent implements OnInit {
  funcionarios = [
    { id: 1, nome: 'João Pedro' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
