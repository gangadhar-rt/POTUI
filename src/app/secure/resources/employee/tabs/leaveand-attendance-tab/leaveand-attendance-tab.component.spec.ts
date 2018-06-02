import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveandAttendanceTabComponent } from './leaveand-attendance-tab.component';

describe('LeaveandAttendanceTabComponent', () => {
  let component: LeaveandAttendanceTabComponent;
  let fixture: ComponentFixture<LeaveandAttendanceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveandAttendanceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveandAttendanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
