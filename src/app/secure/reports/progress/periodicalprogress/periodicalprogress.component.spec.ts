import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalprogressComponent } from './periodicalprogress.component';

describe('PeriodicalprogressComponent', () => {
  let component: PeriodicalprogressComponent;
  let fixture: ComponentFixture<PeriodicalprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
