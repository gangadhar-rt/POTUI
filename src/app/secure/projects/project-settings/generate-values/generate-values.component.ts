import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService, SettingsService, FormsValidationService } from '../../../../shared';

@Component({
  selector: 'app-generate-values',
  templateUrl: './generate-values.component.html',
  styleUrls: ['./generate-values.component.css'],
  providers: [ApiService]
})
export class GenerateValuesComponent implements OnInit, OnChanges {
  @Input()
  projid: any;
  GeneralValues: any = { calenderTO: {}, countryTO: { provisionTO: { timeZoneTO: {} } }, resourceCurveTO: {}, profitCentreTO: {} };
  calenders = [];
  proviananceList = [];
  getCurrency;
  isReady = false;
  users = [];
  countries = [];
  resourceCurves = [];
  companies = [];
  profitCenters = [];
  constructor(private _service: ApiService) { }
  ngOnChanges() {
    if (this.projid) {
      this.getDetails();
    } else {
      this.GeneralValues = {
        calenderTO: {}, countryTO: { provisionTO: { timeZoneTO: {} } }, companyTO: {},
        resourceCurveTO: {}, profitCentreTO: {}
      };
    }
  }
  ngOnInit() {
    console.log(this.projid);

  }
  getDetails() {
    const req = { 'status': 1, 'projId': this.projid };
    this._service.PostService(req, '/projsettings/projGeneralOnLoad')
      .subscribe(data => {
        this.GeneralValues = data.projGeneralMstrTO;
        this.users = data.users;
        this.countries = data.countryTOs;
        this.resourceCurves = data.projresourceCurveTOs;
        this.companies = data.companyTOs;
        data.profitCentreTOs.forEach(element => {
          this.profitCenters.push(element);
          this.getProfit(element);
        });
        console.log(data);
        this.getCalenders(false);
        this.getCurrencycode();
        this.getProvinance();
        this.isReady = true;
      },
        error => { console.log(error); });
  }
  getCalenders(isproj) {
    let req: any;
    if (isproj) {
      req = { 'status': 1, projId: this.projid };
    } else {
      req = { 'status': 1 };
    }
    this._service.PostService(req, '/calendar/getCalendars')
      .subscribe(data => {
        this.calenders = data.calenderTOs;
        console.log(data);
      },
        error => { console.log(error); });
  }
  getCurrencycode() {
    if (this.countries.length > 0) {
      this.getCurrency = this.countries.filter(co => {
        return co.code === this.GeneralValues.countryTO.code;
      })[0].currencyTO.code;

    }
  }
  getProvinance() {
    if (this.countries.length > 0) {
      this.proviananceList = this.countries.filter(co => {
        return co.code === this.GeneralValues.countryTO.code;
      })[0].provisionTOs;
    } else {
      return [];
    }
  }
  getProfit(element) {
    if (element.childProfitCentreTOs.length > 0) {
      element.childProfitCentreTOs.forEach(element1 => {
        this.profitCenters.push(element1);
        if (element1.childProfitCentreTOs.length > 0) {
          this.getProfit(element1);
        }
      });
    } else {
      this.profitCenters.push(element);
    }
  }
  saveDetails() {
    this.GeneralValues.calenderTO = this.calenders.filter(e => {
      return e.id == this.GeneralValues.calenderTO.id;
    })[0];
    const profitcenter = this.profitCenters.filter(e => {
      return e.id == this.GeneralValues.profitCentreTO.id;
    })[0];
    if (profitcenter) {
      this.GeneralValues.profitCentreTO = profitcenter;
    }
    this.GeneralValues.resourceCurveTO = this.resourceCurves.filter(e => {
      return e.id == this.GeneralValues.resourceCurveTO.id;
    })[0];
    const userkey = this.users.filter(e => {
      return e.id == this.GeneralValues.userId;
    })[0];
    if (userkey) {
      this.GeneralValues.userLabelKeyTO = userkey;
    }
    const company = this.companies.filter(e => {
      return e.id == this.GeneralValues.companyTO.id;
    })[0];
    if (company) {
      this.GeneralValues.companyTO = company;
    }
    this.GeneralValues.countryTO = this.countries.filter(e => {
      return e.code == this.GeneralValues.countryTO.code;
    })[0];
    this.GeneralValues.countryTO.provisionTO = this.proviananceList.filter(e => {
      return e.id == this.GeneralValues.countryTO.provisionTO.id;
    })[0];

    // this.GeneralValues.globalCalenderTO = this.GeneralValues.calenderTO;
    this.GeneralValues.globalCalId = this.GeneralValues.calenderTO.id;
    const request = { projGeneralMstrTO: this.GeneralValues, dupicteFlag: false };
    console.log(request);
    this._service.PostService(request, '/projsettings/saveProjGenerals')
      .subscribe(data => {
        this.GeneralValues = data.projGeneralMstrTO;
        this.users = data.users;
        this.countries = data.countryTOs;
        this.resourceCurves = data.projresourceCurveTOs;
        this.companies = data.companyTOs;
        data.profitCentreTOs.forEach(element => {
          this.profitCenters.push(element);
          this.getProfit(element);
        });
        console.log(data);
        this.getCalenders(false);
        this.getCurrencycode();
        this.getProvinance();
        this.isReady = true;
      }, error => {
        console.log(error);
      });
  }
}
