import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { OffercardComponent } from '../../components/offercard/offercard.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FooterComponent,
    OffercardComponent
    
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
