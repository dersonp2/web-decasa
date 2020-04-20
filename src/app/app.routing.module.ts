import { BoletosNotasComponent } from './sistema/boletos-notas/boletos-notas.component';
import { MeioDePagamentoComponent } from './sistema/perfil-usuario/meio-de-pagamento/meio-de-pagamento.component';
import { EnderecoComponent } from './sistema/perfil-usuario/endereco/endereco.component';
import { OutrosMembrosComponent } from './sistema/perfil-usuario/empresa/outros-membros/outros-membros.component';
import { DadosPessoaisComponent } from './sistema/perfil-usuario/meu-perfil/dados-pessoais/dados-pessoais.component';
import { AndamentoComponent } from './sistema/servicos/andamento/andamento.component';
import { FinalizadosComponent } from './sistema/servicos/finalizados/finalizados.component';
import { AgendadoComponent } from './sistema/servicos/agendado/agendado.component';
import { SenhaComponent } from './sistema/perfil-usuario/meu-perfil/senha/senha.component';

import { PageTestComponent } from './page-test/page-test.component';
import { PagamentoComponent } from './sistema/pagamento/pagamento.component';
import { PropostaComponent } from './sistema/proposta/proposta.component';
import { QuantidadeComponent } from './sistema/quantidade/quantidade.component';
import { NotFoundComponent } from './sistema/not-found/not-found.component';
import { NgModule } from '@angular/core';

import { OrcamentoComponent } from './sistema/orcamento/orcamento.component';
import { CadastroComponent } from './sistema/cadastro/cadastro.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SelecionarFornecedorComponent } from './sistema/servicos/selecionar-fornecedor/selecionar-fornecedor.component';
import { DadosCadastraisComponent } from './sistema/perfil-usuario/empresa/dados-cadastrais/dados-cadastrais.component';

const appRoutes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: '', component: IndexComponent },
  { path: 'criar-conta', component: CadastroComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'quantidade', component: QuantidadeComponent },
  { path: 'proposta', component: PropostaComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'escolher', component: SelecionarFornecedorComponent },
  { path: 'agendados', component: AgendadoComponent },
  { path: 'andamento', component: AndamentoComponent },
  { path: 'finalizados', component: FinalizadosComponent },
  { path: 'dados-pessoais', component: DadosPessoaisComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'dados-cadastrais', component: DadosCadastraisComponent },
  { path: 'outros-membros', component: OutrosMembrosComponent  },
  { path: 'endereco', component: EnderecoComponent  },
  { path: 'meios-de-pagamento', component: MeioDePagamentoComponent},
  { path: 'boletos-notas', component: BoletosNotasComponent},
  { path: 'teste', component: PageTestComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
