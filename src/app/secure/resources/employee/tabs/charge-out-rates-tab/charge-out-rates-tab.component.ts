import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-charge-out-rates-tab',
  templateUrl: './charge-out-rates-tab.component.html',
  styleUrls: ['./charge-out-rates-tab.component.less'],
  providers: [ApiService]
})
export class ChargeOutRatesTabComponent implements OnInit, OnChanges {

  @Input() ipData: any;
  @Input() empDropDown: any;
  empChargeOutRateTOs: any;
  projCostItemMap: any;
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
    const request = { 'status': 1, 'projId': this.ipData.projId, 'empId': this.ipData.id };
    this._service.PostService(request, '/register/getEmpChargeOutRates')
      .subscribe((data) => {
        this.empChargeOutRateTOs = data.empChargeOutRateTOs;
        this.projCostItemMap = data.projCostItemMap;
        this.projGeneralLabelTO = data.projGeneralLabelTO;
        this.projEmployeeClassMap = data.projEmployeeClassMap;
      },
        (error) => {
          console.log(error);
        });
  }
  empChargeOutRowSelect(s) {

  }
  showChargeOutRates() {

  }
}

