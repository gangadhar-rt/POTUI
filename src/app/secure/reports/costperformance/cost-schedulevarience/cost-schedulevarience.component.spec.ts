import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSchedulevarienceComponent } from './cost-schedulevarience.component';

describe('CostSchedulevarienceComponent', () => {
  let component: CostSchedulevarienceComponent;
  let fixture: ComponentFixture<CostSchedulevarienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostSchedulevarienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSchedulevarienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
