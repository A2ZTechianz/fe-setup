import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReleasePropertyComponent } from './components/release-property/release-property.component';
const routes :Routes=[
  {
    path : 'release-property',
    component :ReleasePropertyComponent
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PropertyRoutingModule { }
