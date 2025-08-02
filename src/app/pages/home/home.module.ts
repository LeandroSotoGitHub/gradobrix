import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { SectionAboutUsComponent } from './components/section-about-us/section-about-us.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { SectionQuestionsComponent } from './components/section-questions/section-questions.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionAboutUsComponent,
    SectionServicesComponent,
    SectionQuestionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
