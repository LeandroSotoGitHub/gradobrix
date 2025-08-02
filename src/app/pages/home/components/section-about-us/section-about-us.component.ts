import { Component, AfterViewInit } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';

@Component({
  selector: 'app-section-about-us',
  templateUrl: './section-about-us.component.html',
  styleUrls: ['./section-about-us.component.css']
})
export class SectionAboutUsComponent implements AfterViewInit {

  constructor(
    private whatsappService: WhatsappService,
    private scrollAnimation: ScrollAnimationService
  ) {}

  abrirWhatsapp() {
    this.whatsappService.abrirWhatsapp();
  }

  ngAfterViewInit(): void {
    this.scrollAnimation.observeElements(); 
  }
}
