import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeOutRatesTabComponent } from './charge-out-rates-tab.component';

describe('ChargeOutRatesTabComponent', () => {
  let component: ChargeOutRatesTabComponent;
  let fixture: ComponentFixture<ChargeOutRatesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeOutRatesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeOutRatesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
