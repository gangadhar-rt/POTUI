import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
import { Router } from '@angular/router';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
@Component({
  selector: 'app-country-state-provience',
  templateUrl: './country-state-provience.component.html',
  styleUrls: ['./country-state-provience.component.less'],
  providers: [ApiService]
})
export class CountryStateProvienceComponent implements OnInit {
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  togggled: any = false;
  List: any;
  selectedlist = [];
  selectedstatelist = [];
  mStatus = '';
  existingCodes = [];
  isUnique = false;
  Country_creation: FormGroup;
  state_creation: FormGroup;
  Isedit = false;
  records = 10;
  records1 = 10;
  statelist: any = { provisionTOs: [] };
  request = { 'countryCode': null, 'countryName': null, 'status': 1 };


  constructor(private fb: FormBuilder, private _service: ApiService, private router: Router) {
    this.resetForms();
  }
  resetForms() {
    this.Country_creation = this.fb.group({
      'code': [null, Validators.required],
      'name': [null, Validators.required],
      'startdate': [null, Validators.required],
      'enddate': [null, Validators.required]
    });
    this.state_creation = this.fb.group({
      'code': [null, Validators.required],
      'name': [null, Validators.required]
    });
  }
  getCSPcodes() {
    // let request = { 'status': 1 }
    this._service.PostService(this.request, '/common/getSearchCountries')
      .subscribe(
        data => {
          this.List = data.countryTOs;
          this.List.forEach(element => {
            element.checked = false;
          });
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }
  viewRecord(record) {
    this.statelist = record;
  }

  selectedRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist.push(code);
    } else {
      const index = this.selectedlist.map(function (f) { return f.mesaurement_code; }).indexOf(code.mesaurement_code);
      this.selectedlist.splice(index, 1);
    }
  }
  ngOnInit() {
    this.getCSPcodes();
  }
  getCodes() {
    const request = {};
    this._service.PostService(request, '/common/countryCodeMap')
      .subscribe(data => {
        this.existingCodes = data.uniqueCodeMap;
      },
        error => {
          console.log(error);
        },
        () => console.log('success'));
  }

  saveDetails() {
    let request: any = {
      'countryTOs': [
        {
          'code': this.Country_creation.value.code, 'name': this.Country_creation.value.name,
          'status': '1', 'startDate': this.Country_creation.value.startdate.formatted,
          'finishDate': this.Country_creation.value.enddate.formatted, 'selected': false,
          'provisionTO': {
            'id': null, 'code': null, 'name': null, 'timeZoneTO':
              { 'id': null, 'code': null, 'name': null }
          }, 'currencyTO': { 'id': null, 'code': null, 'name': null }, 'duplicateFlag': false
        }]
    };
    if (this.Isedit === true) {
      request = this.selectedlist[0];
      request.code = this.Country_creation.value.code;
      request.name = this.Country_creation.value.name;
      request.startDate = this.Country_creation.value.startdate.formatted;
      request.finishDate = this.Country_creation.value.enddate.formatted;
      request = { 'countryTOs': [request] };
    }
    this._service.PostService(request, '/common/saveCountries')
      .subscribe(
        data => {
          this.Country_creation.reset();
          this.List = data.countryTOs;
          this.selectedlist = [];
          this.Isedit = false;
          $('.modal').modal('hide');
        }
      );
  }
  verifyCode(val) {
    this.isUnique = this.existingCodes[val] ? true : false;
  }
  edit() {
    this.Isedit = true;
    const d = new Date(this.selectedlist[0].startDate);
    const d1 = new Date(this.selectedlist[0].finishDate);
    this.Country_creation = this.fb.group({
      'code': [this.selectedlist[0].code, Validators.required],
      'name': [this.selectedlist[0].name, Validators.required],
      'startdate': [{
        date: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() },
        formatted: this.selectedlist[0].startDate
      }, Validators.required],
      'enddate': [{
        date: { year: d1.getFullYear(), month: d1.getMonth() + 1, day: d1.getDate() },
        formatted: this.selectedlist[0].finishDate
      }, Validators.required]
    });
    $('#countrycreate').modal('show');
  }
  reset() {
    this.request = { 'countryCode': null, 'countryName': null, 'status': 1 };
    this.getCSPcodes();

  }
  CreateState() {
    let req;
    if (this.Isedit) {
      this.selectedstatelist[0].code = this.state_creation.value.code;
      this.selectedstatelist[0].name = this.state_creation.value.name;
      req = {
        'provisionTOs': this.selectedstatelist
      };
    } else {
      req = {
        'provisionTOs': [
          {
            'code': this.state_creation.value.code, 'name': this.state_creation.value.name,
            'countryId': this.statelist.id, 'status': 1, 'timeZoneId': '', 'selected': true
          }
        ]
      };
    }

    this._service.PostService(req, '/common/saveCountryProvisions')
      .subscribe((data) => {
        this.statelist = { provisionTOs: [] };
        this.selectedlist = [];
        this.Isedit = false;
        this.selectedstatelist = [];
        $('#statecreate').modal('hide');
        this.getCSPcodes();
      },
        (error) => alert('failed to create'));
  }
  selectedStateRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedstatelist.push(code);
    } else {
      const index = this.selectedstatelist.map(function (f) { return f.code; }).indexOf(code.code);
      this.selectedstatelist.splice(index, 1);
    }
  }
  editState() {
    this.Isedit = true;
    this.state_creation = this.fb.group({
      'code': [this.selectedstatelist[0].code, Validators.required],
      'name': [this.selectedstatelist[0].name, Validators.required]
    });
    $('#statecreate').modal('show');
  }
}
