import { BlocosModule } from './../blocos/blocos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    BlocosModule,
    MatStepperModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
