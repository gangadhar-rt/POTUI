import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorestackbalanceComponent } from './storestackbalance.component';

describe('StorestackbalanceComponent', () => {
  let component: StorestackbalanceComponent;
  let fixture: ComponentFixture<StorestackbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorestackbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorestackbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
