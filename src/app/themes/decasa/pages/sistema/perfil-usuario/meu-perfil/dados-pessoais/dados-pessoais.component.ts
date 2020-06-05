import { ClienteService } from './../../../../../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ClienteDetalhesResponse } from 'src/app/model/response/cliente-detalhes-response.module';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  cpfMask = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];

  cliente: ClienteDetalhesResponse = new ClienteDetalhesResponse();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getDadosCliente();
  }

  getDadosCliente() {
    this.clienteService.getClienteDetalhes(2054).subscribe(
      (data) => {this.cliente = data; console.log(this.cliente); }
    );
  }

}
