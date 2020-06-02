import { MapService } from './../../../../services/maps.service';
import { ClasseEvent } from '../../../../events/classe-event';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent {

  lat: number;
  long: number;

  constructor(private mapService: MapService) {
    this.mapService.getLatLong('R. São Benedito, 76 - Vila Vicente Fialho').subscribe(
      (data) => {
        this.lat = data.results[0].geometry.location.lat;
        this.long = data.results[0].geometry.location.lng;
        console.log('Latitude: ' + this.lat + ' - ' + 'Longitude: ' + this.long);
      }
    );
  }
}
