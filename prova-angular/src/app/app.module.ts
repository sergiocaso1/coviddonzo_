import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceApiService } from './service-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [
    ServiceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
