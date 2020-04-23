import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-rastrear',
  templateUrl: './dialog-rastrear.component.html',
  styleUrls: ['./dialog-rastrear.component.css']
})
export class DialogRastrearComponent {

  lat = -2.518917;
  lng = -44.23733;
  zoom = 15;


  constructor(public dialogRef: MatDialogRef<DialogRastrearComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
