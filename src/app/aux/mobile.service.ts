import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  public isMobile: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Web]).subscribe((result) => {
      this.isMobile = !result.matches;
    })
  }
}
