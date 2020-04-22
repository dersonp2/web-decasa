import { Component, OnInit, Input } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() display;

  foods: Food[] = [
    {value: '1', viewValue: 'Maior Avaliação'},
    {value: '2', viewValue: 'Menor Avaliação'},
    {value: '3', viewValue: 'Mais Recentes'}
  ];

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
