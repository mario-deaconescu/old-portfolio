import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.sass']
})
export class ProjectPanelComponent {
  @Input('features') features: string[] = [];
  @Input('title') title: string = '';
  @Input('route') route: string = '';
}
