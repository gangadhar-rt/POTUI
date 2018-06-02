import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-emp-service-history-tab',
  templateUrl: './emp-service-history-tab.component.html',
  styleUrls: ['./emp-service-history-tab.component.less'],
  providers: [ApiService]
})
export class EmpServiceHistoryTabComponent implements OnInit, OnChanges {

  @Input() ipData: any;
  @Input() empDropDown: any;
  projClassificationMap: any;
  projEmpRegisterTOs: any;
  empRegisterDtlTO: any;
  empServiceType: any;
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
    this._service.PostService(request, '/register/getEmpServiceHistory')
      .subscribe((data) => {
        this.projClassificationMap = data.projectLibTO.projClassMap;
        this.projEmpRegisterTOs = data.projEmpRegisterTOs;
        this.empRegisterDtlTO = data.empRegisterDtlTO;
        this.empServiceType = data.empServiceType;
      },
        (error) => {
          console.log(error);
        });
  }
  empServiceHistoryRowSelect(s) {

  }
}

