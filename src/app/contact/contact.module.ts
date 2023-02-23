import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";



@NgModule({
  declarations: [
    ContactPageComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatRippleModule
    ]
})
export class ContactModule { }
