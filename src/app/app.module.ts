import { DialogModule } from './themes/decasa/blocos/dialog/dialog.module';
import { OrcamentoComponent } from './themes/decasa/pages/sistema/comprar-servicos/orcamento/orcamento.component';

import { BoletosNotasComponent } from './themes/decasa/pages/sistema/boletos-notas/boletos-notas.component';
import { TabelaPospagoComponent } from './themes/decasa/pages/sistema/perfil-usuario/meio-de-pagamento/tabela-pospago/tabela-pospago.component';
import { TabelaPrepagoComponent } from './themes/decasa/pages/sistema/perfil-usuario/meio-de-pagamento/tabela-prepago/tabela-prepago.component';
import { TabelaCartoesComponent } from './themes/decasa/pages/sistema/perfil-usuario/meio-de-pagamento/tabela-cartoes/tabela-cartoes.component';
import { MeioDePagamentoComponent } from './themes/decasa/pages/sistema/perfil-usuario/meio-de-pagamento/meio-de-pagamento.component';

import { ListaEnderecosComponent } from './themes/decasa/pages/sistema/perfil-usuario/endereco/lista-enderecos/lista-enderecos.component';
import { TabelaMembroComponent } from './themes/decasa/pages/sistema/perfil-usuario/empresa/outros-membros/tabela-membro/tabela-membro.component';
import { EnderecoComponent } from './themes/decasa/pages/sistema/perfil-usuario/endereco/endereco.component';
import { OutrosMembrosComponent } from './themes/decasa/pages/sistema/perfil-usuario/empresa/outros-membros/outros-membros.component';
import { SenhaComponent } from './themes/decasa/pages/sistema/perfil-usuario/meu-perfil/senha/senha.component';
import { DadosPessoaisComponent } from './themes/decasa/pages/sistema/perfil-usuario/meu-perfil/dados-pessoais/dados-pessoais.component';
import { NavVerticalPerfilComponent } from './themes/decasa/blocos/nav/nav-vertical-perfil/nav-vertical-perfil.component';
import { CertificadosComponent } from './themes/decasa/pages/sistema/servicos/shared/certificados/certificados.component';
import { AndamentoComponent } from './themes/decasa/pages/sistema/servicos/andamento/andamento.component';
import { EscreverComentarioComponent } from './themes/decasa/pages/sistema/servicos/finalizados/escrever-comentario/escrever-comentario.component';
import { AvaliacaoComponent } from './themes/decasa/pages/sistema/servicos/finalizados/avaliacao/avaliacao.component';
import { FinalizadosComponent } from './themes/decasa/pages/sistema/servicos/finalizados/finalizados.component';
import { CardFuncionarioComponent } from './themes/decasa/pages/sistema/servicos/shared/card-funcionario/card-funcionario.component';
import { EmailComponent } from './themes/decasa/pages/sistema/servicos/shared/email/email.component';
import { AgendadoComponent } from './themes/decasa/pages/sistema/servicos/agendado/agendado.component';
import { DetalhePerfilComponent } from './themes/decasa/pages/sistema/servicos/shared/detalhe-perfil/detalhe-perfil.component';
import { NPedidosComponent } from './themes/decasa/pages/sistema/servicos/shared/n-pedidos/n-pedidos.component';
import { PageTestComponent } from './themes/decasa/pages/page-test/page-test.component';
import { NavVerticalComponent } from './themes/decasa/blocos/nav/nav-vertical/nav-vertical.component';
import { TabelaComponent } from './themes/decasa/pages/sistema/comprar-servicos/orcamento/tabela-orcamento/tabela.component';
import { PropostaModule } from './themes/decasa/pages/sistema/comprar-servicos/proposta/proposta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavVerticalUsuarioComponent } from './themes/decasa/blocos/nav/nav-vertical-usuario/nav-vertical-usuario.component';
import { NotFoundComponent } from './themes/decasa/pages/not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { IndexComponent } from './themes/decasa/pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './themes/decasa/pages/index/modal/modal.component';

import { NavHorizontalComponent } from './themes/decasa/blocos/nav/nav-horizontal/nav-horizontal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Angular material
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
// import {MatDialogModule} from '@angular/material/dialog';
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
import { QuantidadeComponent } from './themes/decasa/pages/sistema/comprar-servicos/quantidade/quantidade.component';
import { TabelaQuantidadeComponent } from './themes/decasa/pages/sistema/comprar-servicos/quantidade/tabela-quantidade/tabela-quantidade.component';
import { PagamentoComponent } from './themes/decasa/pages/sistema/comprar-servicos/pagamento/pagamento.component';
import { NavPagamentoComponent } from './themes/decasa/pages/sistema/comprar-servicos/pagamento/nav-pagamento/nav-pagamento.component';
import { CadastroComponent } from './themes/decasa/pages/sistema/cadastro/cadastro.component';
import { LoginComponent } from './themes/decasa/blocos/login/login.component';
registerLocaleData(ptBr);

// Rating module
import { StarRatingModule } from '@sreyaj/ng-star-rating';

// Mask
import { TextMaskModule } from 'angular2-text-mask';
// OWL CAROUSEL
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PortifolioComponent } from './themes/decasa/pages/sistema/servicos/shared/portifolio/portifolio.component';
import { ComentariosComponent } from './themes/decasa/pages/sistema/servicos/shared/comentarios/comentarios.component';
import { DadosServicoComponent } from './themes/decasa/pages/sistema/servicos/shared/dados-servico/dados-servico.component';
import { PerfilComponent } from './themes/decasa/pages/sistema/servicos/shared/perfil/perfil.component';
import { SelecionarFornecedorComponent } from './themes/decasa/pages/sistema/servicos/selecionar-fornecedor/selecionar-fornecedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Scroll
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DadosCadastraisComponent } from './themes/decasa/pages/sistema/perfil-usuario/empresa/dados-cadastrais/dados-cadastrais.component';



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
    NavVerticalPerfilComponent,
    DadosPessoaisComponent,
    SenhaComponent,
    DadosCadastraisComponent,
    OutrosMembrosComponent,
    EnderecoComponent,
    TabelaMembroComponent,
    ListaEnderecosComponent,
    MeioDePagamentoComponent,
    TabelaCartoesComponent,
    TabelaPrepagoComponent,
    TabelaPospagoComponent,
    BoletosNotasComponent,
  ],
  imports: [
    BrowserModule,

    DialogModule,
    PropostaModule,


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
    MatToolbarModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
