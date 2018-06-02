import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpServiceHistoryTabComponent } from './emp-service-history-tab.component';

describe('EmpServiceHistoryTabComponent', () => {
  let component: EmpServiceHistoryTabComponent;
  let fixture: ComponentFixture<EmpServiceHistoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpServiceHistoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpServiceHistoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
