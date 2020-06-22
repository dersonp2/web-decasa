import {EnderecoCliente} from '../../../../../../model/endereco-cliente.module';
import {MapsEvent} from '../../../../../../events/maps-event';
import {Geolocalizacao} from '../../../../../../model/geolocalizacao.module';
import {MapService} from '../../../../../../services/maps.service';
import {ViaCepService} from '../../../../../../services/via-cep.service';
import {MunicipioService} from '../../../../../../services/municipio.service';
import {Component, OnInit} from '@angular/core';
import {ViaCep} from 'src/app/model/via-cep.module';
import {AuthService} from '../../../../../../services/auth.service';
import {EnderecoService} from '../../../../../../services/endereco.service';
import {MatDialog} from '@angular/material/dialog';
import {DiaologEnderecoComponent} from '../../../../blocos/dialog/diaolog-endereco/diaolog-endereco.component';
import {Orcamento} from '../../../../../../model/orcamento.module';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  /* 0 - Tela iniciada
     1 - Atendimento em domicilio
     2 - Não é em domicilio
     3 - Buscar prestador */
  domicile = 1;
  enderecoCliente: EnderecoCliente;
  geo: Geolocalizacao;
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private municipioService: MunicipioService, private cepService: ViaCepService,
              private mapService: MapService, private mapsEvent: MapsEvent,
              private authService: AuthService, private enderecoService: EnderecoService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.checkPrincipalAddress();
  }

  // (Usuário Logado) Verifica se existe endereço no orçamento, se não busca o endereco principal
  // (Usuáio não logado) Busca o id do municipio para preenchar alguns campos
  checkPrincipalAddress() {
    if (this.authService.check()) {
      let orcamento: Orcamento = new Orcamento();
      if (localStorage.getItem('orcamento')) {
        orcamento = JSON.parse(atob(localStorage.getItem('orcamento')));
        if ( typeof orcamento.enderecoCliente !== 'undefined') {
          console.log('Entrou em orcamento endereco cliente');
          console.log(orcamento.enderecoCliente);
          this.enderecoCliente = orcamento.enderecoCliente;
        } else {
          console.log('Não entrou em orcamento endereco cliente');
          this.enderecoService.getPrincipalAddress(this.authService.getUser().id).subscribe(
            (data) => {
              this.checkEqualsCount(data);
            }
          );
        }
      }
    } else {
      this.enderecoCliente = new EnderecoCliente();
      this.searchMunicipio();
    }
  }

  // Verifica se o endereço do cliente é igual ao endereo dos serviços selecionados
  checkEqualsCount(data) {
    this.enderecoCliente = data;
    const municipioId = Number(localStorage.getItem('municipioId'));
    if (municipioId === data.municipio.id) {
      this.enderecoCliente = data;
      this.updateOramento();
      this.searchLatLng();
    } else {
      this.enderecoCliente = new EnderecoCliente();
      alert('O endereço não corresponde a cidade dos serviços selecionados');
    }
  }

  // Verifica se o municipio do cep é igual ao endereco o cliente
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

  // Quando mudar o número, atualizar a posição no mapa
  onSearchChange(numero) {
    this.enderecoCliente.numero = numero;
    console.log('Número: ' + this.enderecoCliente.numero);
    localStorage.setItem('enderecoCliente', btoa(JSON.stringify(this.enderecoCliente)));
    this.searchLatLng();
  }

  // Alterar a latitude e longitude do endereco
  setLatLong(endereco) {
    this.mapService.getLatLong(endereco).subscribe(
      (data) => {
        if (data.status === 'OK') {
          this.geo = new Geolocalizacao(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
          this.enderecoCliente.latGraus = this.geo.lat;
          this.enderecoCliente.longGraus = this.geo.lng;
          // localStorage.setItem('enderecoCliente', btoa(JSON.stringify(this.enderecoCliente)));
          this.mapsEvent.alteracao(this.geo);
          console.log('Emitiu');
        } else {
          alert('Cordenadas geográficas não encontrada');
        }
      }
    );
  }

  // Servico para pegar o endereço que estava no localStorage
  searchMunicipio() {
    const municipioId = localStorage.getItem('municipioId');
    let endereco = null;
    if (localStorage.hasOwnProperty('enderecoCliente')) {
      endereco = JSON.parse(atob(localStorage.getItem('enderecoCliente')));
    }
    this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
      (data) => {
        if (endereco != null && municipioId === endereco.municipio.id) {
          this.enderecoCliente = endereco;
          this.searchLatLng();
        } else {
          this.enderecoCliente.municipio = data;
        }
      },
      (error) => (console.log(error))
    );
  }

  // Buscar Latitude e logitude
  searchLatLng() {
    if (this.enderecoCliente.cep != null && this.enderecoCliente.bairro != null && this.enderecoCliente.logradouro != null && this.enderecoCliente.numero != null) {
      const endereco = `${this.enderecoCliente.cep} ${this.enderecoCliente.bairro} ${this.enderecoCliente.logradouro} ${this.enderecoCliente.numero}`;
      this.setLatLong(endereco);
      console.log('Atualizou');
    } else {
      console.log('Não atualizou');
    }
  }

  searchServiceProviders() {
    this.domicile = 3;
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

  // Salva o endereco no orcamento e atualiza o localStorage
  updateOramento() {
    if (this.enderecoCliente !== null) {
      let orcamento: Orcamento = new Orcamento();
      if (localStorage.getItem('orcamento')) {
        orcamento = JSON.parse(atob(localStorage.getItem('orcamento')));
      }
      orcamento.enderecoCliente = this.enderecoCliente;
      console.log(orcamento);
      localStorage.setItem('orcamento', btoa(JSON.stringify(orcamento)));
    }
  }

  // Busca o cep
  onBlurCep() {
    if (this.enderecoCliente.cep != null) {
      const cep = this.enderecoCliente.cep.replace('-', '');
      this.cepService.getEndereco(cep).subscribe(
        (data) => {
          this.checkMunicipio(data);
        }
      );
    }
  }

  // Abrir modal com a lista de endereços do cliente
  openModal() {
    const dialogRef = this.dialog.open(DiaologEnderecoComponent, {
      width: '50%',
      data: {enderecoCliente: this.enderecoCliente}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.enderecoCliente = result;
        this.updateOramento();
      }
    });
  }

  // Eventos do Radio para atendimento
  // handleChange(evt) {
  //   console.log(evt.target);
  //   if (evt.target.value === 'option1') {
  //     this.domicile = 1;
  //   } else {
  //     this.domicile = 2;
  //   }
  // }

  // Servico para pegar o endereço que estava no localStorage
  // buscarMunicipio() {
  //   const municipioId = localStorage.getItem('municipioId');
  //   let endereco = null;
  //   if (localStorage.hasOwnProperty('enderecoCliente')) {
  //     endereco = JSON.parse(atob(localStorage.getItem('enderecoCliente')));
  //   }
  //   this.municipioService.buscarMunicipioPorId(municipioId).subscribe(
  //     (data) => {
  //       if (endereco != null && municipioId === endereco.municipio.id) {
  //         this.enderecoCliente = endereco;
  //         this.buscarLatLng();
  //       } else {
  //         this.enderecoCliente.municipio = data;
  //       }
  //     },
  //     (error) => (console.log(error))
  //   );
  // }

}
