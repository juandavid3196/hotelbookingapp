import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModuleRoutingModule } from './search-module-routing.module';
import { SearchComponent } from './search/search.component';
import { HomeModuleModule } from '../home-module/home-module.module';
import { HotelcardComponent } from '../../components/hotelcard/hotelcard.component';
import { CheckfilterComponent } from '../../components/checkfilter/checkfilter.component';


@NgModule({
  declarations: [
    SearchComponent,
    HotelcardComponent,
    CheckfilterComponent
  ],
  imports: [
    CommonModule,
    SearchModuleRoutingModule,
    HomeModuleModule
  ]
 
})
export class SearchModuleModule { }
