import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsBuiltRecordsComponent } from './as-built-records.component';

describe('AsBuiltRecordsComponent', () => {
  let component: AsBuiltRecordsComponent;
  let fixture: ComponentFixture<AsBuiltRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsBuiltRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsBuiltRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
