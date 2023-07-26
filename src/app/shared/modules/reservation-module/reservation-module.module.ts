import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationModuleRoutingModule } from './reservation-module-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeModuleModule } from '../home-module/home-module.module';


@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationModuleRoutingModule,
    HomeModuleModule
  ]
})
export class ReservationModuleModule { }
