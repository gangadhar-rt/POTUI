import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
@Component({
  selector: 'app-tenantlist',
  templateUrl: './tenantlist.component.html',
  styleUrls: ['./tenantlist.component.less'],
  providers: [ApiService]

})
export class TenantlistComponent implements OnInit {

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  togggled: any = false;
  tenantList: any;
  records = 10;
  tenantForm: FormGroup;
  selectedlist: any = [];
  isedit = false;
  disableSave = false;
  request = { 'clientCode': null, 'status': '1' }
  constructor(private fb: FormBuilder, private _service: ApiService, private _route: Router) {

  }
  getTenantList() {
    // var request = { 'cmpCode ': null, 'cmpName ': null, 'status': '1' };
    // this._service.PostService(request, '/user/getUsers')
    // const request = { 'status': '1', 'clientCode': '' };
    this._service.PostService(this.request, '/user/getClients')
      .subscribe(
        data => {
          // this.tenantList = data.users;
          this.tenantList = data.clientRegTOs;
          this.tenantList.forEach(element => {
            element.checked = false;
            element.userTO.password = element.userTO.password || 'No Password';
          });
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }
  viewTenant(tenant) {
    // $('#tanantInfo').modal('show');
    // this._route.navigateByUrl('/secure/tenant/edit', this.tenantDetails)
  }

  ngOnInit() {
    this.tenantForm = this.fb.group({
      'firstName': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'lastName': [null, [FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'dispName': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'userName': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.minLength(3), Validators.maxLength(20)]],
      'password': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.minLength(3), Validators.maxLength(20)]],
      'code': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'name': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'businessType': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'email': [null, [Validators.required, Validators.email]],
      'fax': [null, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'mobile': [null, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'phone': [null, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'remarks': [null, Validators.required],
      'maxRegUsers': [null, [FormsValidationService.numberOnly]],
      'maxActiveUsers': [null, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'maxEPSLevel': [null, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'maxLoginAttempts': [null, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'mailTemplate': [null, Validators.compose([Validators.nullValidator])],
      'country': [null, [Validators.required, Validators.maxLength(20)]],
      'webSiteURL': [null, [Validators.required, FormsValidationService.url]],
      'creditCardDetails': [null, Validators.compose([Validators.nullValidator])],
      'registeredUsers': [null, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(20)]],
      'licence': [null, Validators.required],
      'contactPerson': [null, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'address': [null, Validators.required],
    });
    this.getTenantList();
  }
  createTenant() {
    this.tenantForm.reset();
    $('#tenantmdl').modal('show');
  }
  saveDetails() {
    this.disableSave = true;
    let requestData: any;
    if (!this.isedit) {
      requestData = {
        'clientRegTO':
          {
            'userTO':
              {
                'firstName': this.tenantForm.value.firstName,
                'lastName': this.tenantForm.value.lastName,
                'dispName': this.tenantForm.value.dispName,
                'userName': this.tenantForm.value.userName,
                'password': this.tenantForm.value.password,
                'status': 1
              }, 'code': this.tenantForm.value.code,
            'name': this.tenantForm.value.name,
            'businessType': this.tenantForm.value.businessType,
            'email': this.tenantForm.value.email,
            'fax': this.tenantForm.value.fax,
            'mobile': this.tenantForm.value.mobile,
            'phone': this.tenantForm.value.phone,
            'saveFlag': true,
            'remarks': this.tenantForm.value.remarks,
            'maxRegUsers': this.tenantForm.value.maxRegUsers,
            'maxActiveUsers': this.tenantForm.value.maxActiveUsers,
            'maxEPSLevel': this.tenantForm.value.maxEPSLevel,
            'maxLoginAttempts': this.tenantForm.value.maxLoginAttempts,
            'mailTemplate': this.tenantForm.value.mailTemplate, 'status': 1,
            'country': this.tenantForm.value.country,
            'webSiteURL': this.tenantForm.value.webSiteURL,
            'creditCardDetails': this.tenantForm.value.creditCardDetails,
            'registeredUsers': this.tenantForm.value.registeredUsers,
            'licence': this.tenantForm.value.licence.formatted,
            'contactPerson': this.tenantForm.value.contactPerson,
            'address': this.tenantForm.value.address
          }
      };
    } else {
      requestData = { 'clientRegTO': this.selectedlist[0] };
      requestData.clientRegTO.userTO.firstName = this.tenantForm.value.firstName;
      requestData.clientRegTO.userTO.lastName = this.tenantForm.value.lastName;
      requestData.clientRegTO.userTO.dispName = this.tenantForm.value.dispName;
      requestData.clientRegTO.userTO.userName = this.tenantForm.value.userName;
      requestData.clientRegTO.userTO.password = this.tenantForm.value.password;
      requestData.clientRegTO.code = this.tenantForm.value.code;
      requestData.clientRegTO.name = this.tenantForm.value.name;
      requestData.clientRegTO.businessType = this.tenantForm.value.businessType;
      requestData.clientRegTO.email = this.tenantForm.value.email;
      requestData.clientRegTO.fax = this.tenantForm.value.fax;
      requestData.clientRegTO.mobile = this.tenantForm.value.mobile;
      requestData.clientRegTO.phone = this.tenantForm.value.phone;
      requestData.clientRegTO.remarks = this.tenantForm.value.remarks;
      requestData.clientRegTO.maxRegUsers = this.tenantForm.value.maxRegUsers;
      requestData.clientRegTO.maxActiveUsers = this.tenantForm.value.maxActiveUsers;
      requestData.clientRegTO.maxEPSLevel = this.tenantForm.value.maxEPSLevel;
      requestData.clientRegTO.maxLoginAttempts = this.tenantForm.value.maxLoginAttempts;
      requestData.clientRegTO.mailTemplate = this.tenantForm.value.mailTemplate;
      requestData.clientRegTO.country = this.tenantForm.value.country;
      requestData.clientRegTO.webSiteURL = this.tenantForm.value.webSiteURL;
      requestData.clientRegTO.creditCardDetails = this.tenantForm.value.creditCardDetails;
      requestData.clientRegTO.registeredUsers = this.tenantForm.value.registeredUsers;
      requestData.clientRegTO.licence = this.tenantForm.value.licence;
      requestData.clientRegTO.contactPerson = this.tenantForm.value.contactPerson;
      requestData.clientRegTO.address = this.tenantForm.value.address;
    }

    if (typeof requestData.clientRegTO.licence === 'object') {
      requestData.clientRegTO.licence = requestData.clientRegTO.licence.formatted;
    }
    this._service.PostService(requestData, '/user/saveClient')
      .subscribe(data => {
        this.disableSave = false;
        $('#tenantmdl').modal('hide');
      },
        error => {
          this.disableSave = false;
          console.log(error);
        });
  }

  selectedRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist.push(code);
    } else {
      const index = this.selectedlist.map(function (e) { return e.mesaurement_code; }).indexOf(code.mesaurement_code);
      this.selectedlist.splice(index, 1);
    }
  }
  edit() {
    let d = new Date();
    if (this.selectedlist[0].licence) {
      d = new Date(this.selectedlist[0].licence)
    }
    this.tenantForm = this.fb.group({
      'firstName': [this.selectedlist[0].userTO.firstName, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'lastName': [this.selectedlist[0].userTO.lastName, [FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'dispName': [this.selectedlist[0].userTO.dispName, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'userName': [this.selectedlist[0].userTO.userName, [Validators.required, FormsValidationService.OneAlpha, Validators.minLength(3), Validators.maxLength(20)]],
      'password': [this.selectedlist[0].userTO.password, [Validators.required, FormsValidationService.OneAlpha, Validators.minLength(3), Validators.maxLength(20)]],
      'code': [this.selectedlist[0].code, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'name': [this.selectedlist[0].name, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'businessType': [this.selectedlist[0].businessType, [Validators.required, FormsValidationService.OneAlpha, Validators.maxLength(50)]],
      'email': [this.selectedlist[0].email, [Validators.required, Validators.email]],
      'fax': [this.selectedlist[0].fax, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'mobile': [this.selectedlist[0].mobile, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'phone': [this.selectedlist[0].phone, [Validators.required, FormsValidationService.numberOnly, Validators.minLength(4), Validators.maxLength(14)]],
      'remarks': [this.selectedlist[0].remarks, Validators.required],
      'maxRegUsers': [this.selectedlist[0].maxRegUsers, [FormsValidationService.numberOnly]],
      'maxActiveUsers': [this.selectedlist[0].maxActiveUsers, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'maxEPSLevel': [this.selectedlist[0].maxEPSLevel, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'maxLoginAttempts': [this.selectedlist[0].maxLoginAttempts, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(4)]],
      'mailTemplate': [this.selectedlist[0].mailTemplate, Validators.compose([Validators.nullValidator])],
      'country': [this.selectedlist[0].country, [Validators.required, Validators.maxLength(20)]],
      'webSiteURL': [this.selectedlist[0].webSiteURL, [Validators.required, FormsValidationService.url]],
      'creditCardDetails': [this.selectedlist[0].creditCardDetails, Validators.compose([Validators.nullValidator])],
      'registeredUsers': [this.selectedlist[0].registeredUsers, [Validators.required, FormsValidationService.numberOnly, Validators.maxLength(20)]],
      'licence': [{ date: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }, formatted: this.selectedlist[0].licence }, Validators.required],
      'contactPerson': [this.selectedlist[0].contactPerson, [Validators.required,
      FormsValidationService.OneAlpha, Validators.maxLength(30)]],
      'address': [this.selectedlist[0].address, Validators.required],
    });

    $('#tenantmdl').modal('show');
    this.isedit = true;
  }
  reset() {
    this.request = { 'clientCode': null, 'status': '1' };
    this.getTenantList();
  }
}

