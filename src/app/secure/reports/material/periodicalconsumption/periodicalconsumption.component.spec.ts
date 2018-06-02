import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalconsumptionComponent } from './periodicalconsumption.component';

describe('PeriodicalconsumptionComponent', () => {
  let component: PeriodicalconsumptionComponent;
  let fixture: ComponentFixture<PeriodicalconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
