import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcodeScheduleComponent } from './costcode-schedule.component';

describe('CostcodeScheduleComponent', () => {
  let component: CostcodeScheduleComponent;
  let fixture: ComponentFixture<CostcodeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostcodeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostcodeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
