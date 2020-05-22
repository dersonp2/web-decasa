import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoEvent {

  // tslint:disable-next-line:variable-name
  private _alteracao = new Subject();
  alteracao$ = this._alteracao.asObservable();

  constructor() { }

  alteracao() {
    this._alteracao.next();
  }
}
