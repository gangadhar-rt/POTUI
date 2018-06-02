import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDeployCrewwiseComponent } from './daily-deploy-crewwise.component';

describe('DailyDeployCrewwiseComponent', () => {
  let component: DailyDeployCrewwiseComponent;
  let fixture: ComponentFixture<DailyDeployCrewwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDeployCrewwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDeployCrewwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
