import { environment } from './../../environments/environment';
import { TodosOsGruposEClassesResponse } from '../model/response/todos-os-grupos-classes-response.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  // Retorna Todos os Grupos e suas classes ativas
  getGruposAllClasses(): Observable<TodosOsGruposEClassesResponse[]> {
    return this.http.get<TodosOsGruposEClassesResponse[]>
    (`${this.apiUrl}/grupos/classes`).pipe(take(1));
  }

  // Retornna todos os grupos e classes ativas por municipio
  getGruposClassesByMunicipio(municipioId: number): Observable<TodosOsGruposEClassesResponse[]> {
    return this.http.get<TodosOsGruposEClassesResponse[]>(`${this.apiUrl}/web/grupos/classes/${municipioId}`).pipe(take(1));
  }
}
