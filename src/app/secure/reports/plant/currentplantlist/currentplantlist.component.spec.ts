import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentplantlistComponent } from './currentplantlist.component';

describe('CurrentplantlistComponent', () => {
  let component: CurrentplantlistComponent;
  let fixture: ComponentFixture<CurrentplantlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentplantlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentplantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
