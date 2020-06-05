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

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    // this.senha =
    const senhaEncrypted = new Md5().appendStr(this.senha).end();
    console.log('Email: ' + this.email);
    console.log('Senha: ' + senhaEncrypted);
    this.authService.login(this.email, senhaEncrypted).subscribe(
      (resp) => {
        // this.router.navigate(['sucesso']);
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
