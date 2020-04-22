import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogAnexarComponent } from './dialog-anexar/dialog-anexar.component';
import { DialogCartaoComponent } from './dialog-cartao/dialog-cartao.component';
import { DialogComprovanteComponent } from './dialog-comprovante/dialog-comprovante.component';
import { DialogCreditoComponent } from './dialog-credito/dialog-credito.component';
import { DialogMembrosComponent } from './dialog-membros/dialog-membros.component';
import { DialogServicosComponent } from './dialog-servicos/dialog-servicos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DialogAnexarComponent,
    DialogCartaoComponent,
    DialogComprovanteComponent,
    DialogCreditoComponent,
    DialogMembrosComponent,
    DialogServicosComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    DialogAnexarComponent,
    DialogCartaoComponent,
    DialogComprovanteComponent,
    DialogCreditoComponent,
    DialogMembrosComponent,
    DialogServicosComponent
  ],
  entryComponents: [DialogMembrosComponent,
    DialogAnexarComponent, DialogServicosComponent,
    DialogComprovanteComponent,
    DialogCreditoComponent, DialogCartaoComponent],
})
export class DialogModule { }
