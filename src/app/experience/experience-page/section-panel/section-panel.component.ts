import {Component, Input} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {Feature} from "@aux/feature.interface";

@Component({
  selector: 'experience-section-panel',
  templateUrl: './section-panel.component.html',
  styleUrls: ['./section-panel.component.sass']
})
export class SectionPanelComponent {

  @Input() title!: string;
  @Input() technologies!: Feature[];

  constructor(public mobile: MobileService) {
    const x: string[] = [];
    const y = x.map((x) => x.length);
  }

}
