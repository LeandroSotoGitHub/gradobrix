import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent {
  repeatedImages: string[] = Array(10).fill('../../../assets/img/logo__blanco__limpio.png'); 
}
