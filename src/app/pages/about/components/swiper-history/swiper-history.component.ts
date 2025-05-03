import { Component } from '@angular/core';

@Component({
  selector: 'app-swiper-history',
  templateUrl: './swiper-history.component.html',
  styleUrls: ['./swiper-history.component.css']
})
export class SwiperHistoryComponent {
  images: string[] = [
    'assets/img/aboutUs_11.jpg',
    'assets/img/aboutUs_9.jpg',
    'assets/img/aboutUs_3.jpg',
    'assets/img/aboutUs_2.jpg',
    'assets/img/aboutUs_1.jpg',
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 6000);
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
