import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-man-power',
  templateUrl: './man-power.component.html',
  styleUrls: ['./man-power.component.less'],
  providers: [ApiService]
})
export class ManPowerComponent implements OnInit, OnChanges {
  @Input()
  projid: any;
  @Input()
  materialId: any;
  List: any = [];
  count = 0;
  records = 10;
  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.projid) {
      this.getDetails();
    } else {
    }
  }
  getDetails() {
    this.count++;
    console.log(this.count);
    this._service.PostService({ 'status': 1, 'projId': this.projid }, '/projschedules/getProjBudgetManPowerDetails')
      .subscribe(data => {
        this.List = data;
      }, error => console.log(error));
  }
  getVal(id, prop, secondprop?) {
    if (secondprop) {
      return this.List.empClassificationMap[id][prop][secondprop]
    }
    return this.List.empClassificationMap[id][prop]
  }
}
