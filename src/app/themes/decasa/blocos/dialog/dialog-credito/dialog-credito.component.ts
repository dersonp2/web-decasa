import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-credito',
  templateUrl: './dialog-credito.component.html',
  styleUrls: ['./dialog-credito.component.css']
})
export class DialogCreditoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogCreditoComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
