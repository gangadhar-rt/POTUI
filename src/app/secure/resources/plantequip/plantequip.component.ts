import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-plantequip',
  templateUrl: './plantequip.component.html',
  styleUrls: ['./plantequip.component.less'],
  providers: [ApiService]
})
export class PlantequipComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mmm-yyyy',
    openSelectorOnInputClick: true,
    editableDateRangeField: false
  };

  // plant top show
  plantDatamoreFlag = false;
  plantRegisterDtlTOs: any = [];
  plantClassMstrMap: any;
  procureCatgMap: any;
  plantCompanyMap: any;
  assertTypes: any;
  selectedPlant: any = { id: '' };
  plantProjPODtlTOs: any = [];
  procdelshowEditButton = false;
  procdelshowCreateButton = false;
  dephisshowCreateButton = false;
  dephisEditButton = false;
  plantRegProjTOs: any = [];
  projPlantMap: any;
  deMobStatus: any;
  delhisuserProjMap: any;
  coruserProjMap: any;
  projPlantClassMap: any;
  projCostItemMap: any;
  projGeneralLabelKeyTO: any;
  category: any;
  plantProjectDtlTOs: any;
  plantChargeOutRatesTOs: any = [];
  utiluserProjMap: any;
  utillabelKeyTOs: any = [];
  plantLogRecordsTOs: any = [];
  loguserProjMap: any;
  private model: any = {};
  plantWorkingDaysTOs: any = [];
  plantServiceClassMap: any = [];
  plantServiceHistoryTOs: any = [];
  materialMap: any = [];
  serviceClassMap: any = [];
  plantRepairsTOs: any = [];
  depreciationData: any = [];
  depruserProjMap: any = [];
  projGenCurrencyLabelKeyTO: any = [];
  deprprojPlantClassMap: any = [];
  // plant top show end
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
  getPlantRegisters() {
    const req = { 'status': 1, 'projId': this.request.id };
    this._service.PostService(req, '/register/plantRegistersOnLoad')
      .subscribe(data => {
        this.plantRegisterDtlTOs = data.plantRegisterDtlTOs;
        this.plantClassMstrMap = data.registerOnLoadTO.classificationMap;
        this.procureCatgMap = data.registerOnLoadTO.procureCatgMap;
        this.plantCompanyMap = data.registerOnLoadTO.companyMap;
        this.assertTypes = data.assertTypes;
        this.userProjMap = data.userProjMap;
      }, error => console.log(error));
  }
  getLedger() {
    if (this.request.id && this.selectedPlant.id) {
      $('#myTab a[href="#tab1"]').click();
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getRegPlantProcureDeliveryDetails')
        .subscribe(data => {
          // this.plantProjPODtlTO = data.plantProjPODtlTO;
          this.userProjMap = data.projectLibTO.userProjMap;
          if (data.plantProjPODtlTO != null && data.plantProjPODtlTO.id > 0) {
            this.plantProjPODtlTOs = [data.plantProjPODtlTO];
            if (this.plantProjPODtlTOs !== undefined && this.plantProjPODtlTOs != null && this.plantProjPODtlTOs.length > 0 &&
              this.plantProjPODtlTOs[0].poStatus !== 'C') {
              this.procdelshowCreateButton = false;
              this.procdelshowEditButton = true;
            }
          }
        }, error => console.log(error));
    }
  }
  DeliverySupply() {

    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };

      this._service.PostService(req, '/register/getPlantDeploymentOnLoad')
        .subscribe(data => {
          this.delhisuserProjMap = data.projectLibTO.userProjMap;
          this.projPlantMap = data.projectLibTO.projClassMap;
          this.deMobStatus = data.deMobStatus;
          this.plantRegProjTOs = data.plantRegProjTOs;
          if (this.plantRegProjTOs !== undefined && this.plantRegProjTOs != null && this.plantRegProjTOs.length > 0) {
            this.dephisshowCreateButton = false;
            this.dephisEditButton = true;
          }
        }, error => console.log(error));
    }
  }
  Dockets() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getPlantChargeOutRates')
        .subscribe(data => {
          this.projCostItemMap = data.projectLibTO.projCostItemMap;
          this.projGeneralLabelKeyTO = data.projGeneralLabelKeyTO;
          this.category = data.category;
          this.plantProjectDtlTOs = data.plantProjectDtlTOs;
          this.plantChargeOutRatesTOs = data.plantChargeOutRatesTOs;
          this.coruserProjMap = data.projectLibTO.userProjMap;
          this.projPlantClassMap = data.projectLibTO.projClassMap;
        }, error => console.log(error));
    }
  }
  storeMaterials() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getPlantUtilaizationRecords')
        .subscribe(data => {
          this.utillabelKeyTOs = data.labelKeyTOs;
          this.utiluserProjMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  getPlantWork() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getPlantAttendence')
        .subscribe(data => {
          this.plantWorkingDaysTOs = data.labelKeyTOs;
        }, error => console.log(error));
    }
  }
  getLog() {
    if (this.request.id && this.model.formatted && this.selectedPlant.id) {
      const date = this.model.formatted.split(' - ');
      const req = { 'status': 1, 'projId': this.request.id, 'fromDate': date[0], 'toDate': date[1], 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getPlantLogRecords')
        .subscribe(data => {
          this.plantLogRecordsTOs = data.plantLogRecordsTOs;
          this.loguserProjMap = data.userProjMap;
        }, error => console.log(error));
    }
  }
  serviceHistory() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/plantServiceOnLoad')
        .subscribe(data => {
          this.plantServiceClassMap = data.plantServiceClassMap;
          this.plantServiceHistoryTOs = data.plantServiceHistoryTOs;
        }, error => console.log(error));
    }
  }
  recordRepair() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/plantRepairsOnLoad')
        .subscribe(data => {
          this.materialMap = data.materialMap;
          this.serviceClassMap = data.plantServiceClassMap;
          this.plantRepairsTOs = data.plantRepairsTOs;
        }, error => console.log(error));
    }
  }
  Deprication() {
    if (this.request.id && this.selectedPlant.id) {
      const req = { 'status': 1, 'projId': this.request.id, 'plantId': this.selectedPlant.id };
      this._service.PostService(req, '/register/getPlantDeprisiationSalvage')
        .subscribe(data => {
          this.depreciationData = data.plantDepriciationSalvageTOs;
          this.depruserProjMap = data.projectLibTO.userProjMap;
          this.projGenCurrencyLabelKeyTO = data.projGenCurrencyLabelKeyTO;
          this.deprprojPlantClassMap = data.projectLibTO.projClassMap;
        }, error => console.log(error));

    }
  }
}
