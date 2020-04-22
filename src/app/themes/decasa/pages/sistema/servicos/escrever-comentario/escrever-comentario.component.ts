import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escrever-comentario',
  templateUrl: './escrever-comentario.component.html',
  styleUrls: ['./escrever-comentario.component.css']
})
export class EscreverComentarioComponent implements OnInit {
  comentario = '';

  comentarios = [
    {texto: 'Fornecedor super pontual.'},
    {texto: 'Me senti super seguro.'},
    {texto: 'Ele é muito cordial e educado.'},
    {texto: 'Atendimento exclente.'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  adicionar(comentario: string) {
    this.comentario += ' ' + comentario;
  }
}
