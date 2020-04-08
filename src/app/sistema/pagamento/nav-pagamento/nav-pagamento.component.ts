import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-pagamento',
  templateUrl: './nav-pagamento.component.html',
  styleUrls: ['./nav-pagamento.component.css']
})
export class NavPagamentoComponent implements OnInit {

  public mesMask = [/\d/, /\d/];
  numeroMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' '];
  constructor() { }

  ngOnInit(): void {
  }

}
