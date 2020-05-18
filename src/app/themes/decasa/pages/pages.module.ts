import { PopoverModule } from 'ngx-smart-popover';
import { BlocosModule } from './../blocos/blocos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'


import { SistemaModule } from './sistema/sistema.module';
import { IndexComponent } from './index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageTestComponent } from './page-test/page-test.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { ListaGruposComponent } from './index/lista-grupos/lista-grupos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    IndexComponent,
    NotFoundComponent,
    PageTestComponent,
    ListaGruposComponent
  ],
  imports: [
    CommonModule,
    SistemaModule,
    PopoverModule,
    CarouselModule,

    BlocosModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class PagesModule { }
