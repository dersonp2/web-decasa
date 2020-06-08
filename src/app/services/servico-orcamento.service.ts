import { ServicosOrcamento } from './../model/servico-orcamento.module';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Servico } from '../model/servico.module';

@Injectable({
  providedIn: 'root'
})
export class ServicoOrcamentoService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  // Pega a lista de serviços atualizada - podendo conter Visita técnica.
  getTotaldeServicos(servicoOrcamento: ServicosOrcamento[], municipioId: number): Observable<ServicosOrcamento[]> {
    return this.http.post<ServicosOrcamento[]>(`${this.apiUrl}/servico-orcamento/municipios/${municipioId}`, servicoOrcamento);
  }
}
