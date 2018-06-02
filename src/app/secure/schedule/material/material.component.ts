import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less'],
  providers: [ApiService]
})
export class MaterialComponent implements OnInit, OnChanges {
  @Input()
  projid: any;
  @Input()
  baseline: any;
  List: any = [];
  records = 10;
  curveData: any = [];
  @Output() update = new EventEmitter<any>();
  selectedid = '';
  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.projid) {

      this.getDetails();
    }
    if (this.baseline && this.projid) {
      this.getcurves();
    }
  }
  getDetails() {
    let req = { "status": 1, "projId": this.projid, "scheduleItemType": "M" };
    this._service.PostService(req, '/projschedules/getProjBudgetMaterialDetails')
      .subscribe(data => {
        this.List = data;
      }, error => console.log(error));
  }
  getcurves() {
    let req = { "status": 1, "projId": this.projid, "baseLineId": parseInt(this.baseline), "scheduleItemType": "M" };
    this._service.PostService(req, '/projschedules/getProjScheduleMaterialDetails')
      .subscribe(data => {
        this.curveData = data.projScheduleMaterialTOs;
      }, error => console.log(error));
  }
  // materialClassificationMap
  getVal(id, prop) {
    return this.List.materialClassificationMap[id][prop]
  }
  setChartData(val) {
    if (this.baseline) {
      val = this.curveData.filter(e => e.id == val.id)
      this.update.emit(val);
    }
  }
}
