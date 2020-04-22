import { GruposService } from './grupos.service';
import { Component, OnInit } from '@angular/core';
import { Grupo } from './model/grupo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  grupos: any [];
  isDisplay = true;
  constructor(private gruposService: GruposService) { }

  ngOnInit(): void {
    this.listarGrupos();
  }

  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }

  listarGrupos() {
    this.gruposService.listarGrupos().subscribe(data => this.grupos = data);
    console.log("clicou");
  }
}
