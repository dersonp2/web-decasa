import { CarrinhoEvent } from './../../../../../events/carrinho-event';
import { ServicoElement } from './../../../../../model/element/servico.element';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-carrinho',
  templateUrl: './nav-carrinho.component.html',
  styleUrls: ['./nav-carrinho.component.css']
})
export class NavCarrinhoComponent implements OnInit {
  @Input() exibirMenu;
  servicosSelecionados: ServicoElement[] = [];
  constructor(private carrinhoService: CarrinhoEvent) {
    carrinhoService.alteracao$.subscribe(
      (data) => { this.getServicosElement()}
    );
  }

  ngOnInit(): void {
    this.getServicosElement();
  }

  getServicosElement() {
    if (localStorage.hasOwnProperty('servicosSelecionados')) {
      this.servicosSelecionados = JSON.parse(localStorage.getItem('servicosSelecionados'));
    }
  }

  deleteElement(servico) {
    // Remove
    this.servicosSelecionados.splice(this.servicosSelecionados.indexOf(servico), 1);
    //
    localStorage.setItem('servicosSelecionados', JSON.stringify(this.servicosSelecionados));
  }

}
