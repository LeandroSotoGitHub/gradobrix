import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
 ngAfterViewInit(): void {

  ScrollReveal().reveal('.logo-img', {
  origin: 'bottom',
  distance: '60px',
  opacity: 0,
  scale: 1.1,
  duration: 700,
  easing: 'ease-out',
  delay: 200,
  reset: false
});
}
}
