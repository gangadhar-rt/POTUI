import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentemplistComponent } from './currentemplist.component';

describe('CurrentemplistComponent', () => {
  let component: CurrentemplistComponent;
  let fixture: ComponentFixture<CurrentemplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentemplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentemplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
