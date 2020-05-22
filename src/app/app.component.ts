import { NavCarrinhoComponent } from './themes/decasa/blocos/nav/nav-carrinho/nav-carrinho.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(NavCarrinhoComponent ) navCarrinho: NavCarrinhoComponent;

  exibirMenu = false;
  btnContratar = true;
  isDisplay = true;
  href = '';
  displayTemplate = false;
  // 1 - Steps Contratar serviços || 2 - Serviços agendados || 0 - Dados pessoais
  displayNavBar = 1;

  constructor(private router: Router) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.router.events
        .subscribe(() => {
          this.href = this.router.routerState.snapshot.url;
          // console.log('Rota' + this.href);
          this.displayBtnContratar();
          document.body.classList.add('overflow-page');
          this.pages();
        });
    }
    document.body.classList.add('overflow-page');
  }

  ngOnDestroy() {
    // Colocar a barra de rolagem
    this.removeOverflowHidden();
  }

  removeOverflowHidden() {
    document.body.classList.remove('overflow-page');
  }

  displayBtnContratar() {
    if (this.href === '/pagamento') {
      this.btnContratar = false;
    } else {
      this.btnContratar = true;
    }
  }

  // Ir para próxima tela
  goTo(stepper: MatStepper) {
    switch (this.href) {
      case '/orcamento':
        this.router.navigate(['/quantidade']);
        stepper.next();
        break;
      case '/quantidade':
        this.router.navigate(['/proposta']);
        stepper.next();
        break;
      case '/proposta':
        this.router.navigate(['/pagamento']);
        stepper.next();
        break;
    }
  }

  pages() {
    // console.log('page ' + this.href);
    if (this.href === '/orcamento' || this.href === '/quantidade' || this.href === '/proposta' || this.href === '/pagamento' || this.href === '/escolher' || this.href === '/agendados' || this.href === '/andamento' || this.href === '/finalizados' || this.href === '/dados-pessoais' || this.href === '/senha' || this.href === '/dados-cadastrais' || this.href === '/outros-membros' || this.href === '/endereco' || this.href === '/meios-de-pagamento' || this.href === '/boletos-notas') {
      this.displayTemplate = false;
    } else {
      this.displayTemplate = true;
      this.removeOverflowHidden();
    }
    this.displayNavbar() ;
  }

  displayNavbar() {
    if (this.href === '/orcamento' || this.href === '/quantidade' || this.href === '/proposta' || this.href === '/pagamento' ) {
      // console.log('Navbar 1');
      this.displayNavBar = 1;
    } else if (this.href === '/escolher' || this.href === '/agendados' || this.href === '/andamento' || this.href === '/finalizados') {
      this.displayNavBar = 2;
      // console.log('Navbar 2');
    } else {
      this.displayNavBar = 0;
      // console.log('Navbar 0');
    }
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  abrirMenu() {
    this.navCarrinho.exibirMenu = true;
  }
}

