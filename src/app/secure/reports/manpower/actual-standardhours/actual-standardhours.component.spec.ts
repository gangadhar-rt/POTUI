import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualStandardhoursComponent } from './actual-standardhours.component';

describe('ActualStandardhoursComponent', () => {
  let component: ActualStandardhoursComponent;
  let fixture: ComponentFixture<ActualStandardhoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualStandardhoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualStandardhoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
