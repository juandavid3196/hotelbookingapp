import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModuleRoutingModule } from './search-module-routing.module';
import { SearchComponent } from './search/search.component';
import { HomeModuleModule } from '../home-module/home-module.module';


@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchModuleRoutingModule,
    HomeModuleModule
  ]
 
})
export class SearchModuleModule { }
