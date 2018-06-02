import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRatesComponent } from './schedule-rates.component';

describe('ScheduleRatesComponent', () => {
  let component: ScheduleRatesComponent;
  let fixture: ComponentFixture<ScheduleRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
