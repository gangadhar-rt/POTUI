import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdairyApprComponent } from './workdairy-appr.component';

describe('WorkdairyApprComponent', () => {
  let component: WorkdairyApprComponent;
  let fixture: ComponentFixture<WorkdairyApprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdairyApprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdairyApprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
