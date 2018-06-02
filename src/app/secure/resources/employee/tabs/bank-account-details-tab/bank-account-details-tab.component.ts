import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-bank-account-details-tab',
  templateUrl: './bank-account-details-tab.component.html',
  styleUrls: ['./bank-account-details-tab.component.less'],
  providers: [ApiService]
})
export class BankAccountDetailsTabComponent implements OnInit, OnChanges {

  @Input() ipData: any;
  @Input() empDropDown: any;
  empBankAccountDtlTOs: any = [];
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
    this._service.PostService(request, '/register/getEmpBankAccountDetails')
      .subscribe((data) => {
        this.empBankAccountDtlTOs = data.empBankAccountDtlTOs;
      },
        (error) => {
          console.log(error);
        });
  }


}

