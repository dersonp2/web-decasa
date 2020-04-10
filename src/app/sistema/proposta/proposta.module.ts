import { MapPropostaComponent } from './map-proposta/map-proposta.component';
import { TabelaPropostaComponent } from './tabela-proposta/tabela-proposta.component';
import { PropostaComponent } from './proposta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// AGM - MAPS
import { AgmCoreModule } from '@agm/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    MatTableModule,
    MatFormFieldModule,
    TextMaskModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoVvj5lM77pVqV4EyRzJwIHoBK83MGumU'
    })
  ],
  exports: [],
  declarations: [
    PropostaComponent,
    TabelaPropostaComponent,
    MapPropostaComponent
  ],
  providers: [],
})

export class PropostaModule {

}
