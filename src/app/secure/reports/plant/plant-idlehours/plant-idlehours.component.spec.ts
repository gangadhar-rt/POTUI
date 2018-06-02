import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantIdlehoursComponent } from './plant-idlehours.component';

describe('PlantIdlehoursComponent', () => {
  let component: PlantIdlehoursComponent;
  let fixture: ComponentFixture<PlantIdlehoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantIdlehoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantIdlehoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
