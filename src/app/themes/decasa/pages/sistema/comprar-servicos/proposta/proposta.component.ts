import { EnderecoCliente } from './../../../../../../model/endereco-cliente.module';
import { MapsEvent } from './../../../../../../events/maps-event';
import { Geolocalizacao } from './../../../../../../model/geolocalizacao.module';
import { MapService } from './../../../../../../services/maps.service';
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
  enderecoCliente: EnderecoCliente = new EnderecoCliente();
  geo: Geolocalizacao;
    public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private municipioService: MunicipioService, private cepService: ViaCepService, private mapService: MapService, private mapsEvent: MapsEvent) { }

  ngOnInit(): void {
    this.buscarMunicipio();
    // this.endereco = new ViaCep();
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
    let endereco = null;
    if (localStorage.hasOwnProperty('enderecoCliente')) {
      endereco = JSON.parse(atob(localStorage.getItem('enderecoCliente')));
    }
    this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
      (data) => {
        if (endereco != null && municipioId == endereco.municipio.id) {
          this.enderecoCliente = endereco;
          this.buscarLatLng();
        } else {
          this.enderecoCliente.municipio = data;
        }
      },
      (error) => (console.log(error))
    );
  }

  onBlurCep() {
    if (this.enderecoCliente.cep != null) {
      const cep = this.enderecoCliente.cep.replace('-', '');
      this.cepService.getEndereco(cep).subscribe(
        (data) => { this.checkMunicipio(data); }
      );
    }
  }

  checkMunicipio(endereco: ViaCep) {
    // this.endereco = data; console.log(this.endereco);
    if (this.removeAcento(endereco.localidade) === this.enderecoCliente.municipio.nome) {
      this.enderecoCliente.cep = endereco.cep.toString();
      this.enderecoCliente.bairro = endereco.bairro;
      this.enderecoCliente.logradouro = endereco.logradouro;
      this.enderecoCliente.ativo = true;
      localStorage.setItem('enderecoCliente', btoa(JSON.stringify(this.enderecoCliente)));
      this.setLatLong(endereco.cep);
    } else {
      alert('Cep nao corresponde a cidade dos serviços selecionados');
      this.enderecoCliente.cep = null;
      this.enderecoCliente.bairro = null;
      this.enderecoCliente.logradouro = null;
      this.enderecoCliente.ativo = null;
    }
  }

  getEnderecoCliente() {
    if (localStorage.hasOwnProperty('enderecoCliente')) {
      this.enderecoCliente = JSON.parse(atob(localStorage.getItem('enderecoCliente')));
    }
  }

  setLatLong(endereco) {
    this.mapService.getLatLong(endereco).subscribe(
      (data) => {
        if (data.status === 'OK') {
          this.geo = new Geolocalizacao(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
          this.enderecoCliente.latGraus = this.geo.lat;
          this.enderecoCliente.longGraus = this.geo.lng;
          localStorage.setItem('enderecoCliente', btoa(JSON.stringify(this.enderecoCliente)));
          this.mapsEvent.alteracao(this.geo);
          console.log('Emitiu');
        } else {
          alert('Cordenadas geográficas não encontrada');
        }
      }
    );
  }

  onSearchChange(numero) {
    this.enderecoCliente.numero = numero;
    console.log('Número: ' + this.enderecoCliente.numero);
    localStorage.setItem('enderecoCliente', btoa(JSON.stringify(this.enderecoCliente)));
    this.buscarLatLng();
  }

  buscarLatLng() {
    if (this.enderecoCliente.cep != null && this.enderecoCliente.bairro != null && this.enderecoCliente.logradouro != null && this.enderecoCliente.numero != null) {
      const endereco = `${this.enderecoCliente.cep} ${this.enderecoCliente.bairro} ${this.enderecoCliente.logradouro} ${this.enderecoCliente.numero}`;
      this.setLatLong(endereco);
      console.log('Atualizou');
    } else {
      console.log('Não atualizou');
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
