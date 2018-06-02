import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalActualEarnedvalComponent } from './periodical-actual-earnedval.component';

describe('PeriodicalActualEarnedvalComponent', () => {
  let component: PeriodicalActualEarnedvalComponent;
  let fixture: ComponentFixture<PeriodicalActualEarnedvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalActualEarnedvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalActualEarnedvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
