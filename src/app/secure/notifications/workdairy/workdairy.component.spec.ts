import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdairyComponent } from './workdairy.component';

describe('WorkdairyComponent', () => {
  let component: WorkdairyComponent;
  let fixture: ComponentFixture<WorkdairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
