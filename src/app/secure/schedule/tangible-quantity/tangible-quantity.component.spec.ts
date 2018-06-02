import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TangibleQuantityComponent } from './tangible-quantity.component';

describe('TangibleQuantityComponent', () => {
  let component: TangibleQuantityComponent;
  let fixture: ComponentFixture<TangibleQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TangibleQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TangibleQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
