import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseActualEarnedvalComponent } from './datewise-actual-earnedval.component';

describe('DatewiseActualEarnedvalComponent', () => {
  let component: DatewiseActualEarnedvalComponent;
  let fixture: ComponentFixture<DatewiseActualEarnedvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseActualEarnedvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseActualEarnedvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
