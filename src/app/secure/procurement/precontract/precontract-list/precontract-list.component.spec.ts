import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecontractListComponent } from './precontract-list.component';

describe('PrecontractListComponent', () => {
  let component: PrecontractListComponent;
  let fixture: ComponentFixture<PrecontractListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecontractListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecontractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
