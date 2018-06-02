import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateValuesComponent } from './generate-values.component';

describe('GenerateValuesComponent', () => {
  let component: GenerateValuesComponent;
  let fixture: ComponentFixture<GenerateValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
