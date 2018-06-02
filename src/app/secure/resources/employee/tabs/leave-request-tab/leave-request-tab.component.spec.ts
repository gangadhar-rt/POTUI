import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestTabComponent } from './leave-request-tab.component';

describe('LeaveRequestTabComponent', () => {
  let component: LeaveRequestTabComponent;
  let fixture: ComponentFixture<LeaveRequestTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveRequestTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
