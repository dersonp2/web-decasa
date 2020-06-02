import { Geolocalizacao } from './../model/geolocalizacao.module';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsEvent {

  // tslint:disable-next-line:variable-name
  private _alteracao = new Subject();
  alteracao$ = this._alteracao.asObservable();

  constructor() { }

  alteracao(geolozalizacao: Geolocalizacao) {
    this._alteracao.next(geolozalizacao);
  }
}
