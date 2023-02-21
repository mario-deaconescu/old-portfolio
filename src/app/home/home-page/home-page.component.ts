import {Component} from '@angular/core';
import {MobileService} from "@aux/mobile.service";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {

  public logoList = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    'https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg',
    'https://cdn.freebiesupply.com/logos/large/2x/unity-69-logo-png-transparent.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png',
    'https://www.freepnglogos.com/uploads/linux-png/linux-logo-logo-brands-for-0.png',
    'https://assets.stickpng.com/images/5848104fcef1014c0b5e4950.png',
    'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
    'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'
  ]

  constructor(public responsive: MobileService, public platform: Platform) {}

}
