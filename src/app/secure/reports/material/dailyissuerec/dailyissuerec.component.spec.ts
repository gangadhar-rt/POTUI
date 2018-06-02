import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyissuerecComponent } from './dailyissuerec.component';

describe('DailyissuerecComponent', () => {
  let component: DailyissuerecComponent;
  let fixture: ComponentFixture<DailyissuerecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyissuerecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyissuerecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
