import { DialogMembrosComponent } from '../../../../../blocos/dialog/dialog-membros/dialog-membros.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnexarComponent } from '../../../../../blocos/dialog/dialog-anexar/dialog-anexar.component';
@Component({
  selector: 'app-dados-servico',
  templateUrl: './dados-servico.component.html',
  styleUrls: ['./dados-servico.component.css']
})
export class DadosServicoComponent {

  // 1- Excolher | 3- Agendamento | 4 - Finalizar
  @Input() displayBtn;

  displayEmail = false;

  constructor(public dialog: MatDialog) { }

  openDialogMembros() {
    this.dialog.open(DialogMembrosComponent, {
      width: '50%',
    });
  }

  openDialogAnexar() {
    this.dialog.open(DialogAnexarComponent, {
      width: '50%',
    });
  }

  setDisplayEmail() {
    this.displayEmail = !this.displayEmail;
  }
}
