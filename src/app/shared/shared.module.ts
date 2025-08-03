import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { SectionMenuComponent } from './Section-Menu/section-menu.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappBTNComponent } from './whatsapp-btn/whatsapp-btn.component';
import { BackBtnComponent } from './back-btn/back-btn.component';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    MarqueeComponent,
    SectionMenuComponent,
    CardComponent,
    FooterComponent,
    WhatsappBTNComponent,
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MarqueeComponent,
    CardComponent,
    RouterModule,
    SectionMenuComponent,
    FooterComponent,
    WhatsappBTNComponent,
    BackBtnComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
