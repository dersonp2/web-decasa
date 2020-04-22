import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app.routing.module';

import { LoginComponent } from './login/login.component';
import { DialogModule } from './dialog/dialog.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    DialogModule,
    AppRoutingModule
  ],
  exports: [
    LoginComponent,
    NavModule,
    DialogModule
  ]
})
export class BlocosModule { }
