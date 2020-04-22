import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialogRef} from '@angular/material/dialog';

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
  selector: 'app-dialog-membros',
  templateUrl: './dialog-membros.component.html',
  styleUrls: ['./dialog-membros.component.css']
})

export class DialogMembrosComponent {

  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  displayedColumns: string[] = ['nome', 'email', 'telefone', 'opcoes'];
  dataSource = new MatTableDataSource<Membros>(ELEMENT_DATA);

  constructor(public dialogRef: MatDialogRef<DialogMembrosComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
