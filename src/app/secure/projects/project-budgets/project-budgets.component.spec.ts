import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBudgetsComponent } from './project-budgets.component';

describe('ProjectBudgetsComponent', () => {
  let component: ProjectBudgetsComponent;
  let fixture: ComponentFixture<ProjectBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
