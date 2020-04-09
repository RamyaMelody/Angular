import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bootsnip1Component } from './bootsnip1/bootsnip1.component';
import { Bootsnip2Component } from './bootsnip2/bootsnip2.component';
import { Bootsnip3Component } from './bootsnip3/bootsnip3.component';
import { Bootsnip4Component } from './bootsnip4/bootsnip4.component';

@NgModule({
  declarations: [
    AppComponent,
    Bootsnip1Component,
    Bootsnip2Component,
    Bootsnip3Component,
    Bootsnip4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
