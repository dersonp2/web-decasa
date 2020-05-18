import { UfService } from './../../../../../services/uf.service';
import { Uf } from './../../../../../model/uf.module';
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
export class DialogLocalizacaoComponent implements OnInit {
  selectedEstado: string;
  selectedCidade: string;

  estados: Uf[];

  municipios: Municipio[];

  constructor(public dialogRef: MatDialogRef<DialogLocalizacaoComponent>, private municipioService: MunicipioService, private ufService: UfService ) { }

  ngOnInit(): void {
    this.getEstados();
  }

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
  getEstados() {
    this.ufService.getAllUf().subscribe(
      (data) => { (this.estados = data); }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

}
