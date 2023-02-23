import {Injectable, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable()
export abstract class PageComponent implements OnInit{

  protected readonly description: string = '';

  protected constructor(protected meta: Meta, protected title: Title){
  }

  ngOnInit(): void {
    this.meta.updateTag({name: 'description', content: this.description});
  }

}
