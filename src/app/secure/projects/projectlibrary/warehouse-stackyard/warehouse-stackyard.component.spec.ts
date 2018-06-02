import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStackyardComponent } from './warehouse-stackyard.component';

describe('WarehouseStackyardComponent', () => {
  let component: WarehouseStackyardComponent;
  let fixture: ComponentFixture<WarehouseStackyardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseStackyardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseStackyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
