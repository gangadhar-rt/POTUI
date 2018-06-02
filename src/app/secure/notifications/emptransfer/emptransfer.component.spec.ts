import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptransferComponent } from './emptransfer.component';

describe('EmptransferComponent', () => {
  let component: EmptransferComponent;
  let fixture: ComponentFixture<EmptransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
