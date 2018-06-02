import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalforTransferTabComponent } from './approvalfor-transfer-tab.component';

describe('ApprovalforTransferTabComponent', () => {
  let component: ApprovalforTransferTabComponent;
  let fixture: ComponentFixture<ApprovalforTransferTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalforTransferTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalforTransferTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
