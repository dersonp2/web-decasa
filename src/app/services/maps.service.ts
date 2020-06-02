import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl = environment.API_MAPS;
  key  = environment.KEY_MAPS;

  constructor(private http: HttpClient) {}

  // Retorna Todos os Grupos e suas classes ativas
  getLatLong(cep): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?address=${cep}&key=${this.key}`);
  }
}
