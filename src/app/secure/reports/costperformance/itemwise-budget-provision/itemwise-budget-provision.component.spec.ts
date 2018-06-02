import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemwiseBudgetProvisionComponent } from './itemwise-budget-provision.component';

describe('ItemwiseBudgetProvisionComponent', () => {
  let component: ItemwiseBudgetProvisionComponent;
  let fixture: ComponentFixture<ItemwiseBudgetProvisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemwiseBudgetProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemwiseBudgetProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
