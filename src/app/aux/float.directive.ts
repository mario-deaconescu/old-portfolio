import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Directive({
  selector: '[float]'
})
export class FloatDirective implements OnDestroy {

  @Input("floatSpeed") speed: number = 1;

  private targetDirection: [x: number, y: number] = [0, 0];
  private elementRef: HTMLElement;

  private destinationIntervalSubscription: Subscription;
  private updateIntervalSubscription: Subscription;

  constructor(private element: ElementRef) {
    const updateInterval = interval(1);
    const destinationInterval = interval(400);
    this.elementRef = this.element.nativeElement;
    this.destinationIntervalSubscription = destinationInterval.subscribe(() => {
      // Get random direction vector with length 1
      const randomAngle = Math.random() * 2 * Math.PI;
      this.targetDirection = [Math.cos(randomAngle), Math.sin(randomAngle)];
    })
    this.updateIntervalSubscription = updateInterval.subscribe(
      () => {
        // Get element style.left and style.top and move them towards targetDirection
        const currentX = parseFloat(this.elementRef.style.left);
        const currentY = parseFloat(this.elementRef.style.top);
        const targetX = currentX + this.targetDirection[0] * this.speed;
        const targetY = currentY + this.targetDirection[1] * this.speed;
        this.elementRef.style.left = `${targetX}px`;
        this.elementRef.style.top = `${targetY}px`;
      }
    )
  }
  public ngOnDestroy(): void {
    this.updateIntervalSubscription.unsubscribe();
    this.destinationIntervalSubscription.unsubscribe();
  }

}
