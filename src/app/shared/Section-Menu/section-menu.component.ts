import { Component } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.css']
})
export class SectionMenuComponent {
  categories = [
    { title: 'Tortas', imageSrc: 'assets/img/aboutUs_1.jpg', Routing: '/menu/tortas' },
    { title: 'Tartas', imageSrc: 'assets/img/aboutUs_1.jpg', Routing: '/menu/tartas' },
    { title: 'Cookies', imageSrc: 'assets/img/aboutUs_1.jpg', Routing: '/menu/cookies' },
    { title: 'Sanguches de miga', imageSrc: 'assets/img/aboutUs_1.jpg', Routing: '/menu/SandwichDeMiga' },
    { title: 'Bolunagerie', imageSrc: 'assets/img/aboutUs_1.jpg',  Routing: '/menu/boulangerie' },
  ];
}
