import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    // tslint:disable-next-line:quotemark
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
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
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  };

  slidesStore = [
    {
      id: 1,
      src: 'https://i.picsum.photos/id/976/400/250.jpg',
      alt: 'Image_1',
      title: 'Trabalho com as flores',
      desc: 'Mauris ac interdum ligula, sed eleifend lorem. Curabitur tellus arcu, dapibus sed vestibulum vitae, posuere sit amet urna.'
    },
    {
      id: 2,
      src: 'https://i.picsum.photos/id/195/400/250.jpg',
      alt: 'Image_2',
      title: 'Iluminação da rua',
      desc: 'Suspendisse efficitur orci sed tortor finibus dictum nec convallis ipsum. Donec auctor tempor metus, eu condimentum arcu ornare id.'
    },
    {
      id: 3,
      src: 'https://i.picsum.photos/id/400/400/250.jpg',
      alt: 'Image_3',
      title: 'Produção de plantas',
      desc: 'Nunc tempus ullamcorper dictum. Aenean a magna in leo posuere porta. Maecenas ligula nisi, placerat sed molestie in.'
    },
    {
      id: 4,
      src: 'https://i.picsum.photos/id/316/400/250.jpg',
      alt: 'Image_4',
      title: 'Construção da ponte',
      desc: 'Proin pharetra lobortis efficitur. In hac habitasse platea dictumst. Phasellus eu lorem id lectus rutrum commodo.'
    }
  ];

  @Input() display;
  constructor() { }

  ngOnInit(): void {
  }

}
