import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocwiseDailydeploymentComponent } from './cocwise-dailydeployment.component';

describe('CocwiseDailydeploymentComponent', () => {
  let component: CocwiseDailydeploymentComponent;
  let fixture: ComponentFixture<CocwiseDailydeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocwiseDailydeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocwiseDailydeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
