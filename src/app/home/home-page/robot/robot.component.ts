import {Component, Input} from '@angular/core';
import {NgtGLTFLoader} from "@angular-three/soba/loaders";
import {Observable} from "rxjs";
import {Object3D} from "three";

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.sass']
})
export class RobotComponent {

  @Input() speed: number = 0.1;

  protected readonly robot$: Observable<any> = this.loader.load('assets/robot.gltf');

  constructor(private loader: NgtGLTFLoader) {
  }


  onBeforeRender(object: Object3D) {
    object.rotation.y += this.speed;
  }
}
