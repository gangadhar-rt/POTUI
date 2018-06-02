import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NokdetailsTabComponent } from './nokdetails-tab.component';

describe('NokdetailsTabComponent', () => {
  let component: NokdetailsTabComponent;
  let fixture: ComponentFixture<NokdetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NokdetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NokdetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
