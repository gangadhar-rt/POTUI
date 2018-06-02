import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalProgressclaimComponent } from './periodical-progressclaim.component';

describe('PeriodicalProgressclaimComponent', () => {
  let component: PeriodicalProgressclaimComponent;
  let fixture: ComponentFixture<PeriodicalProgressclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalProgressclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalProgressclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
