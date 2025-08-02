import { Component } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})
export class SectionMenuComponent {
  categories = [
    { title: 'Tortas', imageSrc: 'assets/img/Tortas/Tortas-Portada.webp', Routing: '/menu/tortas' },
    { title: 'Tartas', imageSrc: 'assets/img/Tartas/PORTADA_TARTAS.webp', Routing: '/menu/tartas' },
    { title: 'Cookies', imageSrc: 'assets/img/Cookies/Portada-Cookies.webp', Routing: '/menu/cookies' },
    { title: 'Bolunagerie', imageSrc: 'assets/img/boulangerie.jpg',  Routing: '/menu/boulangerie' },
    {
    title: 'Sanguches de miga',
    imageSrc: 'assets/img/Sandwich/Portada-SandwichDeMiga.webp',
    isSingle: true,
    slug: 'general',
    Routing: '/menu/sanguches-de-miga/general'
  },
    {
    title: 'Alfajores',
    imageSrc: 'assets/img/Alfajor/Portada-Alfajores.webp',
    isSingle: true,
    slug: 'general',
    Routing: '/menu/alfajores/general'
  }
  ];
}
