import { PrestadorResponse } from './../../../../../../../model/response/prestador-response.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {

  comentario = '';

  comentarios = [
    { texto: 'Fornecedor super pontual.' },
    { texto: 'Me senti super seguro.' },
    { texto: 'Ele é muito cordial e educado.' },
    { texto: 'Atendimento exclente.' }
  ];

  @Input() prestadores: PrestadorResponse[];
  constructor() { }


  adicionar(comentario: string) {
    this.comentario += ' ' + comentario;
  }
}
