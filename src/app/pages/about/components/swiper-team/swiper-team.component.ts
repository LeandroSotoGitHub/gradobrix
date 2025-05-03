import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper-team',
  templateUrl: './swiper-team.component.html',
  styleUrls: ['./swiper-team.component.css']
})
export class SwiperTeamComponent {
  images: string[] = [
    'assets/img/aboutUs_5.jpg',
    'assets/img/aboutUs_12.jpg',
    'assets/img/aboutUs_8.jpg',
    'assets/img/aboutUs_6.jpg',
    'assets/img/aboutUs_7.jpg',
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3500);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
