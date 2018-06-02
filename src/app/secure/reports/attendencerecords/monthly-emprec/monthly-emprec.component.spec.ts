import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyEmprecComponent } from './monthly-emprec.component';

describe('MonthlyEmprecComponent', () => {
  let component: MonthlyEmprecComponent;
  let fixture: ComponentFixture<MonthlyEmprecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyEmprecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyEmprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
