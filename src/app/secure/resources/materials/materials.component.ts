import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.less'],
  providers: [ApiService]
})
export class MaterialsComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mmm-yyyy',
    openSelectorOnInputClick: true,
    editableDateRangeField: false
  };
  private model: any = {
  };
  private model1: any = {
  };
  private model2: any = {
  };
  Ledgershow = true;
  delsuppshow = true;
  userType1 = true;
  userType2 = true;
  getpop = false;
  request: any = { project: '', eps: '', id: 0 };
  ledgerDetails = [];
  companyMap = [];
  classificationMap = [];
  userProjectMap = [];
  currencyMap = [];
  userProjMap = [];
  materialProjDtlTOs = [];
  empClassificationMap = [];
  materialProjDocketTOs = [];
  dailyIssueRecords = [];
  dateWiseConsumptionDetails = [];
  storeStockBalanceDetails = [];
  stockPilesDetails = [];
  materialTransferReqApprTOs = [];
  materialDataMap = {};
  materialTransferReqApprTOs1 = [];
  materialDataMap1 = {};
  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId };
  }

  getLedger() {
    if (this.request.id && this.model.formatted) {
      $('#myTab a[href="#tab1"]').click();
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };

      this._service.PostService(req, '/register/getMaterialProjLedgers')
        .subscribe(data => {
          this.ledgerDetails = data.labelKeyTOs;
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
          this.currencyMap = data.projectCurrencyMap;
        }, error => console.log(error));
    }
  }
  DeliverySupply() {

    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };

      this._service.PostService(req, '/register/getMaterialSchItemDeliveryDockets')
        .subscribe(data => {
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjMap = data.userProjMap;
          this.materialProjDtlTOs = data.labelKeyTOs;
        }, error => console.log(error));
    }
  }
  Dockets() {
    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };
      this._service.PostService(req, '/register/getMaterialProjDockets')
        .subscribe(data => {
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
          this.empClassificationMap = data.registerOnLoadTO.empClassificationMap;
          this.materialProjDocketTOs = data.materialProjDocketTOs;
        }, error => console.log(error));
    }
  }
  storeMaterials() {
    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };
      this._service.PostService(req, '/register/getMaterialDailyIssueSchItems')
        .subscribe(data => {
          this.dailyIssueRecords = data.labelKeyTOs;
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  ConsumptionRecords() {
    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };
      this._service.PostService(req, '/register/getMaterialProjConsumption')
        .subscribe(data => {
          this.dateWiseConsumptionDetails = data.labelKeyTOs;
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  StoreItem() {
    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };
      this._service.PostService(req, '/register/getMaterialStoreTransitConsumption')
        .subscribe(data => {
          this.storeStockBalanceDetails = data.labelKeyTOs;
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  MaterialStock() {
    if (this.request.id && this.model.formatted) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': [this.request.id], 'fromDate': date[0], 'toDate': date[1] };
      this._service.PostService(req, '/register/getMaterialStockPiledConsumption')
        .subscribe(data => {
          this.stockPilesDetails = data.labelKeyTOs;
          this.companyMap = data.registerOnLoadTO.companyMap;
          this.classificationMap = data.registerOnLoadTO.classificationMap;
          this.userProjectMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  getTransfer() {
    const date = this.model1.formatted.split(' - ');
    const req = { 'status': 1, 'fromDate': date[0], 'toDate': date[1], 'onload': true, 'transType': true, 'loginUser': this.userType1 };
    this._service.PostService(req, '/register/getMaterialTransfers')
      .subscribe(data => {
        this.materialTransferReqApprTOs = data.materialTransferReqApprTOs;
        this.materialDataMap = {
          'storeYardMap': data.storeYardMap,
          'userProjMap': data.userProjMap
        };
      }, error => console.log(error));
  }
  approvalMaterial() {
    const date = this.model2.formatted.split(' - ');
    const req = { 'status': 1, 'fromDate': date[0], 'toDate': date[1], 'onload': true, 'transType': false, 'loginUser': this.userType2 };
    this._service.PostService(req, '/register/getMaterialTransfers')
      .subscribe(data => {
        this.materialTransferReqApprTOs1 = data.materialTransferReqApprTOs;
        this.materialDataMap1 = {
          'storeYardMap': data.storeYardMap,
          'userProjMap': data.userProjMap
        };
      }, error => console.log(error));

  }
}
