import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "@home/home-page/home-page.component";
import {ExperiencePageComponent} from "@app/experience/experience-page/experience-page.component";
import {ContactPageComponent} from "@app/contact/contact-page/contact-page.component";

const routes: Routes = [
  { path: '', title: "Mario Deaconescu", component: HomePageComponent, data: {animation: 'Home'} },
  { path: 'experience', title: "Experience - Mario Deaconescu", component: ExperiencePageComponent, data: {animation: 'Experience'}},
  { path: 'contact', title: "Contact - Mario Deaconescu", component: ContactPageComponent, data: {animation: 'Contact'} }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ]
})
export class AppRoutingModule { }
