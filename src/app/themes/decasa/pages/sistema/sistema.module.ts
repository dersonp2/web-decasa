import { BlocosModule } from './../../blocos/blocos.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosModule } from './servicos/servicos.module';
import { PerfilUsuarioModule } from './perfil-usuario/perfil-usuario.module';
import { BoletosNotasComponent } from './boletos-notas/boletos-notas.component';
import { ComprarServicosModule } from './comprar-servicos/comprar-servicos.module';

import { TextMaskModule } from 'angular2-text-mask';

import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from 'src/app/app.routing.module';

@NgModule({
  declarations: [
    BoletosNotasComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule,
    TextMaskModule,

    BlocosModule,
    ComprarServicosModule,
    ServicosModule,
    PerfilUsuarioModule
  ]
})
export class SistemaModule { }
