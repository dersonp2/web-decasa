import { Md5 } from 'ts-md5/dist/md5';
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
  senhaEncrypted;
  constructor() {
    this.senhaEncrypted = new Md5().appendStr('12345678').end();

  }

}
