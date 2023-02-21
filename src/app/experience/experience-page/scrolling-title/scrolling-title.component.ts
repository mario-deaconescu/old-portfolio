import {Component, ElementRef, HostListener, Input, OnDestroy, ViewChild} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'scrolling-title',
  templateUrl: './scrolling-title.component.html',
  styleUrls: ['./scrolling-title.component.sass']
})
export class ScrollingTitleComponent implements OnDestroy{
  @Input() name!: string;
  @Input() section!: HTMLElement;
  @ViewChild('title') title!: ElementRef;
  private mobileSubscription: Subscription;
  constructor(private mobile: MobileService) {
    this.mobileSubscription = this.mobile.isMobile$.subscribe((isMobile) => {
      this.minimumFontSizeREM = isMobile ? 2 : 3;
      this.fontScalar = isMobile ? 1 : 2;
    });
  }
  ngOnDestroy(): void {
    this.mobileSubscription.unsubscribe();
  }
  private minimumFontSizeREM: number = 2;
  private fontScalar: number = 1;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
    const topDistance = clamp(this.title.nativeElement.getBoundingClientRect().top, window.innerHeight * 0.1, window.innerHeight / 2);
    console.log(topDistance / window.innerHeight)
    this.title.nativeElement.style.fontSize = `${Math.max(this.minimumFontSizeREM, topDistance / window.innerHeight * 10 * this.fontScalar)}rem`;
    this.title.nativeElement.style.marginBottom = `${Math.max((topDistance / window.innerHeight * 2) ** 2 * window.innerHeight / 2, 30)}px`;
  }

}
