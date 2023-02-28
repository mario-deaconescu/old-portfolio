import {Component, Input} from '@angular/core';
import {NgtGLTFLoader} from "@angular-three/soba/loaders";
import {mergeMap, Observable} from "rxjs";
import {Object3D} from "three";
import {MobileService} from "@aux/mobile.service";
import {CDNPipe} from "@aux/cdn-pipe.pipe";

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.sass']
})
export class RobotComponent{

  @Input() speed: number = 0.1;

  protected robot$: Observable<any> = this.mobile.isMobile$.pipe(
    mergeMap(isMobile =>
      this.loader.load(
        this.cdn.transform('models/' + (isMobile ? 'robot-mobile' : 'robot-mobile') + '.gltf'))
    ));

  constructor(private loader: NgtGLTFLoader, protected mobile: MobileService, private cdn: CDNPipe) {
  }


  onBeforeRender(object: Object3D) {
    object.rotation.y += this.speed;
  }
}
