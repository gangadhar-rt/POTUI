import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPayableRatesTabComponent } from './regular-payable-rates-tab.component';

describe('RegularPayableRatesTabComponent', () => {
  let component: RegularPayableRatesTabComponent;
  let fixture: ComponentFixture<RegularPayableRatesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPayableRatesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPayableRatesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
