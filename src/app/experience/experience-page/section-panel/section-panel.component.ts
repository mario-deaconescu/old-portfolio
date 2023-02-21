import {Component, Input} from '@angular/core';
import {MobileService} from "@aux/mobile.service";

interface Technology {
  name: string;
  icon: string;
}

@Component({
  selector: 'experience-section-panel',
  templateUrl: './section-panel.component.html',
  styleUrls: ['./section-panel.component.sass']
})
export class SectionPanelComponent {

  @Input() title!: string;
  @Input() technologies!: Technology[];

  constructor(public mobile: MobileService) { }

}
