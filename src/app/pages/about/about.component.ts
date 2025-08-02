import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.scrollAnimation.observeElements(); // activa animaciones
  }
}
