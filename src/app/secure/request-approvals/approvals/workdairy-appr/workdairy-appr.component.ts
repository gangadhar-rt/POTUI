import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-workdairy-appr',
  templateUrl: './workdairy-appr.component.html',
  styleUrls: ['./workdairy-appr.component.less'],
  providers: [ApiService]
})
export class WorkdairyApprComponent implements OnInit {
  request: any = { project: '', eps: '', id: 0 };
  getpop = false;
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
  }
}
