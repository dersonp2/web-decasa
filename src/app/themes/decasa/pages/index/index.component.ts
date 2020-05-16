import { DialogLocalizacaoComponent } from './../../blocos/dialog/dialog-localizacao/dialog-localizacao.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverContentComponent } from 'ngx-smart-popover';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  grupos: any [];
  isDisplay = true;
  @ViewChild('myPopover') myPopover: PopoverContentComponent;
  // private gruposService: GruposService
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.listarGrupos();
  }

  openModal() {
    this.dialog.open(DialogLocalizacaoComponent, {
      width: '50%',
    });
    this.hidePopover();
  }


  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  hidePopover() {
    console.log('FEchhhoouuu');
    this.myPopover.hide();
  }
  showPopover() {
    console.log('Abriu');
    this.myPopover.show();
  }

  listarGrupos() {
    // this.gruposService.listarGrupos().subscribe(data => this.grupos = data);
  }
}
