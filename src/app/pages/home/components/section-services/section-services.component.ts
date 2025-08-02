import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.css']
})
export class SectionServicesComponent implements AfterViewInit {

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.scrollAnimation.observeElements();
  }
}
