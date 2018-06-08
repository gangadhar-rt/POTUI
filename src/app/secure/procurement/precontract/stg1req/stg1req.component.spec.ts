import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stg1reqComponent } from './stg1req.component';

describe('Stg1reqComponent', () => {
  let component: Stg1reqComponent;
  let fixture: ComponentFixture<Stg1reqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stg1reqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stg1reqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
