import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { OffercardComponent } from '../../components/offercard/offercard.component';
import { LoginComponent } from '../../components/login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FooterComponent,
    OffercardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
})
export class HomeModuleModule { }
