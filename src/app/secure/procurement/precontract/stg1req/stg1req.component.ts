
import { Component, OnInit } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-stg1req',
  templateUrl: './stg1req.component.html',
  styleUrls: ['./stg1req.component.less'],
  providers: [ApiService]
})
export class Stg1reqComponent implements OnInit {

  records = 10;
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    // disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  createList;
  selectAll;
  searchRequest: FormGroup;
  isedit = false;
  m_names = new Array("Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec");

  d = new Date();
  curr_date = this.d.getDate();
  curr_month = this.d.getMonth();
  curr_year = this.d.getFullYear();
  prev_month = this.curr_month;
  todaysDate = this.curr_date + "-" + this.m_names[this.curr_month] + "-" + this.curr_year;

  constructor(private fb: FormBuilder, private _service: ApiService) {
    this.searchRequest = this.fb.group({
      'epsName': [null, Validators.required],
      'projectName': [null, Validators.required],
      'approveStatus': [null, Validators.required],
      'fromDate': [null, Validators.required],
      'toDate': [null, Validators.required],
      'loginUser': [true, '']
    });


    this.createList = this.fb.group({
      'eps_name': [null, Validators.required],
      'project_name': [null, Validators.required],
      'projId': [null, ''],
      'empId': [null, ''],// not using
      'preContractTOs': [null, Validators.required],
      'currencyTO': [null, Validators.required],
      'Description': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getWorkFlowStatus();
    this.getLatestPreContracts(true)
  }
  getWorkFlowStatusList;
  getWorkFlowStatus() {
    const request = {};
    this._service.PostService(request, '/procurement/getWorkFlowStatus')
      .subscribe(
        data => {
          this.getWorkFlowStatusList = data.workFlowStatusTOs;
        },
        error => {
          console.log(error);
        },
        () => console.log('call Sussessful')
      );
  }
  preContractReqAppr;
  getPreContractReqApprs(id) {
    const request = {
      "contractId": id,
      "status": 1,
      "userMap":this.preContracts.usersMap
    }
    this._service.PostService(request, '/procurement/getPreContractReqApprs')
      .subscribe(
        data => {
          this.preContractReqAppr = data;
          
          $('#preContractReqAppr-popup').modal('show');
          
        },
        error => {
          console.log(error);
        },
        () => console.log('call Sussessful')
      );
  }


  EPSUserProjects;

  getEPSUserProjects(create?) {
    const request = { 'status': 1 };
    this._service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(
        data => {
          this.EPSUserProjects = data.epsProjs;
          this.EPSUserProjects.forEach(element => {
            element.checked = false;
          });
          if (!create) {
            $('#Enrollment-edit').modal('show');
          } else {
            $('#eps-select').modal('show');
          }
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }
  sliceCount = 2;
  checkAll(selectAll) {
    let epsName = [];
    let proName = [];
    this.selectedProjId = [];
    this.EPSUserProjects.slice(0, this.sliceCount).forEach(element => {
      element.checked = selectAll;
      if (selectAll) {
        this.selectedProjId.push(element.childProjs[0].projId);
        epsName.push(element.childProjs[0].parentName);
        proName.push(element.childProjs[0].projName);

        // this.selectedProjId = this.EPSUserProjects.slice(0, 2);
      } else {
        this.selectedProjId = [];
        epsName = [];
        proName = [];
      }
    });
    this.searchRequest.patchValue({
      epsName: epsName,
      projectName: proName
    });
    console.log(this.selectedProjId);

  }
  selectedProjId = [];
  selectedProjRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedProjId.push(code.childProjs[0].projId);
    } else {
      var index = this.selectedProjId.map(function (e) { return e.mesaurement_code; }).indexOf(code.mesaurement_code);
      this.selectedProjId.splice(index, 1)
    }
    this.selectedProjId.length === this.sliceCount ? this.selectAll = true : this.selectAll = false;
    console.log(this.selectedProjId);
  }

  resetSearch() {
    this.selectedProjId = [];
    this.selectAll = false;
  }

  preContracts;
  selectedlist: any = [];



  getLatestPreContracts(onload?) {
    let request;
    if (onload) {
      // debugger
      if (this.curr_month === 0) { this.prev_month = 12; }

      request = {

        "projIds": null, "approveStatus": 1, "status": 1, "loginUser": true, "fromDate": this.curr_date + "-" + this.m_names[this.prev_month - 1] + "-" + this.curr_year,
        "toDate": this.curr_date + "-" + this.m_names[this.curr_month] + "-" + this.curr_year
      }
    } else {

      request = {
        "status": 1, "projIds": this.selectedProjId,
        "loginUser": this.searchRequest.value.loginUser, "fromDate": this.searchRequest.value.fromDate.formatted,
        "toDate": this.searchRequest.value.toDate.formatted,
        "approveStatus": this.searchRequest.value.approveStatus
      };
    }
    this._service.PostService(request, '/procurement/getInternalPreContracts')
      .subscribe(
        data => {
          this.selectedlist = [];
          this.preContracts = data;
          // this.EPSUserProjects = data.epsProjs;
          // this.EPSUserProjects.forEach(element => {
          //   element.checked = false;
          // });
          // $('#Enrollment-edit').modal('show');

          if (data.preContractTOs.length === 0) { alert("Precontracts are not available for logged in user") }
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }

  selectedRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist.push(code);
    } else {
      var index = this.selectedlist.map(function (e) { return e.mesaurement_code; }).indexOf(code.mesaurement_code);
      this.selectedlist.splice(index, 1)
    }
  }


  PopupOnLoadData(callback) {
    const request = { "status": 1 };
    this._service.PostService(request, '/procurement/getInternalPreContractPopupOnLoad')
      .subscribe(
        data => {
          this.popupMapData = data;
          return callback(false, data)
        },
        error => {
          console.log(error);
          return callback(true, error);
        },
        () => console.log('call Sussessful')
      );
  }
  popupMapData;

  create() {
    const self = this;
    this.PopupOnLoadData(function (err, data) {

      if (err) {
        alert(data);
      } else {
        self.isedit = false;

        self.popupMapData = data;
        self.createList.reset();
        self.createList.controls['eps_name'].enable();
        self.createList.controls['project_name'].enable();
        $('#epsProjects').modal('show');


      }

    });
  }

  preContractID;
  edit() {
    const self = this;
    const selectedlist = this.selectedlist[0];

    this.PopupOnLoadData(function (err, data) {

      if (err) {
        alert(data);
      } else {
        // debugger
        self.isedit = true;

        console.log(self.preContracts.userProjMap[selectedlist.projId].code)
        self.createList.patchValue(
          {
            eps_name: self.preContracts.userProjMap[selectedlist.projId].code,
            project_name: self.preContracts.userProjMap[selectedlist.projId].name,
            projId: selectedlist.projId,
            preContractTOs: selectedlist.preContractTypeTO,
            currencyTO: selectedlist.currencyTO,
            Description: selectedlist.desc,
            empId: selectedlist.preContractTypeTO.id
          }

        );
        self.createList.controls['eps_name'].disable();
        self.createList.controls['project_name'].disable();
        $('#epsProjects').modal('show');
        console.log(self.createList.value);

        // self.popupMapData = data;



      }

    });
  }


  seletedEps(projId, parentName, projName) {
    // debugger;
    this.createList.patchValue(
      {
        eps_name: parentName,
        project_name: projName,
        projId: projId,
        // empId: this.empEnrollments[0].empRegisterDtlTO.empId,
      }

    );
    $('#eps-select').modal('hide');

  }

  saveDetails() {
    console.log(this.createList.value);
    let request;
    if (this.isedit) {


      this.selectedlist[0].projId = this.createList.value.projId;
      this.selectedlist[0].preContractTypeTO = this.createList.value.preContractTOs;
      this.selectedlist[0].desc = this.createList.value.Description;
      this.selectedlist[0].currencyTO = this.createList.value.currencyTO;

      request = {
        'preContractTOs': this.selectedlist,
        "status": 1,
        "procurementFilterReq": { "status": 1, "loginUser": this.searchRequest.value.loginUser }

      }
    } else {
      request = {
        "preContractTOs": [{
          "selected": false,
          "status": 1,
          "projId": this.createList.value.projId,
          "preContractTypeTO": this.createList.value.preContractTOs,
          "desc": this.createList.value.Description,
          "currencyTO": this.createList.value.currencyTO
        }],
        "status": 1,
        "procurementFilterReq": {
          "status": 1,
          "loginUser": true
        }
      }
    }



    console.log(request);

    this._service.PostService(request, '/procurement/savePreContractsList')
      .subscribe(
        data => {
          this.getLatestPreContracts(true);
          $('#epsProjects').modal('hide');
          this.isedit = false;
          this.selectedlist = [];

          this.createList.reset();

        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );


  }
  refDocData;
  PopupRefDocData(contractId, callback) {
    const request = { "contractId": contractId };
    this._service.PostService(request, '/procurement/getPreContratDocs')
      .subscribe(
        data => {
          this.refDocData = data;
          this.refDocData.preContractDocsTOs.map((c, i, a) => this.refDocData.preContractDocsTOs.length - 1 === i ? c.date = this.todaysDate : c)
          return callback(false, data)
        },
        error => {
          console.log(error);
          return callback(true, error);
        },
        () => console.log('call Sussessful')
      );
  }
  selectedRefDoc;
  preContractIdRef;
  projIdRef;
  RefDoc(data) {
    this.selectedRefDoc = data;
    this.preContractIdRef = data.id;
    this.projIdRef = data.projId;


    this.PopupRefDocData(data.id, function (err, data) {

      if (err) {
        alert(data);
      } else {

        $('#refDocc').modal('show');
      }
    });

  }

  addRef() {
    const row =
      {
        "selected": false,
        "status": 1,
        "date": this.todaysDate,
        "name": null,
        "code": "",
        "version": null,
        "uploadViewFile": "",
        "typeofFile": "",
        "sizeofFile": "",
        "preContractId": this.preContractIdRef,
        "projId": this.projIdRef
      }

    $('#refDocc').modal('show');
    // debugger
    // let test = JSON.stringify({ obj: this.refDocData.preContractDocsTOs });
    // this.refDocData.preContractDocsTOs = [];
    // let test2 = JSON.parse(test).obj.push(row);
    // this.refDocData.preContractDocsTOs = test2
    this.refDocData.preContractDocsTOs.push(row);

  }
  saveRefDetails() {
    const request = {
      "preContractDocsTOs": this.refDocData.preContractDocsTOs

    }
    this._service.PostService(request, '/procurement/savePreContratDocs')
      .subscribe(
        data => {
          this.refDocData = [];
          $('#refDocc').modal('hide');

        },
        error => {
          console.log(error);
        },
        () => console.log('call Sussessful')
      );
  }
}
