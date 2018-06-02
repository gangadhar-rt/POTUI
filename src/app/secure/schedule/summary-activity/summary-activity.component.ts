import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';

@Component({
  selector: 'app-summary-activity',
  templateUrl: './summary-activity.component.html',
  styleUrls: ['./summary-activity.component.less'],
  providers: [ApiService]
})
export class SummaryActivityComponent implements OnInit, OnChanges {
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
    alert('no service found');
  }
}
