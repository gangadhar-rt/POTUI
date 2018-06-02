import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialtransferComponent } from './materialtransfer.component';

describe('MaterialtransferComponent', () => {
  let component: MaterialtransferComponent;
  let fixture: ComponentFixture<MaterialtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
