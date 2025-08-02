import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

    private numero = '541139219680';

    abrirWhatsapp(mensaje: string = 'Hola BRIX! Me gustaría hacer un pedido 🍰') {
    const url = `https://wa.me/${this.numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
