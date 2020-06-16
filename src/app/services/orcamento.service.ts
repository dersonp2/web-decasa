import { Orcamento } from './../model/orcamento.module';
import { ClienteOrcamento } from './../model/response/cliente-orcamento.module';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { OrcamentoResponse } from '../model/orcamento-response.module';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  // Salva um orcamento e retorna um oramento response
  salvarOrcamento(orcamento: Orcamento): Observable<OrcamentoResponse> {
    return this.http.post<OrcamentoResponse>(`${this.apiUrl}/solicitarOrcamento`, orcamento);
  }

  buscarClienteOrcamentosEscolher(clienteId): Observable<ClienteOrcamento[]> {
    return this.http.get<ClienteOrcamento[]>
      (`${this.apiUrl}/clienteOrcamentosEscolher/${clienteId}`)
      .pipe(take(1));
  }

  buscarClienteOrcamentosAgendados(clienteId): Observable<ClienteOrcamento[]> {
    return this.http.get<ClienteOrcamento[]>
      (`${this.apiUrl}/clienteOrcamentosAgendados/${clienteId}`)
      .pipe(take(1));
  }

  buscarClienteOrcamentosExecucao(clienteId): Observable<ClienteOrcamento[]> {
    return this.http.get<ClienteOrcamento[]>
      (`${this.apiUrl}/clienteOrcamentosExecucao/${clienteId}`)
      .pipe(take(1));
  }

  buscarClienteOrcamentosFinalizados(clienteId): Observable<ClienteOrcamento[]> {
    return this.http.get<ClienteOrcamento[]>
      (`${this.apiUrl}/clienteOrcamentosFinalizados/${clienteId}`)
      .pipe(take(1));
  }

}
