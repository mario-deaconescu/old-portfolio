import {Component} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {Platform} from "@angular/cdk/platform";
import {PageComponent} from "@app/page-component/page.component";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent extends PageComponent{

  protected override description: string = 'Hi, I\'m Mario Deaconescu, a software developer from Romania. I\'m currently studying Computer Science at the "University of Bucharest".';

  constructor(protected override meta: Meta, protected override title: Title, protected mobile: MobileService, protected platform: Platform) {
    super(meta, title);
  }

}
