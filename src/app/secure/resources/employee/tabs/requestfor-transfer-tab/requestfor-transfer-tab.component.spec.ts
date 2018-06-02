import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestforTransferTabComponent } from './requestfor-transfer-tab.component';

describe('RequestforTransferTabComponent', () => {
  let component: RequestforTransferTabComponent;
  let fixture: ComponentFixture<RequestforTransferTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestforTransferTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestforTransferTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
