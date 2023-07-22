import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { HomeModuleModule } from '../home-module/home-module.module';
import { RoomcardComponent } from '../../components/roomcard/roomcard.component';
import { ProgressbarComponent } from '../../components/progressbar/progressbar.component';

@NgModule({
  declarations: [
    DetailsComponent,
    RoomcardComponent,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HomeModuleModule
  ]
})
export class DetailsModule { }
