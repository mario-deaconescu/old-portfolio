import {Component, ElementRef, Input, OnDestroy, QueryList, ViewChildren} from '@angular/core';
import {ProgressAnchorDirective} from "@app/experience/experience-page/progress-bar/progress-anchor.directive";
import {fromEvent, map, startWith, Subscription} from "rxjs";

@Component({
  selector: 'experience-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnDestroy {

  @Input('anchors') anchors!: QueryList<ProgressAnchorDirective>;
  @ViewChildren('bullet') buttons!: QueryList<ElementRef>;

  private scrollSubscription: Subscription;

  constructor() {
    this.scrollSubscription = fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY),
      startWith(window.scrollY),
      map((scrollY: number) => {
        // Return the element that is closest to the bottom of the viewport
        if (this.anchors?.toArray().length === 0) return null;
        if (this.anchors?.toArray().length === 1) return this.anchors?.toArray()[0];
        return this.anchors?.toArray().reduce((previous: ProgressAnchorDirective, current: ProgressAnchorDirective) => {
          return (current.element.offsetTop <= scrollY + window.innerHeight / 2) ? current : previous;
        })
        }
      )
    ).subscribe((anchor: ProgressAnchorDirective | null) => {
      this.buttons?.toArray().forEach((button: ElementRef) => button.nativeElement.classList.remove('active-anchor'));
      this.buttons?.find((button: ElementRef) => button.nativeElement.getAttribute('id') === anchor?.anchorName)?.nativeElement.classList.add('active-anchor');
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }


  public scrollTo(anchor: ProgressAnchorDirective) {
    anchor.element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
