import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { isPlatformBrowser } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  btnContratar = true;
  isDisplay = true;
  href = '';
  displayTemplate = false;
  navBarServico = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (isPlatformBrowser) {
      this.router.events
        .subscribe(() => {
          this.href = this.router.routerState.snapshot.url;
          console.log('Rota' + this.href);
          this.displayBtnContratar();
          document.body.classList.add('overflow-page');
          this.pages();
        });
    }
    // console.log('Nav horizontal');
    // this.href = this.router.url;
    // console.log('Rota' + this.href);
    // this.displayBtnContratar();

    // Retirar a barra de rolagem
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
    console.log('page ' + this.href);
    if (this.href === '/orcamento' || this.href === '/quantidade' || this.href === '/proposta' || this.href === '/pagamento' || this.href === '/escolher' || this.href === '/agendados' || this.href === '/andamento' || this.href === '/finalizados') {
      this.displayTemplate = false;
    } else {
      this.displayTemplate = true;
      this.removeOverflowHidden();
    }
  }


  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }
}
