import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlantrecComponent } from './daily-plantrec.component';

describe('DailyPlantrecComponent', () => {
  let component: DailyPlantrecComponent;
  let fixture: ComponentFixture<DailyPlantrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPlantrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlantrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
