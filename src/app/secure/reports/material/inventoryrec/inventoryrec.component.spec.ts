import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryrecComponent } from './inventoryrec.component';

describe('InventoryrecComponent', () => {
  let component: InventoryrecComponent;
  let fixture: ComponentFixture<InventoryrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
