import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "@home/home-page/home-page.component";
import {ExperiencePageComponent} from "@app/experience/experience-page/experience-page.component";
import {ContactPageComponent} from "@app/contact/contact-page/contact-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent, data: {animation: 'Home'} },
  { path: 'experience', component: ExperiencePageComponent, data: {animation: 'Experience'}},
  { path: 'contact', component: ContactPageComponent, data: {animation: 'Contact'} }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
