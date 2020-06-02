import { Geolocalizacao } from './../../../../../../../model/geolocalizacao.module';
import { MapsEvent } from './../../../../../../../events/maps-event';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map-proposta',
  templateUrl: './map-proposta.component.html',
  styleUrls: ['./map-proposta.component.css']
})
export class MapPropostaComponent {

  zoom = 15;
  geo: Geolocalizacao = new Geolocalizacao(-2.518917, -44.23733);

  constructor(private mapsEvent: MapsEvent) {
    this.mapsEvent.alteracao$.subscribe(
      (data: Geolocalizacao) => { this.geo = data; }
    );
  }

}
