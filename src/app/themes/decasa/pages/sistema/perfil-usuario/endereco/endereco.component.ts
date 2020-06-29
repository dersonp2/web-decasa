import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ViaCepService} from '../../../../../../services/via-cep.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  displayForm = false;
  enderecoForm: FormGroup;
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private cepService: ViaCepService, private formBuilder: FormBuilder) {
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
    if (this.enderecoForm.controls.cep.valid) {
      console.log('valido');
      const cep = this.enderecoForm.get('cep').value.replace('-', '');
      this.cepService.getEndereco(cep).subscribe(
        (data) => {
          console.log(data);
          this.setFormsValue(data);
        }
      );

    }
  }

  setFormsValue(data) {
    this.enderecoForm.patchValue({'logradouro': data.logradouro, 'bairro': data.bairro, 'cidade': data.localidade, 'uf': data.uf });
  }

}
