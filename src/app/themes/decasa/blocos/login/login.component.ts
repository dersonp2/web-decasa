import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;
  loginForm: FormGroup;
  invalido = true;

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        senha: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
  }

  ngOnInit(): void {
  }

  fazerLogin() {
    // this.senha =
    this.authService.login(this.loginForm.value).subscribe(
      (resp) => {
        console.log('Deu certo');
        localStorage.setItem('user', btoa(JSON.stringify(resp)));
        this.invalido = true;
      },
      (error) => {
        console.log('Deu erro' + error);
        this.invalido = false;
      }
    );
  }

}
