import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-const-budget',
  templateUrl: './const-budget.component.html',
  styleUrls: ['./const-budget.component.less'],
  providers: [ApiService]
})
export class ConstBudgetComponent implements OnInit, OnChanges {
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
    this._service.PostService({ 'status': 1, 'projId': this.projid }, '/projschedules/getProjBudgetCostCodeDetails')
      .subscribe(data => {
        this.List = data;
      }, error => console.log(error));
  }
  getVal(id, prop) {
    return this.List.projCostItemMap[id][prop]
  }
}
