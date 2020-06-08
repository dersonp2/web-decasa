import { AuthService } from './../../../../../../services/auth.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(public authService: AuthService) {
  }
  ngOnInit() {
    if (!this.authService.check()) {
      alert('Faça o login ou crie sua conta para efetuar o pagamento');
    }
  }

}
