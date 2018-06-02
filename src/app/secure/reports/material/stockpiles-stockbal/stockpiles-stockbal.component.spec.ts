import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpilesStockbalComponent } from './stockpiles-stockbal.component';

describe('StockpilesStockbalComponent', () => {
  let component: StockpilesStockbalComponent;
  let fixture: ComponentFixture<StockpilesStockbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpilesStockbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpilesStockbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
