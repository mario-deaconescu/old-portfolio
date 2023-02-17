import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  constructor(private eleRef : ElementRef) {}

  ngOnInit(): void {
    this.initialTop = parseInt(this.eleRef.nativeElement.style.top)
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    // Add parallax effect based of parallax ratio
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
