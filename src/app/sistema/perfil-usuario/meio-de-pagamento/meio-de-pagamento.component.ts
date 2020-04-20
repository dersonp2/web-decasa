import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meio-de-pagamento',
  templateUrl: './meio-de-pagamento.component.html',
  styleUrls: ['./meio-de-pagamento.component.css']
})
export class MeioDePagamentoComponent implements OnInit {

  public mesMask = [/\d/, /\d/];
  numeroMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' '];
  constructor() { }

  ngOnInit(): void {
  }

}
