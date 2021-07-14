import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'home',
    loadChildren:() => import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'property',
    loadChildren:() => import('./property/property.module').then(m=>m.PropertyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
