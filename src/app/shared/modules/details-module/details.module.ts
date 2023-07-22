import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { HomeModuleModule } from '../home-module/home-module.module';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HomeModuleModule
  ]
})
export class DetailsModule { }
