import { Router } from '@angular/router';
import { Cliente } from '../model/cliente.module';
import { ClienteEmpresaResponse } from '../model/response/cliente-empresa-response.module';
import { ClienteDetalhesResponse } from 'src/app/model/response/cliente-detalhes-response.module';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { Servico } from '../model/servico.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient, private router: Router) { }

  // check
  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  // Login
  login(email: string, senha: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/cliente/${email}/${senha}/`).pipe(
      tap(data => {
        localStorage.setItem('user', btoa(JSON.stringify(data)));
      }),
      take(1));
  }

  logout(): void {
    this.http.get(`${this.apiUrl}/logout/${this.getUser().id}`).subscribe(
      (resp) => {
        localStorage.removeItem('user');
        this.router.navigate(['auth/login']);
      }
    );
  }

  getUser(): Cliente {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }
}
