import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalActualhoursComponent } from './periodical-actualhours.component';

describe('PeriodicalActualhoursComponent', () => {
  let component: PeriodicalActualhoursComponent;
  let fixture: ComponentFixture<PeriodicalActualhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalActualhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalActualhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
