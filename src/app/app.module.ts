import { ComentariosComponent } from './sistema/selecionar-fornecedor/comentarios/comentarios.component';
import { PortifolioComponent } from './sistema/selecionar-fornecedor/portifolio/portifolio.component';
import { PageTestComponent } from './page-test/page-test.component';
import { NavVerticalComponent } from './sistema/nav-vertical/nav-vertical.component';
import { OrcamentoComponent } from './sistema/orcamento/orcamento.component';
import { TabelaComponent } from './sistema/orcamento/tabela-orcamento/tabela.component';
import { PropostaModule } from './sistema/proposta/proposta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelecionarFornecedorComponent } from './sistema/selecionar-fornecedor/selecionar-fornecedor.component';
import { NavVerticalUsuarioComponent } from './sistema/nav-vertical-usuario/nav-vertical-usuario.component';
import { NotFoundComponent } from './sistema/not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './index/modal/modal.component';

import { NavHorizontalComponent } from './sistema/nav-horizontal/nav-horizontal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Angular material
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';


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
import { PagamentoComponent } from './sistema/pagamento/pagamento.component';
import { NavPagamentoComponent } from './sistema/pagamento/nav-pagamento/nav-pagamento.component';
import { CadastroComponent } from './sistema/cadastro/cadastro.component';
import { LoginComponent } from './sistema/login/login.component';
registerLocaleData(ptBr);

// Orçamento


// Mask
import { TextMaskModule } from 'angular2-text-mask';
// OWL CAROUSEL
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ModalComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    QuantidadeComponent,
    TabelaQuantidadeComponent,
    PagamentoComponent,
    NavPagamentoComponent,
    CadastroComponent,
    LoginComponent,
    NotFoundComponent,
    NavVerticalUsuarioComponent,
    SelecionarFornecedorComponent,
    TabelaComponent,
    OrcamentoComponent,
    PageTestComponent,
    PortifolioComponent,
    ComentariosComponent
  ],
  imports: [
    PropostaModule,
    BrowserModule,
    TabViewModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    AppRoutingModule,
    TextMaskModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
