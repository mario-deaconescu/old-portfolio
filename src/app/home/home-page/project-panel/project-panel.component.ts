import {Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {firstValueFrom} from "rxjs";
import {Feature} from "@aux/feature.interface";

@Component({
  selector: 'home-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.sass']
})
export class ProjectPanelComponent implements OnInit{
  @Input('features') features: string[] = [];
  @Input('title') title: string = '';
  @Input('route') route: string = '';

  protected convertedFeatures: Feature[] = [];

  ngOnInit() {
    this.convertedFeatures = this.features.map((feature) => {
      return {name: feature};
    });
  }

}
