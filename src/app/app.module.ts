import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './authentication/auth-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PropertyRoutingModule } from './property/property-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    AuthenticationModule,
    HttpClientModule,
    PropertyRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
