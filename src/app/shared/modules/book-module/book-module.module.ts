import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModuleRoutingModule } from './book-module-routing.module';
import { BookComponent } from './book/book.component';
import { HomeModuleModule } from '../home-module/home-module.module';


@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookModuleRoutingModule,
    HomeModuleModule
  ]
})
export class BookModuleModule { }
