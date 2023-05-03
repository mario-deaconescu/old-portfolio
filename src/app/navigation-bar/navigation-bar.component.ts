import {Component, HostListener, Input} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ViewportScroller} from "@angular/common";

interface NavItem {
  name: string;
  route: string;
}

@Component({
  selector: 'navigation-bar',
  animations: [
    trigger('offset', [
      state('initial', style({
        backgroundColor: '#00000000',
      })),
      state('past', style({
        backgroundColor: 'rgba(0,0,0,0.5)',
      })),
      transition('initial <=> past', [
        animate('0.2s')
      ]),
    ])
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent {

  @Input("offset") offset: number = 100;

  public passedOffset: boolean = false;

  public navItems: NavItem[] = [
    { name: 'Home', route: '/' },
    { name: 'Skills', route: '/skills' },
    { name: 'Contact', route: '/contact'}
    ]

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  public get activeRoute(): string {
    return this.router.url;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.passedOffset = window.scrollY > this.offset;
  }

  protected goTo = async (url: string) => {
    this.viewportScroller.scrollToPosition([0, 0]);
    //Wait until the scroll is finished, by waiting until the scroll position is 0
    while (this.viewportScroller.getScrollPosition()[1] !== 0) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    this.router.navigateByUrl(url);
  }

}
