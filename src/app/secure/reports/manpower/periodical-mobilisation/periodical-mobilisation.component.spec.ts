import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalMobilisationComponent } from './periodical-mobilisation.component';

describe('PeriodicalMobilisationComponent', () => {
  let component: PeriodicalMobilisationComponent;
  let fixture: ComponentFixture<PeriodicalMobilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicalMobilisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicalMobilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
