import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

export interface Membros {
  n: string;
  data: string;
  descricao: string;
  prestador: string;
}
const ELEMENT_DATA: Membros[] = [
  {n: 'BRA15784UF', data: '21/01/2020', descricao: 'Serviço de instalação de ar-condicionado', prestador: '@joaoteimoso'},
  {n: 'BRA15785UF', data: '21/05/2020', descricao: 'Diária completa', prestador: '@leticiaclean'}
];

@Component({
  selector: 'app-dialog-servicos',
  templateUrl: './dialog-servicos.component.html',
  styleUrls: ['./dialog-servicos.component.css']
})
export class DialogServicosComponent implements OnInit {

  displayedColumns: string[] = ['n', 'dt-entrega', 'descricao', 'prestador'];
  dataSource = new MatTableDataSource<Membros>(ELEMENT_DATA);

  constructor(public dialogRef: MatDialogRef<DialogServicosComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
