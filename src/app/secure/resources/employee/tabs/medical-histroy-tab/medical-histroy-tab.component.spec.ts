import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistroyTabComponent } from './medical-histroy-tab.component';

describe('MedicalHistroyTabComponent', () => {
  let component: MedicalHistroyTabComponent;
  let fixture: ComponentFixture<MedicalHistroyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistroyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistroyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
