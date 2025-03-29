import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from "../../shared/shared.module";
import { SwiperHistoryComponent } from './components/swiper-history/swiper-history.component';
import { SwiperTeamComponent } from './components/swiper-team/swiper-team.component';

// import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    AboutComponent,
    SwiperHistoryComponent,
    SwiperTeamComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AboutModule { }
