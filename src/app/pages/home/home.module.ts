import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { SectionImgComponent } from './components/Section-Img/section-img.component';
import { SectionMenuComponent } from './components/Section-Menu/section-menu.component';
import { SectionAboutUsComponent } from './components/section-about-us/section-about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionImgComponent,
    SectionMenuComponent,
    SectionAboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
