import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecontractComponent } from './precontract.component';

describe('PrecontractComponent', () => {
  let component: PrecontractComponent;
  let fixture: ComponentFixture<PrecontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
