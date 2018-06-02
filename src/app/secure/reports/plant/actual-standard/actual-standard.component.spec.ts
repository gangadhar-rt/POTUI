import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualStandardComponent } from './actual-standard.component';

describe('ActualStandardComponent', () => {
  let component: ActualStandardComponent;
  let fixture: ComponentFixture<ActualStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
