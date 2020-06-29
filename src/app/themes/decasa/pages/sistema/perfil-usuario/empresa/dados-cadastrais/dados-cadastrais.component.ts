import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../../../../../../services/cliente.service';
import {AuthService} from '../../../../../../../services/auth.service';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {

  public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  cnpjMask = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private clienteService: ClienteService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.clienteService.getClienteEmpresaDetalhes(this.authService.getUser().id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
