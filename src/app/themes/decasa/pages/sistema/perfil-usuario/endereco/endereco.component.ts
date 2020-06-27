import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  displayForm = false;
  enderecoForm: FormGroup;
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private formBuilder: FormBuilder) {
    this.enderecoForm = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.minLength(9)]],
      logradouro: ['', [Validators.required]],
      numero: [''],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      complemento: [''],
      pais: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  display() {
    this.displayForm = !this.displayForm;
  }


  // Busca o cep
  onBlurCep() {
    // if (this.enderecoCliente.cep != null) {
    //   const cep = this.enderecoCliente.cep.replace('-', '');
    //   this.cepService.getEndereco(cep).subscribe(
    //     (data) => {
    //       this.checkMunicipio(data);
    //     }
    //   );
    // }
    if (this.enderecoForm.controls.cep.valid) {
      console.log('valido');

    }
  }

}
