import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-project-budgets',
  templateUrl: './project-budgets.component.html',
  styleUrls: ['./project-budgets.component.less'],
  providers: [ApiService]
})
export class ProjectBudgetsComponent implements OnInit {
  mpstartOpt: INgxMyDpOptions = {
    dateFormat: 'dd-mmm-yyyy',
  };
  mpfinishOpt: INgxMyDpOptions = {
    dateFormat: 'dd-mmm-yyyy',
  };
  plntstartOpt: INgxMyDpOptions = {
    dateFormat: 'dd-mmm-yyyy',
  };
  plntfinishOpt: INgxMyDpOptions = {
    dateFormat: 'dd-mmm-yyyy',
  };
  List: any;
  editDetails: any;
  records = 20;
  selectedlist: any = [{ projId: 0 }];
  selectedMp: any = [{ id: 0 }];
  selectedplnt: any = [{ id: 0 }];
  manPowerList = [];
  plantList = [];
  materialList = [];
  costList = [];
  manPowerexpand: any = false;
  plantExpand: any = false;
  materialExpand: any = false;
  costExpand: any = false;
  manpowerBudgetMap: any = {};
  mpForm: FormGroup;
  mpResources: any = [];
  editmp = false;
  empCategories: any = [];
  manMeasureList: any = [];
  plntForm: FormGroup;
  plntResources: any = [];
  editplnt = false;
  plntMeasureList: any = [];
  constructor(private _service: ApiService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjectList();
    this.mpForm = this.fb.group({
      originalQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      revisedQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      actualQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      remainingQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      empClassTO: ['', Validators.required],
      projEmpCatgTO: ['', Validators.required],
      measureId: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
    this.plntForm = this.fb.group({
      originalQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      revisedQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      actualQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      remainingQty: ['', [Validators.required, FormsValidationService.numberOnly]],
      plantClassTO: ['', Validators.required],
      measureId: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
  }
  getProjectList() {
    const request = { 'status': '1' };
    this._service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(
        data => {
          this.List = data.epsProjs;
          setTimeout(() => {
            jQuery('.addicon').click(function (d) {
              // debugger;
              // d.stopPropagation();
              jQuery(this).parents('header').siblings('ul').toggle();
              jQuery(this).toggleClass('active');

            });
          }, 500);
          console.log(this.List);
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }
  selectedRecords(code) {
    this.selectedlist = [code];
    this.getMaterialqnty();
    this.getManPower();
  }
  selectedRecords1(code, e) {
    e.stopPropagation();
    this.selectedMp = code;
  }
  selectedRecords2(code, e) {
    e.stopPropagation();
    this.selectedplnt = code;
  }
  getManPower() {
    const req = { 'status': '1', 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjManpowers')
      .subscribe(data => {
        this.manPowerList = data.projManpowerTOs;
        this.manPowerList.forEach(e => {
          e.checked = false;
        });
      }, error => console.log(error));
  }
  getPalnt() {
    const req = { 'status': '1', 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjectPlants')
      .subscribe(data => {
        this.plantList = data.projectPlantsDtlTOs;
        this.plantList.forEach(e => {
          e.checked = false;
        });
      }, error => console.log(error));
  }
  getMaterial() {
    const req = { 'status': '1', 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjectMaterials')
      .subscribe(data => {
        this.materialList = data.projectMaterialDtlTOs;
        this.materialList.forEach(e => {
          e.checked = false;
        });
      }, error => console.log(error));
  }
  getCost() {
    const req = { 'status': '1', 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjCostStatements')
      .subscribe(data => {
        this.costList = data.projCostStmtDtlTOs;
        this.costList.forEach(e => {
          e.checked = false;
        });
      }, error => console.log(error));
  }
  getMaterialqnty() {
    const req = { 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getManpowerActualQty')
      .subscribe((data) => {
        this.manpowerBudgetMap = data.projectBudgetMap;
        this.getCateggory();
      }, (error) => alert('error getting material quantity'));

  }
  getCateggory() {
    const req = { 'status': 1 };
    this._service.PostService(req, '/projectlib/getProjEmpTyFpes')
      .subscribe((data) => {
        this.empCategories = data.projEmpCatgTOs;
      }, (error) => console.log(error));
    const req1 = { 'status': 1, 'procureClassId': 1 };
    this._service.PostService(req1, '/centrallib/getMeasuresByProcureType')
      .subscribe((data) => this.manMeasureList = data.measureUnitTOs);
  }
  editMP() {
    this.editmp = true;
    const d = new Date(this.selectedMp.startDate);
    const d1 = new Date(this.selectedMp.finishDate);
    this.mpForm = this.fb.group({
      originalQty: [this.selectedMp.originalQty, [Validators.required, FormsValidationService.numberOnly]],
      revisedQty: [this.selectedMp.revisedQty, [Validators.required, FormsValidationService.numberOnly]],
      actualQty: [this.selectedMp.actualQty || 0, [Validators.required, FormsValidationService.numberOnly]],
      remainingQty: [this.selectedMp.remainingQty, [Validators.required, FormsValidationService.numberOnly]],
      empClassTO: [this.selectedMp.empClassTO.id, Validators.required],
      projEmpCatgTO: [this.selectedMp.projEmpCatgTO.id, Validators.required],
      measureId: [this.selectedMp.measureUnitTO.id, Validators.required],
      startDate: [{ date: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }, formatted: this.selectedMp.startDate }, Validators.required],
      finishDate: [{ date: { year: d1.getFullYear(), month: d1.getMonth() + 1, day: d1.getDate() }, formatted: this.selectedMp.finishDate }, Validators.required]
    });
    this.createMp();
  }
  createMp() {
    this._service.PostService({}, '/centrallib/getEmpClasses')
      .subscribe((data) => {
        this.getCateggory();
        $('#manPowerpop').modal('show');
        this.mpResources = data.empClassTOs;
      }, (error) => alert('error fetching empclass'));
  }
  saveMp() {
    let req: any;
    if (this.editmp) {
      req = this.selectedMp;
      req.originalQty = this.mpForm.value.originalQty;
      req.revisedQty = this.mpForm.value.revisedQty;
      req.actualQty = this.mpForm.value.actualQty;
      req.remainingQty = this.mpForm.value.remainingQty;
      req.empClassTO = this.mpResources.filter((data) => data.id == this.mpForm.value.empClassTO)[0];
      req.projEmpCatgTO = this.empCategories.filter((data) => data.id == this.mpForm.value.projEmpCatgTO)[0];
      req.measureUnitTO = this.manMeasureList.filter((data) => data.id == this.mpForm.value.measureId)[0];
      req.startDate = this.mpForm.value.startDate.formatted;
      req.finishDate = this.mpForm.value.finishDate.formatted;
    } else {
      req = {
        'selected': false, 'projId': this.selectedlist[0].projId, 'originalQty': this.mpForm.value.originalQty,
        'revisedQty': this.mpForm.value.revisedQty, 'actualQty': null,
        'remainingQty': this.mpForm.value.remainingQty,
        'empClassTO': this.mpResources.filter((data) => data.id == this.mpForm.value.empClassTO)[0]
        , 'projEmpCatgTO': this.empCategories.filter((data) => data.id == this.mpForm.value.projEmpCatgTO)[0],
        'measureUnitTO': this.manMeasureList.filter((data) => data.id == this.mpForm.value.measureId)[0], 'estimateComplete': null,
        'estimateCompletion': null, 'startDate': this.mpForm.value.startDate.formatted,
        'finishDate': this.mpForm.value.finishDate.formatted, 'status': 1, 'duplicateFlag': false,
        'measureId': this.mpForm.value.measureId
      };
    }
    this._service.PostService({
      'projManpowerTOs': [req]
      , 'projId': this.selectedlist[0].projId
    }, '/projsettings/saveProjManpowers')
      .subscribe((data) => {
        this.manPowerList = data.projManpowerTOs;
        this.manPowerList.forEach(e => {
          e.checked = false;
        });
        this.mpForm.reset();
        $('#manPowerpop').modal('hide');
        this._service.showSuccessMessage(data.message);
      }, (error) => this._service.showErrorMessage(error.message));
  }
  disableMpDates(val, date) {
    const d: Date = new Date(date.jsdate.getTime());
    d.setDate(d.getDate() - 1);
    if (val === 'finish') {
      this.mpstartOpt.disableSince = date.date;
      const copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.mpstartOpt));
      copy.disableSince = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.mpstartOpt = copy;
    } else {
      const copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.mpfinishOpt));
      copy.disableUntil = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.mpfinishOpt = copy;
    }

  }
  editPlnt() {
    this.editplnt = true;
    const d = new Date(this.selectedplnt.startDate);
    const d1 = new Date(this.selectedplnt.finishDate);
    this.plntForm = this.fb.group({
      originalQty: [this.selectedplnt.originalQty, [Validators.required, FormsValidationService.numberOnly]],
      revisedQty: [this.selectedplnt.revisedQty, [Validators.required, FormsValidationService.numberOnly]],
      actualQty: [this.selectedplnt.actualQty || 0, [Validators.required, FormsValidationService.numberOnly]],
      remainingQty: [this.selectedplnt.remainingQty || '', [Validators.required, FormsValidationService.numberOnly]],
      plantClassTO: [this.selectedplnt.plantClassTO ? this.selectedplnt.plantClassTO.id : '', Validators.required],
      measureId: [this.selectedplnt.measureUnitTO.id || '', Validators.required],
      startDate: [{ date: { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() }, formatted: this.selectedplnt.startDate }, Validators.required],
      finishDate: [{ date: { year: d1.getFullYear(), month: d1.getMonth() + 1, day: d1.getDate() }, formatted: this.selectedplnt.finishDate }, Validators.required]
    });
    this.createPlnt();
  }
  createPlnt() {
    this._service.PostService({}, '/centrallib/getPlantClasses')
      .subscribe((data) => {
        this.getPlantmeasure();
        $('#plantrpop').modal('show');
        this.plntResources = data.plantClassTOs;
      }, (error) => alert('error fetching empclass'));
  }
  getPlantmeasure() {
    const req = { 'status': 1, 'procureClassId': 2 };
    this._service.PostService(req, '/centrallib/getMeasuresByProcureType')
      .subscribe((data) => {
        this.plntMeasureList = data.measureUnitTOs;
      }, (error) => console.log(error));
  }
  saveplnt() {
    let req: any;
    if (this.editplnt) {
      req = this.selectedplnt;
      req.originalQty = this.plntForm.value.originalQty;
      req.revisedQty = this.plntForm.value.revisedQty;
      req.actualQty = this.plntForm.value.actualQty;
      req.remainingQty = this.plntForm.value.remainingQty;
      req.plantClassTO = this.plntResources.filter((data) => data.id == this.plntForm.value.plantClassTO)[0];
      req.measureUnitTO = this.plntMeasureList.filter((data) => data.id == this.plntForm.value.measureId)[0];
      req.startDate = this.plntForm.value.startDate.formatted;
      req.finishDate = this.plntForm.value.finishDate.formatted;
    } else {
      req =
        {
          'selected': false, 'projId': this.selectedlist[0].projId, 'originalQty': this.plntForm.value.originalQty,
          'revisedQty': this.plntForm.value.revisedQty, 'actualQty': null,
          'remainingQty': this.plntForm.value.remainingQty,
          'plantClassTO': this.plntResources.filter((data) => data.id == this.plntForm.value.plantClassTO)[0],
          'measureUnitTO': this.plntMeasureList.filter((data) => data.id == this.plntForm.value.measureId)[0], 'estimateComplete': null,
          'estimateCompletion': null, 'startDate': this.plntForm.value.startDate.formatted,
          'finishDate': this.plntForm.value.finishDate.formatted, 'status': 1, 'duplicateFlag': false,
          'measureId': this.plntForm.value.measureId
        };
    }
    debugger;
    this._service.PostService({
      'projectPlantsDtlTOs': [req]
      , 'projId': this.selectedlist[0].projId
    }, '/projsettings/saveProjectPlants')
      .subscribe((data) => {
        this.plantList = data.projectPlantsDtlTOs;
        this.plantList.forEach(e => {
          e.checked = false;
        });
        this.plntForm.reset();
        this.editplnt = false;
        $('#plantrpop').modal('hide');
        this._service.showSuccessMessage(data.message);
      }, (error) => this._service.showErrorMessage(error.message));
  }
  disablePlntDates(val, date) {
    const d: Date = new Date(date.jsdate.getTime());
    d.setDate(d.getDate() - 1);
    if (val === 'finish') {
      this.plntstartOpt.disableSince = date.date;
      const copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.plntstartOpt));
      copy.disableSince = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.plntstartOpt = copy;
    } else {
      const copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.plntfinishOpt));
      copy.disableUntil = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.plntfinishOpt = copy;
    }
  }

}
