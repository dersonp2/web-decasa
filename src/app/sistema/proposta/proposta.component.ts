import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  domicile = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(evt) {
    console.log(evt.target);
    if (evt.target.value === 'option1'){
      this.domicile = false;
    } else {
      this.domicile = true;
    }
  }

    // this.domicile = !this.domicile;

}
