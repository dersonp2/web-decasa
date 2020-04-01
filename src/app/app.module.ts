import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './index/modal/modal.component';
import { OrcamentoComponent } from './sistema/orcamento/orcamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavVerticalComponent } from './sistema/nav-vertical/nav-vertical.component';
import { NavHorizontalComponent } from './sistema/nav-horizontal/nav-horizontal.component';
import { TabelaComponent } from './sistema/tabela-orcamento/tabela.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Angular material
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
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
import { TabelaQuantidadeComponent } from './sistema/tabela-quantidade/tabela-quantidade.component';
registerLocaleData(ptBr);


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
    TabelaQuantidadeComponent
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
    MatTooltipModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
