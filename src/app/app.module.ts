import { NotFoundComponent } from './sistema/not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './index/modal/modal.component';
import { OrcamentoComponent } from './sistema/orcamento/orcamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavVerticalComponent } from './sistema/nav-vertical/nav-vertical.component';
import { NavHorizontalComponent } from './sistema/nav-horizontal/nav-horizontal.component';
import { TabelaComponent } from './sistema/orcamento/tabela-orcamento/tabela.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Angular material
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
// AGM - MAPS
import { AgmCoreModule } from '@agm/core';
//Data
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
//Hora
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
//Stepper
import { MatStepperModule } from '@angular/material/stepper';
//Tolltip
import {MatTooltipModule} from '@angular/material/tooltip';
//Brasil
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { QuantidadeComponent } from './sistema/quantidade/quantidade.component';
import { TabelaQuantidadeComponent } from './sistema/quantidade/tabela-quantidade/tabela-quantidade.component';
import { PropostaComponent } from './sistema/proposta/proposta.component';
import { TabelaPropostaComponent } from './sistema/proposta/tabela-proposta/tabela-proposta.component';
import { MapPropostaComponent } from './sistema/proposta/map-proposta/map-proposta.component';
import { PagamentoComponent } from './sistema/pagamento/pagamento.component';
import { NavPagamentoComponent } from './sistema/pagamento/nav-pagamento/nav-pagamento.component';
import { CadastroComponent } from './sistema/cadastro/cadastro.component';
import { LoginComponent } from './sistema/login/login.component';
registerLocaleData(ptBr);

// Mask
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModalComponent,
    OrcamentoComponent,
    NavVerticalComponent,
    NavHorizontalComponent,
    TabelaComponent,
    QuantidadeComponent,
    TabelaQuantidadeComponent,
    PropostaComponent,
    TabelaPropostaComponent,
    MapPropostaComponent,
    PagamentoComponent,
    NavPagamentoComponent,
    CadastroComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    AppRoutingModule,
    TextMaskModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoVvj5lM77pVqV4EyRzJwIHoBK83MGumU'
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
