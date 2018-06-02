import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSchedulePerformenceComponent } from './cost-schedule-performence.component';

describe('CostSchedulePerformenceComponent', () => {
  let component: CostSchedulePerformenceComponent;
  let fixture: ComponentFixture<CostSchedulePerformenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostSchedulePerformenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSchedulePerformenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
