import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared';

@Component({
  selector: 'app-cost-schedulevarience',
  templateUrl: './cost-schedulevarience.component.html',
  styleUrls: ['./cost-schedulevarience.component.less'],
  providers: [ApiService]
})
export class CostSchedulevarienceComponent implements OnInit {
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