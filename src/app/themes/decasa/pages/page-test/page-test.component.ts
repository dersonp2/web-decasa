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

  constructor(private mapService: MapService) {
    this.mapService.getLatLong().subscribe(
      (data) => { console.log(data); }
    );
  }
}
