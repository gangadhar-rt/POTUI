import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantEquipmentComponent } from './plant-equipment.component';

describe('PlantEquipmentComponent', () => {
  let component: PlantEquipmentComponent;
  let fixture: ComponentFixture<PlantEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
