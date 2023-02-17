import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {AuxModule} from "@aux/aux.module";
import {MatDividerModule} from "@angular/material/divider";
import { StarBackgroundComponent } from '../star-background/star-background.component';
import {MatIconModule} from "@angular/material/icon";
import { ProjectPanelComponent } from './home-page/project-panel/project-panel.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomePageComponent,
    StarBackgroundComponent,
    ProjectPanelComponent
  ],
    imports: [
        CommonModule,
        AuxModule,
        MatDividerModule,
        MatIconModule,
        RouterLink,
    ],
  exports: [
    HomePageComponent,
    StarBackgroundComponent
  ]
})
export class HomeModule { }
