import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cartao',
  templateUrl: './dialog-cartao.component.html',
  styleUrls: ['./dialog-cartao.component.css']
})
export class DialogCartaoComponent implements OnInit {

  public mesMask = [/\d/, /\d/];
  numeroMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' '];

  constructor(public dialogRef: MatDialogRef<DialogCartaoComponent>) { }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
