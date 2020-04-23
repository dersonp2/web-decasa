import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-rescindir',
  templateUrl: './dialog-rescindir.component.html',
  styleUrls: ['./dialog-rescindir.component.css']
})
export class DialogRescindirComponent  {

  constructor(public dialogRef: MatDialogRef<DialogRescindirComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
