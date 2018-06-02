import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';


@Component({
  selector: 'app-enrollment-tab',
  templateUrl: './enrollment-tab.component.html',
  styleUrls: ['./enrollment-tab.component.less'],
  providers: [ApiService]
})
export class EnrollmentTabComponent implements OnInit, OnChanges {
  @Input() ipData: any;
  @Input() empDropDown: any;
  employeeProjDtlTOs: any;
  empRegisterDtlTO: any;
  empRegisterDropDownTO: any;
  procureCatgMap: any;
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
    this._service.PostService(request, '/register/getEmpEnrollments')
      .subscribe((data) => {
        this.employeeProjDtlTOs = data.empEnrollmentDtlTOs;
        this.empRegisterDtlTO = data.empRegisterDtlTO;
        this.empRegisterDropDownTO = data.empRegisterDropDownTO;
        this.procureCatgMap = data.registerOnLoadTO.procureCatgMap;
      },
        (error) => {
          console.log(error);
        });
  }
  poRowSelect(s) {

  }
}
