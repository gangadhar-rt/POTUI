import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEstimatedComponent } from './schedule-estimated.component';

describe('ScheduleEstimatedComponent', () => {
  let component: ScheduleEstimatedComponent;
  let fixture: ComponentFixture<ScheduleEstimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEstimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEstimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
