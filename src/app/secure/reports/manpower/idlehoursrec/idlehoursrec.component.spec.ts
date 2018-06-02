import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlehoursrecComponent } from './idlehoursrec.component';

describe('IdlehoursrecComponent', () => {
  let component: IdlehoursrecComponent;
  let fixture: ComponentFixture<IdlehoursrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdlehoursrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdlehoursrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
