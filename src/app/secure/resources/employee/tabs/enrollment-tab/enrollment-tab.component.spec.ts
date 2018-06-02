import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentTabComponent } from './enrollment-tab.component';

describe('EnrollmentTabComponent', () => {
  let component: EnrollmentTabComponent;
  let fixture: ComponentFixture<EnrollmentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
