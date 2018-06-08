import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stg2reqComponent } from './stg2req.component';

describe('Stg2reqComponent', () => {
  let component: Stg2reqComponent;
  let fixture: ComponentFixture<Stg2reqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stg2reqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stg2reqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
