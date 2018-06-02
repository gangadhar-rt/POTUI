import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstBudgetComponent } from './const-budget.component';

describe('ConstBudgetComponent', () => {
  let component: ConstBudgetComponent;
  let fixture: ComponentFixture<ConstBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
