import { MunicipioService } from './../../../../../../services/municipio.service';
import { Municipio } from './../../../../../../model/municipio.module';
import { element } from 'protractor';
import { ClienteOrcamento } from './../../../../../../model/response/cliente-orcamento.module';
import { OrcamentoService } from './../../../../../../services/orcamento.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  pedido: string;
}

export class Pedido {
  pedido: string;
  constructor(pedido) {
    this.pedido = pedido;
  }
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { pedido: 'BRA123456MA' },
//   { pedido: 'BRA123457MA' },
//   { pedido: 'BRA123458MA' },
//   { pedido: 'BRA123459MA' }
// ];

@Component({
  selector: 'app-selecionar-fornecedor',
  templateUrl: './selecionar-fornecedor.component.html',
  styleUrls: ['./selecionar-fornecedor.component.css']
})
export class SelecionarFornecedorComponent implements OnInit {

  displayedColumns: string[] = ['pedidos'];
  dataSource = new MatTableDataSource<Pedido>();
  clienteOrcamento: ClienteOrcamento[];
  pedidos: Pedido[] = [];
  municipio: Municipio;

  constructor(private orcamentoService: OrcamentoService, private municipioService: MunicipioService) { }

  ngOnInit(): void {
    this.buscarMunicipio();
    this.getOrcamentosPendentes();
  }

  buscarMunicipio() {
    const municipioId = localStorage.getItem('municipioId');
    this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
      (data) => { this.municipio = data; },
      (error) => (console.log(error))
    );
  }
  getOrcamentosPendentes() {
    this.orcamentoService.buscarClienteOrcamentosEscolher(2054).subscribe(
      (data) => { this.clienteOrcamento = data; this.setPedidos(); }
    );
  }

  setPedidos() {
    // console.info(this.clienteOrcamento);
    this.clienteOrcamento.forEach(e => {
      const pedido = `BRA${e.id}${e.cidade.substring(0, 3)}`;
      this.pedidos.push(new Pedido(pedido));
    });
    this.dataSource.data = this.pedidos;
    console.log(this.pedidos);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
