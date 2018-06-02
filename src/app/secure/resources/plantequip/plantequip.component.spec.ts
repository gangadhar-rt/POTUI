import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantequipComponent } from './plantequip.component';

describe('PlantequipComponent', () => {
  let component: PlantequipComponent;
  let fixture: ComponentFixture<PlantequipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantequipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
