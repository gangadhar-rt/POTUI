import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeWorksComponent } from './scope-works.component';

describe('ScopeWorksComponent', () => {
  let component: ScopeWorksComponent;
  let fixture: ComponentFixture<ScopeWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
