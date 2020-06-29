import { OrcamentoComponent } from './themes/decasa/pages/sistema/comprar-servicos/orcamento/orcamento.component';
import { IndexComponent } from './themes/decasa/pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: IndexComponent  },
  { path: '', component: IndexComponent  },
  { path: 'orcamento', component: OrcamentoComponent  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
