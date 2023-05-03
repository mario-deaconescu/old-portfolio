import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatDirective} from "@aux/float.directive";
import {MobileService} from "@aux/mobile.service";
import { ParallaxDirective } from './parallax.directive';
import { CDNPipe } from '@aux/cdn-pipe.pipe';
import { BulletListComponent } from './bullet-list/bullet-list.component';



@NgModule({
  declarations: [
    FloatDirective,
    ParallaxDirective,
    CDNPipe,
    BulletListComponent,
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
        CDNPipe,
        BulletListComponent
    ]
})
export class AuxModule { }
