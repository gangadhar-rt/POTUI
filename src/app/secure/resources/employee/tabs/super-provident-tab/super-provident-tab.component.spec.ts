import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperProvidentTabComponent } from './super-provident-tab.component';

describe('SuperProvidentTabComponent', () => {
  let component: SuperProvidentTabComponent;
  let fixture: ComponentFixture<SuperProvidentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperProvidentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperProvidentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
