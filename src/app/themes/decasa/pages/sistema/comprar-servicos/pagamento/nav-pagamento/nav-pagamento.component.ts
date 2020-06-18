import {MatDialog} from '@angular/material/dialog';
import {DialogCartaoComponent} from '../../../../../blocos/dialog/dialog-cartao/dialog-cartao.component';
import {CartaoCliente} from '../../../../../../../model/cartao-cliente.module';
import {CartaoClienteService} from '../../../../../../../services/cartao-cliente.service';
import {AuthService} from '../../../../../../../services/auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {CreditCardValidators} from 'angular-cc-library';
import {Orcamento} from '../../../../../../../model/orcamento.module';
import {PrestadorOrcamento} from '../../../../../../../model/prestador-orcamento.module';
import {Cliente} from '../../../../../../../model/cliente.module';


@Component({
  selector: 'app-nav-pagamento',
  templateUrl: './nav-pagamento.component.html',
  styleUrls: ['./nav-pagamento.component.css']
})
export class NavPagamentoComponent implements OnInit {

  form: FormGroup;
  cartao: CartaoCliente = new CartaoCliente();
  orcamento: Orcamento = new Orcamento();

  constructor(private fb: FormBuilder, private authService: AuthService, private cartaoClienteService: CartaoClienteService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        creditCard: ['', [CreditCardValidators.validateCCNumber]],
        expirationDate: ['', [CreditCardValidators.validateExpDate]],
        nome: ['', [Validators.required]],
        cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
      });
    this.getCartaoPrincipal();
    this.getOrcamento();
  }

  getCartaoPrincipal() {
    this.cartaoClienteService.buscarCartaoPrincipal(this.authService.getUser().id).subscribe(
      (data) => {
        this.cartao = data;
      },
      (error) => {
        this.openModal();
      }
    );
  }

  onSubmit(xt) {
    console.log(this.form.value);
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogCartaoComponent, {
      width: '50%',
      data: {cartao: this.cartao}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.cartao = result;
      }
    });
  }

  getOrcamento() {
    // TODO: criptografar
    if (localStorage.getItem('orcamento')) {
      this.orcamento = JSON.parse(atob(localStorage.getItem('orcamento')));
    }
    if (this.authService.check()) {
      const cliente = new Cliente();
      cliente.id = this.authService.getUser().id;
      this.orcamento.cliente = cliente;
      // tslint:disable-next-line:no-console
      console.info(this.orcamento);
      localStorage.setItem('orcamento', btoa(JSON.stringify(this.orcamento)));
    }
  }
}
