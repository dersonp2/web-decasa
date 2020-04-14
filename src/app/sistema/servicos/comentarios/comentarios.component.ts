import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  listComentarios = [
    {
      usuario: 'Carlos Silva',
      comentario: 'Muito bom',
      rating: 5
    },
    {
      usuario: 'Joana Costa',
      comentario: 'Atencioso',
      rating: 5
    },
    {
      usuario: 'Ulisses Pereira',
      comentario: 'Trabalho excelente',
      rating: 4
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
