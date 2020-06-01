
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  apiUrl = environment.CEP_URL;
  constructor(private http: HttpClient) {}

  getEndereco(cep) {
    return this.http.get<any>(`${this.apiUrl}/${cep}/json/`).pipe(take(1));
  }
}
