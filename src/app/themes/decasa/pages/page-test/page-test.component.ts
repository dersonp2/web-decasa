import { ClasseEvent } from './../../../../events/ClasseEvent';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent {

  constructor(private classeSevice: ClasseEvent) {
    classeSevice.alteracao$.subscribe(
      (data) => { console.log('Veio do evento: ' + data); }
    );
  }

  eventEmitter() {
    this.classeSevice.alteracao(1);
  }

}
