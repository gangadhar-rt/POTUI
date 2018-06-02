import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRegularPayableRatesTabComponent } from './non-regular-payable-rates-tab.component';

describe('NonRegularPayableRatesTabComponent', () => {
  let component: NonRegularPayableRatesTabComponent;
  let fixture: ComponentFixture<NonRegularPayableRatesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRegularPayableRatesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRegularPayableRatesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
