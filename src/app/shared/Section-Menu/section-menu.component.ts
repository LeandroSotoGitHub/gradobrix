import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.scss']
})
export class SectionMenuComponent implements AfterViewInit {
  categories = [
    { title: 'Tortas', imageSrc: 'assets/img/Tortas/Tortas-Portada.webp', Routing: '/menu/tortas' },
    { title: 'Tartas', imageSrc: 'assets/img/Tartas/PORTADA_TARTAS.webp', Routing: '/menu/tartas' },
    { 
      title: 'Bolunagerie', 
      imageSrc: 'assets/img/boulangerie.jpg', 
      Routing: '/menu/boulangerie/general' ,
      slug: 'general',
      isSingle: true,
    },
    {
      title: 'Sanguches de miga',
      imageSrc: 'assets/img/Sandwich/sandwichmega.jpg',
      isSingle: true,
      slug: 'general',
      Routing: '/menu/sanguches-de-miga/general'
    },
    {
      title: 'Cuadrados',
      imageSrc: 'assets/img/Cuadraditos/Cuadraditos-portada.webp',
      isSingle: true,
      slug: 'general',
      Routing: '/menu/cuadrados/general'
    },
    {
      title: 'Cookies',
      imageSrc: 'assets/img/Cookies/Portada-Cookies.webp',
      isSingle: true,
      slug: 'general',
      Routing: '/menu/cookies/general'
    },
    {title: 'Alfajores',imageSrc: 'assets/img/Alfajor/Portada-Alfajores.webp', isSingle: true, Routing: '/menu/alfajores'},

  ];

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    // Aplicar delays escalonados a las cards
    const cards = document.querySelectorAll<HTMLElement>('.card.animate-on-scroll');
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${0.1 * index}s`;
    });

    this.scrollAnimation.observeElements(); // activa las animaciones
  }
}
