import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountDetailsTabComponent } from './bank-account-details-tab.component';

describe('BankAccountDetailsTabComponent', () => {
  let component: BankAccountDetailsTabComponent;
  let fixture: ComponentFixture<BankAccountDetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountDetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
