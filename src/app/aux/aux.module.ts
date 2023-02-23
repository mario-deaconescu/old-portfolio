import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatDirective} from "@aux/float.directive";
import {MobileService} from "@aux/mobile.service";
import { ParallaxDirective } from './parallax.directive';
import { CDNPipe } from '@aux/cdn-pipe.pipe';



@NgModule({
  declarations: [
    FloatDirective,
    ParallaxDirective,
    CDNPipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MobileService,
    CDNPipe
  ],
    exports: [
        FloatDirective,
        ParallaxDirective,
        CDNPipe
    ]
})
export class AuxModule { }
