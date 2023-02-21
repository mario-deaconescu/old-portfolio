import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPanelComponent } from './section-panel.component';

describe('SectionPanelComponent', () => {
  let component: SectionPanelComponent;
  let fixture: ComponentFixture<SectionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
