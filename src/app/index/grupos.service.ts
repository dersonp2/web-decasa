import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Grupo } from './model/grupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private readonly url = '/v1/rest/decasa';

  constructor(private http: HttpClient) { }
  listarGrupos() {
    const headers = new HttpHeaders().set('Access-Token', 'G416F208V208U416V1196D780E416U1196Y884W416H1144H1196H364H676X780K936G416G936V832O416G416C416V1144H1196H');
    return this.http.get<any []>(`${this.url}/gruposResumo/2`, {headers});
  }

}
