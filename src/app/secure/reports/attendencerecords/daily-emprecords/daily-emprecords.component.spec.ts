import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEmprecordsComponent } from './daily-emprecords.component';

describe('DailyEmprecordsComponent', () => {
  let component: DailyEmprecordsComponent;
  let fixture: ComponentFixture<DailyEmprecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEmprecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEmprecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
