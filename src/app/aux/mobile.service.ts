import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  public isMobile$: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Web]).pipe(map(result => !result.matches));
  }
}
