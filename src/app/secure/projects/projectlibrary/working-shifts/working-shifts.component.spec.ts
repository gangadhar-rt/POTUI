import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingShiftsComponent } from './working-shifts.component';

describe('WorkingShiftsComponent', () => {
  let component: WorkingShiftsComponent;
  let fixture: ComponentFixture<WorkingShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
