import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {Router, RouterOutlet} from "@angular/router";
import {MobileService} from "@aux/mobile.service";
import * as AOS from "aos";
import {Meta} from "@angular/platform-browser";
import {ViewportScroller} from "@angular/common";
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
        transform: 'translateX(0)',
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translateX(${direction === 'left' ? -100 : 100}%)` })
    ]),
    group([
      query(':leave', [
        animate('600ms ease',
          style({
          transform: `translateX(${direction === 'left' ? 100 : -100}%)`
          })
        )
      ], optional),
      query(':enter', [
        animate('600ms ease',
          style({
            transform: 'translateX(0)',
          })
        )
      ])
    ]),
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

  private readonly keywords: string[] = [
    'software developer',
    'software engineer',
    'programmer',
    'full stack',
    'angular',
    'portfolio',
    'resume',
    'awarded',
  ]

  constructor(private meta: Meta, public mobile: MobileService) {
    this.meta.addTag({name: 'keywords', content: this.keywords.join(', ')})
  }

  ngOnInit() {
    AOS.init();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'portfolio';
}
