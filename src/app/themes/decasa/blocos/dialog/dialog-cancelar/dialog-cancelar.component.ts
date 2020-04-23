import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cancelar',
  templateUrl: './dialog-cancelar.component.html',
  styleUrls: ['./dialog-cancelar.component.css']
})
export class DialogCancelarComponent {


  constructor(public dialogRef: MatDialogRef<DialogCancelarComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
