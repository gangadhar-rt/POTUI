import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, FormsValidationService } from '../../../shared/index';
import { DatePipe } from '@angular/common';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { ObjectPipePipe } from '../../../shared/pipes/object-pipe.pipe';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
  providers: [ApiService, DatePipe, ObjectPipePipe]

})
export class EmployeeComponent implements OnInit {
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  filterObj = new ObjectPipePipe();
  request: any = { project: '', eps: '', id: null };
  getpop = false;
  empDetails: any = [];
  editEmpDetails: any = [];
  selectedRow: any;
  empDatamoreFlag: any = 0;
  selectedEMployee: any = {};
  empDropDown: any = {
    'empCompanyMap': {},
    'emppocureMentCatgMap': {},
    'empClassMap': {},
    'userProjMap': {},
    'genderList': [],
    'empLocalityList': [],
    'employeeTypeList': []
  };
  employee_creation: FormGroup;
  designationList: any = [];
  companyList: any = [];
  constructor(private fb: FormBuilder, private _service: ApiService, private _route: Router, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.employeeSearch();
    this.getDesigntions();
    this.getCompanies();
    this.resetForm();
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId };
  }
  employeeSearch() {
    this.selectedRow = null;
    this.editEmpDetails = [];
    let empReq: any = {
      'status': 1
    };
    if (this.request.id) {
      empReq = {
        'status': 1,
        'projId': this.request.id

      };
    }
    this._service.PostService(empReq, '/register/empRegisterOnLoad')
      .subscribe((data) => {
        this.empDetails = data.empRegisterDtlTOs;
        this.empDropDown.userProjMap = data.userProjMap;
        this.empDropDown.empCompanyMap = data.registerOnLoadTO.companyMap;
        this.empDropDown.emppocureMentCatgMap = data.registerOnLoadTO.procureCatgMap;
        this.empDropDown.empClassMap = data.registerOnLoadTO.classificationMap;
        this.empDropDown.empProjClassMap = data.empProjClassMap;
        this.empDropDown.genderList = data.empRegisterDropDownTO.gender;
        this.empDropDown.empLocalityList = data.empRegisterDropDownTO.locality;
        this.empDropDown.employeeTypeList = data.empRegisterDropDownTO.employeeType;
        debugger;
      },
      (error) => console.log(error),
      () => console.log('call success'));
  }

  getCompanies() {
    const req = { 'status': 1 };
    this._service.PostService(req, '/centrallib/getCompanies')
      .subscribe((data) => {
        this.companyList = data.companyTOs;
      }, (error) => {
        alert('Error on fetching company details');
      });
  }

  getDesigntions() {
    const req = { 'status': 1 };
    this._service.PostService(req, '/centrallib/getEmpClasses')
      .subscribe((data) => {
        this.designationList = data.empClassTOs;
      }, (error) => {
        alert('Error on fetching employee designations');
      });
  }
  resetForm() {
    this.employee_creation = this.fb.group({
      'code': [null, [Validators.required, FormsValidationService.OneAlpha]],
      'firstName': [null, [Validators.required, FormsValidationService.OneAlpha]],
      'lastName': [null, [Validators.required, FormsValidationService.OneAlpha]],
      'gender': [null, Validators.required],
      'dob': [null, Validators.required],
      'empStatus': [null, Validators.required],
      'cmpId': [null, Validators.required],
      'empClassId': [null, Validators.required],
      'location': [null, Validators.required],
      'procureLabelKeyTO': [null, Validators.required],
      'duplicateFlag': [false, Validators.nullValidator]
    });
  }
  SaveEmployee() {
    const req = {
      'empRegisterTOs': [this.employee_creation.value],
      'status': 1
    };
    let filterdProcure = this.filterObj.transform(this.empDropDown.emppocureMentCatgMap, undefined);
    debugger;
    this.employee_creation.value.procureLabelKeyTO = filterdProcure.filter((data) => {
      return data.id == this.employee_creation.value.procureLabelKeyTO;
    })[0];
    this.employee_creation.value.dob = this.employee_creation.value.dob.formatted;
    this._service.PostService(req, '/register/saveEmpregisters')
      .subscribe((data) => {
        this.request.id = null;
        this.employeeSearch();
        this.resetForm();
        $('#empcreate').modal('hide');
      }, (error) => {
        alert('Error on Creating employee');
      });
  }

  verifyCode() {
    return false;
  }
}

