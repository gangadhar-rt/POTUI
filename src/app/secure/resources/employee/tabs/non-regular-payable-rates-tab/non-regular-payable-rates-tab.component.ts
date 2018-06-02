import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-non-regular-payable-rates-tab',
  templateUrl: './non-regular-payable-rates-tab.component.html',
  styleUrls: ['./non-regular-payable-rates-tab.component.less'],
  providers: [ApiService]
})
export class NonRegularPayableRatesTabComponent implements OnInit, OnChanges {

  @Input() ipData: any;
  @Input() empDropDown: any;
  nonRegularPayCodes: any = [];
  empNonRegularPayTOs: any = [];
  unitPayRates: any = ['Hourly', 'Daily', 'Monthly'];
  payCycles: any = [];
  projGeneralLabelTO: any;
  projEmployeeClassMap: any;
  constructor(private fb: FormBuilder, private _service: ApiService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.ipData);
    if (!this.isEmpty(this.ipData)) {
      this.getList();
    }
  }
  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  getList() {
    this.getPayPeriodCycles();
    const request = { 'status': 1, 'projId': this.ipData.projId, 'empId': this.ipData.id };
    this._service.PostService(request, '/register/getEmpNonRegularPaybleRates')
      .subscribe((data) => {
        this.empNonRegularPayTOs = data.empPaybleRateTOs;
        this.projGeneralLabelTO = data.projGeneralLabelTO;
        this.projEmployeeClassMap = data.projEmployeeClassMap;

      },
        (error) => {
          console.log(error);
        });
  }
  getNonEmpRegularPayDetails(s) {

  }
  changePayCycle() {

  }
  getPayPeriodCycles() {
    const req = { 'status': '1' };
    this._service.PostService(req, '/finance/getPayRollCycle')
      .subscribe((data) => {
        data.periodCycleTOs.forEach((value) => {
          this.payCycles.push(value.value);
        });
      },
        (error) => console.log(error));
  }
}

