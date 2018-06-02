import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactDetailsTabComponent } from './employee-contact-details-tab.component';

describe('EmployeeContactDetailsTabComponent', () => {
  let component: EmployeeContactDetailsTabComponent;
  let fixture: ComponentFixture<EmployeeContactDetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContactDetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
