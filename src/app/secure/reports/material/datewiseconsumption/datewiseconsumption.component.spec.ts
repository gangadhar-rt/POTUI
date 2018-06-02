import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseconsumptionComponent } from './datewiseconsumption.component';

describe('DatewiseconsumptionComponent', () => {
  let component: DatewiseconsumptionComponent;
  let fixture: ComponentFixture<DatewiseconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
