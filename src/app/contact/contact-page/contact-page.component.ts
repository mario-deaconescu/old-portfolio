import { Component } from '@angular/core';
import {PageComponent} from "@app/page-component/page.component";
import {Meta, Title} from "@angular/platform-browser";
import {MobileService} from "@aux/mobile.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent extends PageComponent{

  protected override readonly description: string = 'If you need a developer for your team, or you need help with a project, we can talk about it.';
  protected readonly email = 'mariodeaconescu2003@gmail.com';

  constructor(protected override meta: Meta, protected override title: Title, protected mobile: MobileService) {
    super(meta, title);
  }
}
