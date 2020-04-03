import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit {
  isLinear = false;

  @Input() btnContratar: true;

  constructor() { }

  ngOnInit(): void {
  }
}
