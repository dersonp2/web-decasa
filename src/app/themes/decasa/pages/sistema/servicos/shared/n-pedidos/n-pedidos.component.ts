import { ClienteOrcamento } from '../../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoEvent } from '../../../../../../../events/orcamento-event';
import { MunicipioService } from '../../../../../../../services/municipio.service';
import { OrcamentoService } from '../../../../../../../services/orcamento.service';
import { Municipio } from '../../../../../../../model/municipio.module';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {AuthService} from '../../../../../../../services/auth.service';


export class Pedido {
  id: number;
  pedido: string;

  constructor(id, pedido) {
    this.id = id;
    this.pedido = pedido;
  }

}


@Component({
  selector: 'app-n-pedidos',
  templateUrl: './n-pedidos.component.html',
  styleUrls: ['./n-pedidos.component.css']
})
export class NPedidosComponent implements OnInit {
  // 1 - Escolher | 2 - Agendado | 3 - Andamento | 4 - Finalizados
  @Input() orcamento;
  displayedColumns: string[] = ['pedidos'];
  dataSource = new MatTableDataSource<Pedido>();
  clienteOrcamento: ClienteOrcamento[];
  orcamentoSelected: ClienteOrcamento;
  pedidos: Pedido[] = [];
  municipio: Municipio;
  selectedId;
  clientId;

  constructor(private orcamentoService: OrcamentoService, private municipioService: MunicipioService,
              private orcamentoEvent: OrcamentoEvent, private authService: AuthService) { }

  ngOnInit(): void {
    this.searchMunicipioAndClient();
    switch (this.orcamento) {
      case 1: {
        this.getOrcamentosEscolher();
        break;
      }
      case 2: {
        this.getOrcamentosAgendados();
        break;
      }
      case 3: {
        this.getOrcamentosExecucao();
        break;
      }
      case 4: {
        this.getOrcamentosFinalizados();
        break;
      }
    }

  }

  searchMunicipioAndClient() {
    this.clientId = this.authService.getUser().id;
    const municipioId = localStorage.getItem('municipioId');
    this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
      (data) => { this.municipio = data; },
      (error) => (console.log(error))
    );
  }

  // Pegar os Orçamentos  para escolher Prestador
  getOrcamentosEscolher() {
    this.orcamentoService.buscarClienteOrcamentosEscolher(this.clientId).subscribe(
      (data) => { this.clienteOrcamento = data; this.setPedidos(); }
    );
  }

  getOrcamentosAgendados() {
    this.orcamentoService.buscarClienteOrcamentosAgendados(this.clientId).subscribe(
      (data) => { this.clienteOrcamento = data; this.setPedidos(); }
    );
  }

  getOrcamentosExecucao() {
    this.orcamentoService.buscarClienteOrcamentosExecucao(this.clientId).subscribe(
      (data) => { this.clienteOrcamento = data; this.setPedidos(); }
    );
  }

  getOrcamentosFinalizados() {
    this.orcamentoService.buscarClienteOrcamentosFinalizados(this.clientId).subscribe(
      (data) => { this.clienteOrcamento = data; this.setPedidos(); }
    );
  }

  setPedidos() {
    this.clienteOrcamento.forEach(e => {
      const pedido = `BRA${e.id}${e.cidade.substring(0, 3)}`;
      this.pedidos.push(new Pedido(e.id, pedido));
    });
    this.dataSource.data = this.pedidos;
  }

  detalhesOrcamento(orcamentoId) {
    // tslint:disable-next-line:only-arrow-functions
    this.clienteOrcamento.forEach(e => {
      if (e.id === orcamentoId) {
        this.orcamentoSelected = e;
      }
    });
    this.selectedId = orcamentoId;
    switch (this.orcamento) {
      case 1: {
        break;
      }
      case 2: {
        this.orcamentoEvent.agendado(this.orcamentoSelected);
        break;
      }
      case 3: {
        this.orcamentoEvent.execucao(this.orcamentoSelected);
        break;
      }
      case 4: {
        console.log('4');
        this.orcamentoEvent.finalizado(this.orcamentoSelected);
        break;
      }
    }

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
