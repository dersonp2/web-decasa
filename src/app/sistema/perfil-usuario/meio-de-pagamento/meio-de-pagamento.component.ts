import { DialogCartaoComponent } from './dialog/dialog-cartao/dialog-cartao.component';
import { DialogCreditoComponent } from './dialog/dialog-credito/dialog-credito.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComprovanteComponent } from './dialog/dialog-comprovante/dialog-comprovante.component';
@Component({
  selector: 'app-meio-de-pagamento',
  templateUrl: './meio-de-pagamento.component.html',
  styleUrls: ['./meio-de-pagamento.component.css']
})
export class MeioDePagamentoComponent implements OnInit {

  public mesMask = [/\d/, /\d/];
  numeroMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' '];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogCartao() {
    this.dialog.open(DialogCartaoComponent, {
      width: '50%',
    });
  }

  openDialogComprovante() {
    this.dialog.open(DialogComprovanteComponent, {
      width: '50%',
    });
  }

  openDialogCredito() {
    this.dialog.open(DialogCreditoComponent, {
      width: '50%',
    });
  }
}
