import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[experienceProgressAnchor]'
})
export class ProgressAnchorDirective {

  @Input('experienceProgressAnchor') public anchorName: string = '';

  public element: HTMLElement;
  constructor(public elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

}
