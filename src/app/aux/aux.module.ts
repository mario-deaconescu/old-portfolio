import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatDirective} from "@aux/float.directive";
import {MobileService} from "@aux/mobile.service";
import { ParallaxDirective } from './parallax.directive';



@NgModule({
  declarations: [
    FloatDirective,
    ParallaxDirective,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MobileService
  ],
    exports: [
        FloatDirective,
        ParallaxDirective
    ]
})
export class AuxModule { }
