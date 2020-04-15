import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  @Input() display;

  constructor() { }

  ngOnInit(): void {
  }

}
