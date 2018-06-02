import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocDailydeployComponent } from './coc-dailydeploy.component';

describe('CocDailydeployComponent', () => {
  let component: CocDailydeployComponent;
  let fixture: ComponentFixture<CocDailydeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocDailydeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocDailydeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
