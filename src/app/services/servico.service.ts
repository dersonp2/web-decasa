import { environment } from '../../environments/environment';
import { TodosOsGruposEClassesResponse } from '../model/response/todos-os-grupos-classes-response.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Servicos } from '../model/servico.module';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  // Lista todos os serviços ativos por classe e municipio
  getServicosByClasseAndMunicipio(classeId: number, municipioId: number): Observable<Servicos[]> {
    return this.http.get<Servicos[]>(`${this.apiUrl}/searchServices/${classeId}/${municipioId}`);
  }
}
