import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    MarqueeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MarqueeComponent,
    CardComponent,
    RouterModule 
  ]
})
export class SharedModule { }
