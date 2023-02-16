import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {AuxModule} from "@aux/aux.module";
import {MatDividerModule} from "@angular/material/divider";
import { StarBackgroundComponent } from './home-page/star-background/star-background.component';



@NgModule({
  declarations: [
    HomePageComponent,
    StarBackgroundComponent
  ],
    imports: [
        CommonModule,
        AuxModule,
        MatDividerModule,
    ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
