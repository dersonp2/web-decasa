import {Md5} from 'ts-md5/dist/md5';
import {MapService} from './../../../../services/maps.service';
import {ClasseEvent} from '../../../../events/classe-event';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {GrupoService} from '../../../../services/grupo.service';
import {Router} from '@angular/router';
import {TodosOsGruposEClassesResponse} from '../../../../model/response/todos-os-grupos-classes-response.module';


@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.css']
})
export class PageTestComponent {

}
