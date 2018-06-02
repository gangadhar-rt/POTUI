import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-plant-equipment',
  templateUrl: './plant-equipment.component.html',
  styleUrls: ['./plant-equipment.component.less'],
  providers: [ApiService]
})
export class PlantEquipmentComponent implements OnInit, OnChanges {
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
    this._service.PostService({ 'status': 1, 'projId': this.projid }, '/projschedules/getProjBudgetPlantDetails')
      .subscribe(data => {
        this.List = data;
      }, error => console.log(error));
  }
  getVal(id, prop) {
    return this.List.plantClassificationMap[id][prop]
  }
}
