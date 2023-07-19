import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./shared/modules/home-module/home-module.module').then(m=>m.HomeModuleModule)},
  {path:'search', loadChildren: ()=> import('./shared/modules/search-module/search-module.module').then(m=>m.SearchModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
