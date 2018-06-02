import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';

@Component({
  selector: 'app-daily-emprecords',
  templateUrl: './daily-emprecords.component.html',
  styleUrls: ['./daily-emprecords.component.less'],
  providers: [ApiService]
})
export class DailyEmprecordsComponent implements OnInit {
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
