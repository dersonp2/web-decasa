import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogReagendarComponent } from '../dialog-reagendar/dialog-reagendar.component';

@Component({
  selector: 'app-dialog-cancelar',
  templateUrl: './dialog-cancelar.component.html',
  styleUrls: ['./dialog-cancelar.component.css']
})
export class DialogCancelarComponent {


  constructor(public dialogRef: MatDialogRef<DialogCancelarComponent>, public dialog: MatDialog) { }

  close(): void {
    this.dialogRef.close();
  }

  openDialogReagendar() {
    this.close();
    this.dialog.open(DialogReagendarComponent, {
      width: '50%',
    });
  }
}
