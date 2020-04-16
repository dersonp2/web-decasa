import { DialogExemploComponent } from './../dialog-exemplo/dialog-exemplo.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogExemploComponent, {
      width: '50%',
    });
  }
}
