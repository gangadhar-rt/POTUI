import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared';


@Component({
  selector: 'app-cost-schedule-performence',
  templateUrl: './cost-schedule-performence.component.html',
  styleUrls: ['./cost-schedule-performence.component.less'],
  providers: [ApiService]
})
export class CostSchedulePerformenceComponent implements OnInit {

  getpop = false;
  request: any = { project: '', eps: '', id: 0 };
  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
  }
}