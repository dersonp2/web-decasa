import {DialogCartaoComponent} from '../../../../blocos/dialog/dialog-cartao/dialog-cartao.component';
import {DialogCreditoComponent} from '../../../../blocos/dialog/dialog-credito/dialog-credito.component';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComprovanteComponent} from '../../../../blocos/dialog/dialog-comprovante/dialog-comprovante.component';
import {CartaoClienteService} from '../../../../../../services/cartao-cliente.service';
import {AuthService} from '../../../../../../services/auth.service';
import {CartaoCliente} from '../../../../../../model/cartao-cliente.module';

@Component({
  selector: 'app-meio-de-pagamento',
  templateUrl: './meio-de-pagamento.component.html',
  styleUrls: ['./meio-de-pagamento.component.css']
})
export class MeioDePagamentoComponent implements OnInit {

  constructor(public dialog: MatDialog, private cartaoClienteService: CartaoClienteService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  openDialogCartao() {
    this.dialog.open(DialogCartaoComponent, {
      width: '50%',
      data: {cadastrar: 1} // Abrir diretamente na tela de cadastrado
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
