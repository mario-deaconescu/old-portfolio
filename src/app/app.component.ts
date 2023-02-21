import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {RouterOutlet} from "@angular/router";
import {MobileService} from "@aux/mobile.service";
import * as AOS from "aos";
export const fadeAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({
          opacity: 0,
        })
      ]),
      group([
        query(':enter', [
          animate('300ms', style({ opacity: 1 }))
        ]),
        query(':leave', [
          animate('300ms', style({ opacity: 0 }))
        ]),
      ])
    ])
  ]);
export const slideAnimation =
  trigger('routeAnimations', [
    transition('Home => Experience', slideTo('right') ),
    transition('Home => Contact', slideTo('right') ),
    transition('Experience => Contact', slideTo('right') ),
    transition('Experience => Home', slideTo('left') ),
    transition('Contact => Home', slideTo('left') ),
    transition('Contact => Experience', slideTo('left') ),
  ]);
function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-110%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '110%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
/*export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-110%'})
      ]),
      group([
        query(':leave', [
          animate('300ms ease', style({ left: '110%'}))
        ]),
        query(':enter', [
          animate('300ms ease', style({ left: '0%'}))
        ])
      ]),
    ]),
  ]);*/
@Component({
  selector: 'app-root',
  animations: [slideAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(public mobile: MobileService) {
  }

  ngOnInit() {
    AOS.init();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'portfolio';
}
