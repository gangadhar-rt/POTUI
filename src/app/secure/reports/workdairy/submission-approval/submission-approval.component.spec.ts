import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionApprovalComponent } from './submission-approval.component';

describe('SubmissionApprovalComponent', () => {
  let component: SubmissionApprovalComponent;
  let fixture: ComponentFixture<SubmissionApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
