import { SenhaComponent } from './sistema/perfil-usuario/meu-perfil/senha/senha.component';
import { DadosPessoaisComponent } from './sistema/perfil-usuario/meu-perfil/dados-pessoais/dados-pessoais.component';
import { NavVerticalPerfilComponent } from './sistema/perfil-usuario/nav-vertical-perfil/nav-vertical-perfil.component';
import { DialogMembrosComponent } from './sistema/servicos/dialog/dialog-membros/dialog-membros.component';
import { DialogExemploComponent } from './dialog-exemplo/dialog-exemplo.component';
import { CertificadosComponent } from './sistema/servicos/certificados/certificados.component';
import { AndamentoComponent } from './sistema/servicos/andamento/andamento.component';
import { EscreverComentarioComponent } from './sistema/servicos/escrever-comentario/escrever-comentario.component';
import { AvaliacaoComponent } from './sistema/servicos/avaliacao/avaliacao.component';
import { FinalizadosComponent } from './sistema/servicos/finalizados/finalizados.component';
import { CardFuncionarioComponent } from './sistema/servicos/card-funcionario/card-funcionario.component';
import { EmailComponent } from './sistema/servicos/email/email.component';
import { AgendadoComponent } from './sistema/servicos/agendado/agendado.component';
import { DetalhePerfilComponent } from './sistema/servicos/detalhe-perfil/detalhe-perfil.component';
import { NPedidosComponent } from './sistema/servicos/n-pedidos/n-pedidos.component';
import { PageTestComponent } from './page-test/page-test.component';
import { NavVerticalComponent } from './sistema/nav-vertical/nav-vertical.component';
import { OrcamentoComponent } from './sistema/orcamento/orcamento.component';
import { TabelaComponent } from './sistema/orcamento/tabela-orcamento/tabela.component';
import { PropostaModule } from './sistema/proposta/proposta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';



// Data
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// Hora
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// Stepper
import { MatStepperModule } from '@angular/material/stepper';
// Tolltip
import {MatTooltipModule} from '@angular/material/tooltip';
// Brasil
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { QuantidadeComponent } from './sistema/quantidade/quantidade.component';
import { TabelaQuantidadeComponent } from './sistema/quantidade/tabela-quantidade/tabela-quantidade.component';
import { PagamentoComponent } from './sistema/pagamento/pagamento.component';
import { NavPagamentoComponent } from './sistema/pagamento/nav-pagamento/nav-pagamento.component';
import { CadastroComponent } from './sistema/cadastro/cadastro.component';
import { LoginComponent } from './sistema/login/login.component';
registerLocaleData(ptBr);

// Rating module
import { StarRatingModule } from '@sreyaj/ng-star-rating';

// Mask
import { TextMaskModule } from 'angular2-text-mask';
// OWL CAROUSEL
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PortifolioComponent } from './sistema/servicos/portifolio/portifolio.component';
import { ComentariosComponent } from './sistema/servicos/comentarios/comentarios.component';
import { DadosServicoComponent } from './sistema/servicos/dados-servico/dados-servico.component';
import { PerfilComponent } from './sistema/servicos/perfil/perfil.component';
import { SelecionarFornecedorComponent } from './sistema/servicos/selecionar-fornecedor/selecionar-fornecedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogAnexarComponent } from './sistema/servicos/dialog/dialog-anexar/dialog-anexar.component';

// Scroll
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


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
    TabelaComponent,
    OrcamentoComponent,
    PageTestComponent,
    SelecionarFornecedorComponent,
    PortifolioComponent,
    ComentariosComponent,
    DadosServicoComponent,
    PerfilComponent,
    NPedidosComponent,
    DetalhePerfilComponent,
    AgendadoComponent,
    EmailComponent,
    CardFuncionarioComponent,
    FinalizadosComponent,
    AvaliacaoComponent,
    EscreverComentarioComponent,
    AndamentoComponent,
    CertificadosComponent,
    DialogExemploComponent,
    DialogMembrosComponent,
    DialogAnexarComponent,
    NavVerticalPerfilComponent,
    DadosPessoaisComponent,
    SenhaComponent
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
    StarRatingModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatToolbarModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [DialogMembrosComponent,
    DialogAnexarComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
