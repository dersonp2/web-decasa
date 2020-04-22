import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-comprovante',
  templateUrl: './dialog-comprovante.component.html',
  styleUrls: ['./dialog-comprovante.component.css']
})
export class DialogComprovanteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComprovanteComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
}
