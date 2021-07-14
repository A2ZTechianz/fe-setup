import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasePropertyComponent } from './components/release-property/release-property.component';
import { PropertyRoutingModule } from './property-routing.module';


@NgModule({
  declarations: [
    ReleasePropertyComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
    
  ]
})
export class PropertyModule { }
