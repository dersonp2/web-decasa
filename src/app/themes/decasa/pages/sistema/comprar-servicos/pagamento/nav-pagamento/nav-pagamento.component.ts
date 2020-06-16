import { MatDialog } from '@angular/material/dialog';
import { DialogCartaoComponent } from './../../../../../blocos/dialog/dialog-cartao/dialog-cartao.component';
import { CartaoCliente } from './../../../../../../../model/cartao-cliente.module';
import { CartaoClienteService } from './../../../../../../../services/cartao-cliente.service';
import { AuthService } from './../../../../../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreditCardValidators } from 'angular-cc-library';


@Component({
  selector: 'app-nav-pagamento',
  templateUrl: './nav-pagamento.component.html',
  styleUrls: ['./nav-pagamento.component.css']
})
export class NavPagamentoComponent implements OnInit {

  public mesMask = [/\d/, /\d/];
  // numeroMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' '];
  form: FormGroup;
  cartao: CartaoCliente = new CartaoCliente();
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
  }

  getCartaoPrincipal() {
    this.cartaoClienteService.buscarCartaoPrincipal(this.authService.getUser().id).subscribe(
      (data) => {
        this.cartao = data;
      },
      (error) => { this.openModal(); }
    );
  }

  onSubmit(xt) {
    console.log(this.form.value);
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogCartaoComponent, {
      width: '50%',
      data: { cartao: this.cartao }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.cartao = result;
      }
    });
  }

}
