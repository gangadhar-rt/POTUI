import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatewiseprogressComponent } from './datewiseprogress.component';

describe('DatewiseprogressComponent', () => {
  let component: DatewiseprogressComponent;
  let fixture: ComponentFixture<DatewiseprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatewiseprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatewiseprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
