import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxParallaxScrollModule} from "ngx-parallax-scroll";
import {HomeModule} from "@home/home.module";
import {AuxModule} from "@aux/aux.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxParallaxScrollModule,
    HomeModule,
    AuxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
