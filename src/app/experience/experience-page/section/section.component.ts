import {Component, Input} from '@angular/core';

@Component({
  selector: 'experience-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent {

  @Input() title!: string;

}
