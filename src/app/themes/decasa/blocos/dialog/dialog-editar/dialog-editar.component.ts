import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent  {

  novoServico = false;

  showNovoServico() {
    this.novoServico = !this.novoServico;
  }
  constructor(public dialogRef: MatDialogRef<DialogEditarComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
