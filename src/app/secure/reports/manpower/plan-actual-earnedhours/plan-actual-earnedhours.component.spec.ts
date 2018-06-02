import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActualEarnedhoursComponent } from './plan-actual-earnedhours.component';

describe('PlanActualEarnedhoursComponent', () => {
  let component: PlanActualEarnedhoursComponent;
  let fixture: ComponentFixture<PlanActualEarnedhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActualEarnedhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActualEarnedhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
