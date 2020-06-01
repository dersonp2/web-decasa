import { ViaCepService } from './../../../../../../services/via-cep.service';
import { MunicipioService } from './../../../../../../services/municipio.service';
import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/model/municipio.module';
import { ViaCep } from 'src/app/model/via-cep.module';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  // 0 - Tela iniciada
  // 1 - Atendimento em domicilio
  // 2 - Não é em domicilio
  // 3 - Buscar prestador
  domicile = 1;
  municipio: Municipio = new Municipio();
  endereco: ViaCep;
  cep;
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private municipioService: MunicipioService, private cepService: ViaCepService) { }

  ngOnInit(): void {
    this.buscarMunicipio();
    this.endereco = new ViaCep();
  }

  handleChange(evt) {
    console.log(evt.target);
    if (evt.target.value === 'option1') {
      this.domicile = 1;
    } else {
      this.domicile = 2;
    }
  }

  searchServiceProviders() {
    this.domicile = 3;
  }

  buscarMunicipio() {
    const municipioId = localStorage.getItem('municipioId');
    this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
      (data) => { this.municipio = data; },
      (error) => (console.log(error))
    );
  }

  onBlurMethod() {
    this.cep = this.cep.replace('-', '');
    this.cepService.getEndereco(this.cep).subscribe(
      (data) => { this.checkMunicipio(data); }
    );
  }

  checkMunicipio(cep: ViaCep) {
    // this.endereco = data; console.log(this.endereco);
    console.log(this.removeAcento(cep.localidade) + ' = ' + this.municipio.nome);
    if (this.removeAcento(cep.localidade) === this.municipio.nome) {
      this.endereco = cep;
    } else {
      alert('Cep nao corresponde a cidade dos serviços selecionados');
      this.endereco = new ViaCep();

    }
  }

  removeAcento(text) {
    text = text.toUpperCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'C');
    return text;
  }

}
