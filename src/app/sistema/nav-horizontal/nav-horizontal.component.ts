import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.css']
})
export class NavHorizontalComponent implements OnInit, OnDestroy {
  isLinear = false;
  btnContratar = true;
  isDisplay = true;
  href = '';

  constructor(private router: Router) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.router.events
        .subscribe(() => {
          this.href = this.router.routerState.snapshot.url;
          console.log('Rota' + this.href);
          this.displayBtnContratar();
          document.body.classList.add('overflow-hidden');
        });
    }
    // console.log('Nav horizontal');
    // this.href = this.router.url;
    // console.log('Rota' + this.href);
    // this.displayBtnContratar();

    // Retirar a barra de rolagem
    document.body.classList.add('overflow-hidden');
  }

  ngOnDestroy() {
    // Colocar a barra de rolagem
    document.body.classList.remove('overflow-hidden');
  }


  displayBtnContratar() {
    if (this.href === '/pagamento') {
      this.btnContratar = false;
    } else {
      this.btnContratar = true;
    }
  }

  // Ir para próxima tela
  goTo() {
    switch (this.href) {
      case '/orcamento':
        this.router.navigate(['/quantidade']);
        break;
      case '/quantidade':
        this.router.navigate(['/proposta']);
        break;
      case '/proposta':
        this.router.navigate(['/pagamento']);
        break;
    }
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

}
