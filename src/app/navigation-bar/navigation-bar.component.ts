import {Component, HostListener, Input} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
    { name: 'Experience', route: '/experience' },
    { name: 'About', route: '/about'}
    ]

  constructor(public router: Router) {}

  public get activeRoute(): string {
    return this.router.url;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.passedOffset = window.scrollY > this.offset;
  }

}
