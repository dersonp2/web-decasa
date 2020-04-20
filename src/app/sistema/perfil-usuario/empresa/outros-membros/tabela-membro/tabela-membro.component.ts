import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Membros {
  nome: string;
  email: string;
  telefone: number;
}
const ELEMENT_DATA: Membros[] = [
  {nome: 'Maria Jose', email: 'mariajose@gmail.com', telefone: 983904190},
  {nome: 'Luis Carlos', email: 'luiscarlos@gmail.com', telefone: 985246924}
];

@Component({
  selector: 'app-tabela-membro',
  templateUrl: './tabela-membro.component.html',
  styleUrls: ['./tabela-membro.component.css']
})
export class TabelaMembroComponent implements OnInit {

  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  displayedColumns: string[] = ['nome', 'email', 'telefone', 'opcoes'];
  dataSource = new MatTableDataSource<Membros>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
