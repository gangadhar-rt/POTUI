import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';

@Component({
  selector: 'app-daily-plan-present',
  templateUrl: './daily-plan-present.component.html',
  styleUrls: ['./daily-plan-present.component.less'],
  providers: [ApiService]
})
export class DailyPlanPresentComponent implements OnInit {
  getpop = false;
  request: any = { project: '', eps: '', id: 0 };
  constructor(private _Service: ApiService) { }

  ngOnInit() {
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
  }
}
