import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDeductionsTabComponent } from './pay-deductions-tab.component';

describe('PayDeductionsTabComponent', () => {
  let component: PayDeductionsTabComponent;
  let fixture: ComponentFixture<PayDeductionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDeductionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDeductionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
