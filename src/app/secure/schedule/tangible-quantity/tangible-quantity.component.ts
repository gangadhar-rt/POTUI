import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-tangible-quantity',
  templateUrl: './tangible-quantity.component.html',
  styleUrls: ['./tangible-quantity.component.less'],
  providers: [ApiService]
})
export class TangibleQuantityComponent implements OnInit, OnChanges {
  @Input()
  projid: any;
  @Input()
  materialId: any;
  List: any = [];
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
    this._service.PostService({ 'status': 1, 'projId': this.projid }, '/projschedules/getProjBudgetSOWDetails')
      .subscribe(data => {
        this.List = data;
      }, error => console.log(error));
  }
// getVal(id, prop) {
//   return this.List.projectMaterialDtlTOs[id][prop]
//  }
}
