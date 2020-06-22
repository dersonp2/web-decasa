import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../../../model/cliente.module';
import { CreditCardValidators } from 'angular-cc-library';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CartaoCliente } from '../../../../../model/cartao-cliente.module';
import { AuthService } from '../../../../../services/auth.service';
import { CartaoClienteService } from '../../../../../services/cartao-cliente.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-cartao',
  templateUrl: './dialog-cartao.component.html',
  styleUrls: ['./dialog-cartao.component.css']
})
export class DialogCartaoComponent implements OnInit {

  cadastrarCartao = false;
  disabledButton = false;
  displayedColumns: string[] = ['nome', 'numero', 'bandeira', 'opc'];
  cartoes: CartaoCliente[] = [];
  form: FormGroup;
  cartao: CartaoCliente = new CartaoCliente();

  // tslint:disable-next-line:variable-name
  constructor(public dialogRef: MatDialogRef<DialogCartaoComponent>, private cartaoClienteService: CartaoClienteService, private authService: AuthService, private fb: FormBuilder, private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.form = this.fb.group(
      {
        creditCard: ['', [CreditCardValidators.validateCCNumber]],
        expirationDate: ['', [CreditCardValidators.validateExpDate, Validators.minLength(9), Validators.required]],
        nome: ['', [Validators.required]],
        // cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
      });
    this.buscarCartoes();
  }

  close(): void {
    this.dialogRef.close();
  }

  buscarCartoes() {
    this.cartaoClienteService.buscarCartoes(this.authService.getUser().id).subscribe(
      (data) => {
        this.cartoes = data;
        if (this.cartoes.length === 0) {
          this.cadastrarCartao = true;
        }
      },
      (error) => {
        console.log(error);
        this.showSnackBar('Nenhum cartão encontrado!!!', 'orange-snackbar');
      }
    );
  }

  salvarCartao(bandeira) {
    this.disabledButton = true;
    this.cartao.cliente = new Cliente(this.authService.getUser().id);;
    this.cartao.nomeCartao = this.form.get('nome').value.toUpperCase();
    this.cartao.numeroCartao = this.form.get('creditCard').value.replace(/\s/g, '');
    this.cartao.validadeCartao = this.form.get('expirationDate').value.replace(/\s/g, '');
    this.cartao.bandeira = bandeira._value;
    // this.cartao.codigoSegurancaCartao = this.form.get('cvc').value;
    // console.info(this.cartao);

    this.cartaoClienteService.salvarCartao(this.cartao).subscribe(
      (data) => {
        console.log(data);
        this.buscarCartoes();
        this.showCadastrarCartao();
        this.showSnackBar('Cadastrado com sucesso', 'blue-snackbar');
        this.disabledButton = false;
        this.form.reset();

      },
      (error) => {
        console.log(error);
        this.showSnackBar('Erro ao cadastrar o cartão.', 'orange-snackbar');
        this.disabledButton = false;
      }
    );
  }

  removerEspaco(texto) {
    return texto.replace(/\s/g, '');
  }

  showSnackBar(mensagem, cor) {
    this._snackBar.open(mensagem, '', {
      duration: 3000,
      panelClass: [cor]
    }
    );
  }

  showCadastrarCartao() {
    this.cadastrarCartao = !this.cadastrarCartao;
  }
}
