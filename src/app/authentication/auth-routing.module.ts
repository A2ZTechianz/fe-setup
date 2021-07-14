import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes :Routes=[
{
  path : '',
  component :LoginComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
