import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "@home/home.module";
import {AuxModule} from "@aux/aux.module";
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HomeModule,
        AuxModule,
        AppRoutingModule,
        RouterOutlet,
        RouterLink
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
