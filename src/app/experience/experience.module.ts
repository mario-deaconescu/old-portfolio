import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProgressBarComponent } from './experience-page/progress-bar/progress-bar.component';
import { ProgressAnchorDirective } from './experience-page/progress-bar/progress-anchor.directive';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ScrollingTitleComponent } from './experience-page/scrolling-title/scrolling-title.component';
import { SectionPanelComponent } from './experience-page/section-panel/section-panel.component';
import {MatDividerModule} from "@angular/material/divider";
import { SectionComponent } from './experience-page/section/section.component';



@NgModule({
  declarations: [
    ExperiencePageComponent,
    ProgressBarComponent,
    ProgressAnchorDirective,
    ScrollingTitleComponent,
    SectionPanelComponent,
    SectionComponent
  ],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatDividerModule
    ],
  exports: [
    ExperiencePageComponent
  ]
})
export class ExperienceModule { }
