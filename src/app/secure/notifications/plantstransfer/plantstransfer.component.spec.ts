import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantstransferComponent } from './plantstransfer.component';

describe('PlantstransferComponent', () => {
  let component: PlantstransferComponent;
  let fixture: ComponentFixture<PlantstransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantstransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantstransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
