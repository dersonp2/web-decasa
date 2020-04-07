import { Component } from '@angular/core';

@Component({
  selector: 'app-map-proposta',
  templateUrl: './map-proposta.component.html',
  styleUrls: ['./map-proposta.component.css']
})
export class MapPropostaComponent {

  lat: number = -2.518917;
  lng: number = -44.23733;
  zoom: number = 15;

}
