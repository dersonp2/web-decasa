import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-perfil',
  templateUrl: './detalhe-perfil.component.html',
  styleUrls: ['./detalhe-perfil.component.css']
})
export class DetalhePerfilComponent implements OnInit {

  // 1 - Escolher | 2-Agendado | 3 - Andamento
  @Input() displayBtn;

  displayCertificados = false;
  displayPortifolio = false;
  displayComentario = false;
  displayFuncionarios = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setDisplayCertificados() {
    this.displayCertificados = !this.displayCertificados;
  }

  setDisplayPortifolio() {
    this.displayPortifolio = !this.displayPortifolio;
  }

  setDisplayComentario() {
    this.displayComentario = !this.displayComentario;
  }

  setDisplayFuncionarios() {
    this.displayFuncionarios = !this.displayFuncionarios;
  }

}
