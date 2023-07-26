import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./shared/modules/home-module/home-module.module').then(m=>m.HomeModuleModule)},
  {path:'search', loadChildren: ()=> import('./shared/modules/search-module/search-module.module').then(m=>m.SearchModuleModule)},
  {path:'details', loadChildren:()=> import('./shared/modules/details-module/details.module').then(m => m.DetailsModule)},
  {path:'book',loadChildren:()=> import('./shared/modules/book-module/book-module.module').then(m=>m.BookModuleModule)},
  {path:'reservation',loadChildren:()=> import('./shared/modules/reservation-module/reservation-module.module').then(m=>m.ReservationModuleModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
