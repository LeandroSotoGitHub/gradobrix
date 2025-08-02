import { Component } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-section-about-us',
  templateUrl: './section-about-us.component.html',
  styleUrls: ['./section-about-us.component.css']
})
export class SectionAboutUsComponent  {
    
  constructor(private whatsappService: WhatsappService) {}

  abrirWhatsapp() {
    this.whatsappService.abrirWhatsapp();
  }


}
