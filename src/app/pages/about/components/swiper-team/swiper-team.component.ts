import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper-team',
  templateUrl: './swiper-team.component.html',
  styleUrls: ['./swiper-team.component.css']
})
export class SwiperTeamComponent {
  images: string[] = [
    'assets/img/aboutUs_1.jpg',
    'assets/img/aboutUs_2.jpg',
    'assets/img/aboutUs_3.jpg'
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 10000);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
