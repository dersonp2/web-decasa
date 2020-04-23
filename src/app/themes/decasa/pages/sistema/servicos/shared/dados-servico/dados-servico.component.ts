import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogAnexarComponent } from '../../../../../blocos/dialog/dialog-anexar/dialog-anexar.component';
import { DialogCancelarComponent } from 'src/app/themes/decasa/blocos/dialog/dialog-cancelar/dialog-cancelar.component';
import { DialogRescindirComponent } from './../../../../../blocos/dialog/dialog-rescindir/dialog-rescindir.component';
import { DialogReagendarComponent } from './../../../../../blocos/dialog/dialog-reagendar/dialog-reagendar.component';
import { DialogMembrosComponent } from '../../../../../blocos/dialog/dialog-membros/dialog-membros.component';

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

  openDialogReagendar() {
    this.dialog.open(DialogReagendarComponent, {
      width: '50%',
    });
  }
  openDialogCancelar() {
    this.dialog.open(DialogCancelarComponent, {
      width: '50%',
    });
  }

  openDialogRescindir() {
    this.dialog.open(DialogRescindirComponent, {
      width: '50%',
    });
  }
}
