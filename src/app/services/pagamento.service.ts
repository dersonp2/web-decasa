import { CartaoCliente } from './../model/cartao-cliente.module';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import {Pagamento} from '../model/pagamento.module';
import {ResponseMessage} from '../model/response-message.module';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) { }


  savePay(pagamento: Pagamento): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`${this.apiUrl}/prestadorOrcamento`, pagamento);
  }
}
