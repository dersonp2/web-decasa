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

const appRoutes: Routes = [
  { path: 'home', component: IndexComponent  },
  { path: '', component: OrcamentoComponent  },
  { path: 'criar-conta', component: CadastroComponent  },
  { path: 'orcamento', component: OrcamentoComponent  },
  { path: 'quantidade', component: QuantidadeComponent  },
  { path: 'proposta', component: PropostaComponent  },
  { path: 'pagamento', component: PagamentoComponent  },
  { path: 'teste', component: PageTestComponent  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
