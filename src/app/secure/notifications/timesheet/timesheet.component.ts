import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { IMyDrpOptions } from 'mydaterangepicker';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less'],
  providers: [ApiService]
})
export class TimesheetComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mmm-yyyy',
    openSelectorOnInputClick: true,
    editableDateRangeField: false
  };
  private model: any = {
  };
  records: any = 10;
  List: any = [];
  preData: any = [];
  getpop = false;
  request: any = { project: '', eps: '', id: 0 };
  request1: any = { notifyStatus: 'Submitted', code: '' };
  constructor(private _service: ApiService) { }

  ngOnInit() {
    this.getPreData();
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
  }

  getData() {
    let date = this.model.formatted.split(' - ')
    let req: any = { "status": 1, "fromDate": date[0], "toDate": date[1], "notifyStatus": this.request1.notifyStatus };
    if (this.request.id) {
      req.projId = this.request.id;
    }
    if (this.request1.code) {
      req.code = this.request1.code;
    }
    this._service.PostService(req, '/notification/getTimeSheetNotifications')
      .subscribe(data => {
        this.List = data.timeSheetNotificationsTOs;
      }, error => console.log(error));
  }
  getPreData() {
    const req = {};
    this._service.PostService(req, '/notification/notificationStatusOnLoad')
      .subscribe(data => {
        this.preData = data;
      }, error => console.log(error));
  }
}
