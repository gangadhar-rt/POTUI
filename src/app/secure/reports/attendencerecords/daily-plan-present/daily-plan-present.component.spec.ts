import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanPresentComponent } from './daily-plan-present.component';

describe('DailyPlanPresentComponent', () => {
  let component: DailyPlanPresentComponent;
  let fixture: ComponentFixture<DailyPlanPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPlanPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlanPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
