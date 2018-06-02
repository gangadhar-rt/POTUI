import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseActualhoursComponent } from './datewise-actualhours.component';

describe('DatewiseActualhoursComponent', () => {
  let component: DatewiseActualhoursComponent;
  let fixture: ComponentFixture<DatewiseActualhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseActualhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseActualhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
