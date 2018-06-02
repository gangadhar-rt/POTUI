import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPlantrecComponent } from './monthly-plantrec.component';

describe('MonthlyPlantrecComponent', () => {
  let component: MonthlyPlantrecComponent;
  let fixture: ComponentFixture<MonthlyPlantrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPlantrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPlantrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
