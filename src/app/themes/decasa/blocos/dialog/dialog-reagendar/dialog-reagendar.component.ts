import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-reagendar',
  templateUrl: './dialog-reagendar.component.html',
  styleUrls: ['./dialog-reagendar.component.css']
})
export class DialogReagendarComponent {

  // Data minima para o calendário
  minDate = new Date();
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(public dialogRef: MatDialogRef<DialogReagendarComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
}
