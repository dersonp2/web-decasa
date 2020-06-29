import { ClienteOrcamento } from './../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoEvent } from './../../../../../../events/orcamento-event';
import { Component, OnInit, Input } from '@angular/core';
import {DialogLoginComponent} from '../../../../blocos/dialog/dialog-login/dialog-login.component';
import {AuthService} from '../../../../../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.component.html',
  styleUrls: ['./andamento.component.css']
})
export class AndamentoComponent implements OnInit {

  @Input() nome: boolean;
  orcamentoSelected: ClienteOrcamento = new ClienteOrcamento();

  constructor(private orcamentoEvent: OrcamentoEvent, public authService: AuthService, public dialog: MatDialog) {
    orcamentoEvent.execucao$.subscribe(
      (data: ClienteOrcamento) => { (this.orcamentoSelected = data); }
    );
  }

  ngOnInit(): void {
    if (!this.authService.check()) {
      this.openModal();
    }
  }

  // Abre a dialog de login
  openModal() {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      disableClose: true
    });
  }


}
