import { CartaoCliente } from './../model/cartao-cliente.module';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartaoClienteService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  buscarCartaoPrincipal(idCliente): Observable<CartaoCliente> {
    return this.http.get<CartaoCliente>(`${this.apiUrl}/retornaCartaoPrincipal/${idCliente}`).pipe(take(1));
  }

  buscarCartoes(idCliente): Observable<CartaoCliente[]> {
    return this.http.get<CartaoCliente[]>(`${this.apiUrl}/cartoes/${idCliente}`).pipe(take(1));
  }

  salvarCartao(cartaoCliente: CartaoCliente) {
    return this.http.post(`${this.apiUrl}/salvarCartao`, cartaoCliente);
  }
}
