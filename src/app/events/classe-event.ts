import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseEvent {

  // tslint:disable-next-line:variable-name
  private _alteracao = new Subject();
  alteracao$ = this._alteracao.asObservable();

  constructor() { }

  alteracao(valorAtual) {
    this._alteracao.next(valorAtual);
  }
}
