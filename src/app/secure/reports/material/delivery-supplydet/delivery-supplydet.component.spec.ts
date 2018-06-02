import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySupplydetComponent } from './delivery-supplydet.component';

describe('DeliverySupplydetComponent', () => {
  let component: DeliverySupplydetComponent;
  let fixture: ComponentFixture<DeliverySupplydetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverySupplydetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySupplydetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
