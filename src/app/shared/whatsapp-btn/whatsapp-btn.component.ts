import { Component } from '@angular/core';
import { WhatsappService } from 'src/app/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBTNComponent {
  constructor(private whatsappService: WhatsappService) {}

  abrirWhatsapp() {
    this.whatsappService.abrirWhatsapp();
  }
}
