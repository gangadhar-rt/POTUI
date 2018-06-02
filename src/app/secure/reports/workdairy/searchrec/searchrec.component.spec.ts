import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrecComponent } from './searchrec.component';

describe('SearchrecComponent', () => {
  let component: SearchrecComponent;
  let fixture: ComponentFixture<SearchrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
