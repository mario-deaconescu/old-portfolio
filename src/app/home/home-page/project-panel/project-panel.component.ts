import {Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'home-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.sass']
})
export class ProjectPanelComponent implements OnInit, OnDestroy {
  @Input('features') features: string[] = [];
  @Input('title') title: string = '';
  @Input('route') route: string = '';
  @ViewChildren('project_feature_li') featuresElements: QueryList<ElementRef> = new QueryList<ElementRef>();

  constructor(private mobileService: MobileService) { }

  private animationInterval: any;
  private currentElementIndex: number = 0;

  private startAnimation = async () => {
    const isMobile = await firstValueFrom(this.mobileService.isMobile$);
    if (isMobile) {
      this.animationInterval = setInterval(() => {
        const elements = this.featuresElements.toArray();
        const elementRef = elements[this.currentElementIndex];
        let previousIndex = this.currentElementIndex - 1;
        if (previousIndex == -1) {
          previousIndex = elements.length - 1;
        }
        const previousElementRef = elements[previousIndex];
        previousElementRef.nativeElement.classList.remove('project-features-hovered');
        elementRef.nativeElement.classList.add('project-features-hovered');
        this.currentElementIndex += 1;
        if (this.currentElementIndex >= elements.length) {
          this.currentElementIndex = 0;
        }
      }, 1000);
    }
  }
  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    if(this.animationInterval)
      clearInterval(this.animationInterval);
  }

}
