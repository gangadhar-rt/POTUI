import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressplanActualComponent } from './progressplan-actual.component';

describe('ProgressplanActualComponent', () => {
  let component: ProgressplanActualComponent;
  let fixture: ComponentFixture<ProgressplanActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressplanActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressplanActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
