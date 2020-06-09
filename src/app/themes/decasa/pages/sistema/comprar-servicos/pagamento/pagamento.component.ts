import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from './../../../../blocos/dialog/dialog-login/dialog-login.component';
import { AuthService } from './../../../../../../services/auth.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(public authService: AuthService, public dialog: MatDialog) {
  }
  ngOnInit() {
    if (!this.authService.check()) {
      this.openModal();
    }
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      disableClose: true
    });
  }

}
