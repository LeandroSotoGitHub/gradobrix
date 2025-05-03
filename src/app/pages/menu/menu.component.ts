import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories = [
    { title: 'Tortas', imageSrc: 'assets/img/aboutUs_1.jpg', Routing: '/menu/tortas' },
    { title: 'Tartas', imageSrc: 'assets/img/aboutUs_1.jpg' },
    { title: 'Cookies', imageSrc: 'assets/img/aboutUs_1.jpg' },
    { title: 'Sanguches de miga', imageSrc: 'assets/img/aboutUs_1.jpg' },
    { title: 'Bolunagerie', imageSrc: 'assets/img/aboutUs_1.jpg' },
  ];
}
