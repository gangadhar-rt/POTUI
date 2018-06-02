import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtransferRestrictionComponent } from './materialtransfer-restriction.component';

describe('MaterialtransferRestrictionComponent', () => {
  let component: MaterialtransferRestrictionComponent;
  let fixture: ComponentFixture<MaterialtransferRestrictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialtransferRestrictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialtransferRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
