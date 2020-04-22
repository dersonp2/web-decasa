
// Modulos
import { BlocosModule } from './themes/decasa/blocos/blocos.module';
import {PagesModule} from './themes/decasa/pages/pages.module';

import { HeaderComponent } from './themes/decasa/core/header/header.component';
import { NavbarComponent } from './themes/decasa/core/navbar/navbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

// Angular material
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';


// TODO: Apagar depois
// // Data
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// // Hora
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
// // Stepper
import { MatStepperModule } from '@angular/material/stepper';

// Tolltip
import {MatTooltipModule} from '@angular/material/tooltip';
// Brasil


// Rating module
import { StarRatingModule } from '@sreyaj/ng-star-rating';

// Mask
import { TextMaskModule } from 'angular2-text-mask';
// OWL CAROUSEL
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// Scroll
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,

    // Modules,
    BlocosModule,
    PagesModule,

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
