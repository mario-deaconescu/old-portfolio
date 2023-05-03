import {Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {MobileService} from "@aux/mobile.service";
import {Feature} from "@aux/feature.interface";

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.sass']
})
export class BulletListComponent implements OnInit, OnDestroy{

  @Input() items!: Feature[];
  @ViewChildren('bullet_item') featuresElements: QueryList<ElementRef> = new QueryList<ElementRef>();

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
        previousElementRef.nativeElement.classList.remove('bullet-list-hovered');
        elementRef.nativeElement.classList.add('bullet-list-hovered');
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
