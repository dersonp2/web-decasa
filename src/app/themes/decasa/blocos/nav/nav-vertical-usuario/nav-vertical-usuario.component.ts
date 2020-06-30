import {Component, OnInit} from '@angular/core';
import {OrcamentoService} from '../../../../../services/orcamento.service';
import {AuthService} from '../../../../../services/auth.service';
import {TotalOrcamento} from '../../../../../model/response/total-orcamento-response.module';

@Component({
  selector: 'app-nav-vertical-usuario',
  templateUrl: './nav-vertical-usuario.component.html',
  styleUrls: ['./nav-vertical-usuario.component.css']
})
export class NavVerticalUsuarioComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
