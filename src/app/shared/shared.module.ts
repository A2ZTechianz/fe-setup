import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    PageFooterComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
