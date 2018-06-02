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
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    // disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  mpfinishOpt: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    // disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  List: any;
  editDetails: any;
  records = 10;
  selectedlist: any = [{ projId: 0 }];
  selectedMp: any = [{ id: 0 }];
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
  constructor(private _service: ApiService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjectList();
    this.mpForm = this.fb.group({
      originalQty: ['', Validators.required],
      revisedQty: ['', Validators.required],
      actualQty: ['', Validators.required],
      remainingQty: ['', Validators.required],
      empClassTO: ['', Validators.required],
      projEmpCatgTO: ['', Validators.required],
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
      }, (error) => alert('error getting material quantity'));
  }
  getEmpClasses() {

  }
  editMP() {
    this.editmp = true;
  }
  createMp() {
    $('#manPowerpop').modal('show');
    this._service.PostService({}, '/centrallib/getEmpClasses')
      .subscribe((data) => {
        this.mpResources = data.empClassTOs;
      }, (error) => alert('error fetching empclass'));
  }
  saveMp() {
    let req = {
      'projManpowerTOs': [
        {
          'selected': false, 'projId': this.selectedlist[0].projId, 'originalQty': this.mpForm.value.originalQty,
          'revisedQty': this.mpForm.value.revisedQty, 'actualQty': this.mpForm.value.actualQty,
          'remainingQty': this.mpForm.value.remainingQty,
          'empClassTO': this.mpResources.filter((data) => data.id === this.mpForm.value.empClassTO)
          , 'projEmpCatgTO': '', 'measureUnitTO': '', 'estimateComplete': null,
          'estimateCompletion': null, 'startDate': this.mpForm.value.startDate.formatted,
          'finishDate': this.mpForm.value.finishDate.formatted, 'status': 1, 'duplicateFlag': false,
          'measureId': this.mpForm.value.measureId
        }]
      , 'projId': this.selectedlist[0].projId
    };

  }
  disableMpDates(val, date) {
    let d: Date = new Date(date.jsdate.getTime());
    d.setDate(d.getDate() - 1);
    if (val === 'finish') {
      this.mpstartOpt.disableSince = date.date;
      let copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.mpstartOpt));
      copy.disableSince = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.mpstartOpt = copy;
    } else {
      let copy: INgxMyDpOptions = JSON.parse(JSON.stringify(this.mpfinishOpt));
      copy.disableUntil = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate() + 1
      };
      this.mpfinishOpt = copy;
    }

  }
  editP() {

  }
  createp() {

  }
  savep() {

  }
}
