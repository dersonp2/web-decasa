import { DialogServicosComponent } from '../../../../../blocos/dialog/dialog-servicos/dialog-servicos.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-enderecos',
  templateUrl: './lista-enderecos.component.html',
  styleUrls: ['./lista-enderecos.component.css']
})
export class ListaEnderecosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogServicos() {
    this.dialog.open(DialogServicosComponent, {
      width: '70%',
    });
  }

}
