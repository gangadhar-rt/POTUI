import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemwisePlanActualcostComponent } from './itemwise-plan-actualcost.component';

describe('ItemwisePlanActualcostComponent', () => {
  let component: ItemwisePlanActualcostComponent;
  let fixture: ComponentFixture<ItemwisePlanActualcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemwisePlanActualcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemwisePlanActualcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
