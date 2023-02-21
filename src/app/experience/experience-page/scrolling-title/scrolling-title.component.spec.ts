import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingTitleComponent } from './scrolling-title.component';

describe('ScrollingTitleComponent', () => {
  let component: ScrollingTitleComponent;
  let fixture: ComponentFixture<ScrollingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
