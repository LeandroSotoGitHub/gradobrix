import { AfterViewInit, Component } from '@angular/core';
import { ScrollAnimationService } from 'src/app/services/scroll-animation.service';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit{

  constructor(private whatsappService: WhatsappService,
    private scrollAnimation: ScrollAnimationService
  ){}

  abrirWhatsapp() {
    this.whatsappService.abrirWhatsapp();
  }
   ngAfterViewInit(): void {
    this.scrollAnimation.observeElements(); 
  }
}
