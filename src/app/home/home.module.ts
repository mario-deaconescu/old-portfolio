import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {AuxModule} from "@aux/aux.module";
import {MatDividerModule} from "@angular/material/divider";
import {StarBackgroundComponent} from '../star-background/star-background.component';
import {MatIconModule} from "@angular/material/icon";
import {ProjectPanelComponent} from './home-page/project-panel/project-panel.component';
import {RouterLink} from "@angular/router";
import {RobotComponent} from './home-page/robot/robot.component';
import {NgtCanvas, NgtObjectPassThrough} from "@angular-three/core";
import {NgtMesh} from "@angular-three/core/meshes";
import {NgtAmbientLight, NgtDirectionalLight} from "@angular-three/core/lights";
import {NgtGroup} from "@angular-three/core/group";
import {NgtPrimitive} from "@angular-three/core/primitive";
import {NgtPerspectiveCamera} from "@angular-three/core/cameras";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    HomePageComponent,
    StarBackgroundComponent,
    ProjectPanelComponent,
    RobotComponent
  ],
  imports: [
    CommonModule,
    AuxModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
    NgtCanvas,
    NgtMesh,
    NgtAmbientLight,
    NgtGroup,
    NgtPrimitive,
    NgtObjectPassThrough,
    NgtDirectionalLight,
    NgtPerspectiveCamera,
    MatProgressSpinnerModule,
  ],
    exports: [
        HomePageComponent,
        StarBackgroundComponent,
        RobotComponent
    ]
})
export class HomeModule { }
