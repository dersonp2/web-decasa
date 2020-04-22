import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextMaskModule } from 'angular2-text-mask';
import { AgmCoreModule } from '@agm/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { OrcamentoComponent } from './orcamento/orcamento.component';
import { TabelaComponent } from './orcamento/tabela-orcamento/tabela.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { QuantidadeComponent } from './quantidade/quantidade.component';
import { PropostaComponent } from './proposta/proposta.component';
import { MapPropostaComponent } from './proposta/map-proposta/map-proposta.component';
import { NavPagamentoComponent } from './pagamento/nav-pagamento/nav-pagamento.component';
import { TabelaPropostaComponent } from './proposta/tabela-proposta/tabela-proposta.component';
import { TabelaQuantidadeComponent } from './quantidade/tabela-quantidade/tabela-quantidade.component';

import { BlocosModule } from './../../../blocos/blocos.module';

@NgModule({
  declarations: [
    OrcamentoComponent,
    TabelaComponent,
    PagamentoComponent,
    NavPagamentoComponent,
    QuantidadeComponent,
    TabelaQuantidadeComponent,
    PropostaComponent,
    TabelaPropostaComponent,
    MapPropostaComponent
  ],
  imports: [
    CommonModule,

    MatTableModule,
    MatFormFieldModule,
    TextMaskModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoVvj5lM77pVqV4EyRzJwIHoBK83MGumU'
    }),

    BlocosModule
  ]
})
export class ComprarServicosModule { }
