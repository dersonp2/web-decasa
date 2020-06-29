import {Component, OnInit} from '@angular/core';
import {CartaoClienteService} from '../../../../../../../services/cartao-cliente.service';
import {AuthService} from '../../../../../../../services/auth.service';
import {CartaoCliente} from '../../../../../../../model/cartao-cliente.module';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface PeriodicElement {
  bandeira: string;
  numero: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {bandeira: 'fab fa-cc-mastercard fa-lg', numero: '4400 **** **** 5609'},
  {bandeira: 'fab fa-cc-visa fa-lg', numero: '0254 **** **** 9865'},
];

@Component({
  selector: 'app-tabela-cartoes',
  templateUrl: './tabela-cartoes.component.html',
  styleUrls: ['./tabela-cartoes.component.css']
})
export class TabelaCartoesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'numero', 'bandeira', 'opc'];
  cartoes: CartaoCliente[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private cartaoClienteService: CartaoClienteService, private authService: AuthService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.buscarCartoes();
  }

  buscarCartoes() {
    this.cartaoClienteService.buscarCartoes(this.authService.getUser().id).subscribe(
      (data) => {
        this.cartoes = data;
        console.log(this.cartoes);
      },
      (error) => {
        console.log(error);
        // this.showSnackBar('Nenhum cartão encontrado!!!', 'orange-snackbar');
      }
    );
  }


  deleteCard(cardId) {
    console.log(cardId);
    this.cartaoClienteService.deleteCard(cardId).subscribe(
      (data) => {
        console.log(data);
        this.showSnackBar('Cartão excluído com sucesso!!!', 'blue-snackbar');
        this.buscarCartoes();
      },
      (error) => {
        if (error.status === 404) {
          this.showSnackBar('Cartão não encontrado!!!', 'orange-snackbar');
        } else {
          this.showSnackBar('Ocorreu um erro!!!', 'orange-snackbar');

        }
      }
    );
  }

  showSnackBar(mensagem, cor) {
    this._snackBar.open(mensagem, '', {
        duration: 3000,
        panelClass: [cor]
      }
    );
  }
}
