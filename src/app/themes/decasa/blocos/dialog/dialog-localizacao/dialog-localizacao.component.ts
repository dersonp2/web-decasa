import { Municipio } from './../../../../../model/municipio.module';
import { MunicipioService } from './../../../../../services/municipio.service';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/model/municipio.module';
import { take } from 'rxjs/operators';

interface Estado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-localizacao',
  templateUrl: './dialog-localizacao.component.html',
  styleUrls: ['./dialog-localizacao.component.css']
})
export class DialogLocalizacaoComponent {
  selectedEstado: string;
  selectedCidade: string;

  estados: Estado[] = [
    {value: 'steak-0', viewValue: 'Ma'},
    {value: 'pizza-1', viewValue: 'PI'},
    {value: 'tacos-2', viewValue: 'RJ'}
  ];
  cidades: Estado[] = [
    {value: 'steak-0', viewValue: 'São Luís'},
    {value: 'pizza-1', viewValue: 'Codo'},
    {value: 'tacos-2', viewValue: 'Barra do Corda'}
  ];

  municipios: Municipio[];

  constructor(public dialogRef: MatDialogRef<DialogLocalizacaoComponent>, private municipioService: MunicipioService) { }

  getMunicipios() {
    this.municipioService.buscarMunicipiosAtivos().subscribe(
      (data) => { }
    );
  }

  getMunicipiosUf() {
    this.municipioService.buscarMunicipiosUfAtivos(this.selectedEstado).subscribe(
      (data) => {this.municipios = data; },
    );
  }

  close(): void {
    this.dialogRef.close();
  }

}
