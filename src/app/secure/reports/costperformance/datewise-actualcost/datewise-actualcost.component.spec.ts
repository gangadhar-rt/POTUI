import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseActualcostComponent } from './datewise-actualcost.component';

describe('DatewiseActualcostComponent', () => {
  let component: DatewiseActualcostComponent;
  let fixture: ComponentFixture<DatewiseActualcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseActualcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseActualcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
