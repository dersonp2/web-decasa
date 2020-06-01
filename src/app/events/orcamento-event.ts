import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoEvent {

  // tslint:disable-next-line:variable-name
  private _alteracao = new Subject();
  // tslint:disable-next-line:variable-name
  private _agendado = new Subject();
  // tslint:disable-next-line:variable-name
  private _execucao = new Subject();
  // tslint:disable-next-line:variable-name
  private _finalizado = new Subject();

  finalizado$ = this._finalizado.asObservable();
  agendado$ = this._agendado.asObservable();
  execucao$ = this._execucao.asObservable();

  constructor() { }

  agendado(e) {
    this._agendado.next(e);
  }

  execucao(e) {
    this._execucao.next(e);
  }

  finalizado(e) {
    this._finalizado.next(e);
  }

}
