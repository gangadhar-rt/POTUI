import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ApiService, SettingsService, FormsValidationService } from '../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-transfer',
  templateUrl: './employee-transfer.component.html',
  styleUrls: ['./employee-transfer.component.less'],
  providers: [ApiService]
})
export class EmployeeTransferComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mmm-yyyy',
    openSelectorOnInputClick: true,
    editableDateRangeField: false
  };
  records = 10;
  userType = true;
  MaterialList: any = [];
  createform: FormGroup;
  private model: any = {
  };
  constructor(private _service: ApiService, private fb: FormBuilder) { }
  ngOnInit() {
    $(document).on('show.bs.modal', '.modal', function (event) {
      var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
      setTimeout(function () {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
      }, 0);
    });
    this.createform = this.fb.group({
      'code': ['', Validators.required],
      'name': ['', Validators.required]
    });
  }
  getData() {
    let date = this.model.formatted.split(' - ')
    const req = { "status": 1, "fromDate": date[0], "toDate": date[1], "onload": false, "transType": true, "loginUser": this.userType };
    this._service.PostService(req, '/register/getEmpTransfers')
      .subscribe(data => {
        this.MaterialList = data;
      }, error => console.log(error));
  }
  createPop() {
    $('#cccreate').modal('show');
  }
}
