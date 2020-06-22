import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {EnderecoService} from '../../../../../services/endereco.service';
import {AuthService} from '../../../../../services/auth.service';
import {EnderecoCliente} from '../../../../../model/endereco-cliente.module';

@Component({
  selector: 'app-diaolog-endereco',
  templateUrl: './diaolog-endereco.component.html',
  styleUrls: ['./diaolog-endereco.component.css']
})
export class DiaologEnderecoComponent implements OnInit {

  displayedColumns: string[] = ['municipio', 'rua', 'numero', 'opc'];
  enderecosCliente: EnderecoCliente[] = [];
  municipioId;
  constructor(public dialogRef: MatDialogRef<DiaologEnderecoComponent>,
              private enderecoService: EnderecoService, private authService: AuthService) {
  }

  ngOnInit() {
    this.getAllAddress();
    this.municipioId = Number(localStorage.getItem('municipioId'));
  }

  getAllAddress() {
    this.enderecoService.getAddressClientId(this.authService.getUser().id).subscribe(
      (data) => {
        this.enderecosCliente = data;
        console.log(data);
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

}
