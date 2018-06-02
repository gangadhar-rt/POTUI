import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.less'],
  providers: [ApiService]
})
export class ProjectSettingsComponent implements OnInit {
  List: any;
  editDetails: any;
  records = 10;
  userDetails: any;
  selectedlist: any = [];
  attendanceData: any = {};
  plantData: any = {};
  workDairy: any = [];
  timeSheets: any = {};
  weeks: any = [];
  procureData: any = [];
  empData: any = [];
  planttrData: any = [];
  materialtrData: any = [];
  estimateData: any = [];
  perfomThre: any = [];
  progessNormal: any = [];
  payrollData: any = [];
  reportData: any = { monthly: [], weeakDays: [], years: [] };
  progessCycle: any = { monthly: [], weeakDays: [], years: [] };
  saveprogessCycle: any = [{ startDay: '', finishDay: '' }, { startDay: '', finishDay: '' }, { startDay: '', finishDay: '' }]

  constructor(private _service: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProjectList();
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
            d.stopPropagation();
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
    this.selectedlist = [];
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist.push(code);

    } else {

    }
  }
  getEmpAttendance() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId, 'type': 'EMP' };
      this._service.PostService(req, '/projsettings/getProjAttendence')
        .subscribe(
        data => {
          this.attendanceData = data.projAttendenceTOs[0];
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveEmpAttendance() {
    if (this.selectedlist[0]) {
      const req = { projAttendenceTOs: [this.attendanceData], 'type': 'EMP' };
      this._service.PostService(req, '/projsettings/saveProjAttendence')
        .subscribe(
        data => {
          this.getEmpAttendance();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getPlantAttendence() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId, 'type': 'PLANT' };
      this._service.PostService(req, '/projsettings/getProjAttendence')
        .subscribe(
        data => {
          this.plantData = data.projAttendenceTOs[0];
        }, error => {
          console.log(error);
        }
        );
    }
  }
  savePlantAttendence() {
    if (this.selectedlist[0]) {
      const req = { projAttendenceTOs: [this.plantData], 'type': 'PLANT' };
      this._service.PostService(req, '/projsettings/saveProjAttendence')
        .subscribe(
        data => {
          this.plantData = data.projAttendenceTOs[0];
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getWorkDairy() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjWorkDairy')
        .subscribe(
        data => {
          this.workDairy = data.projWorkDairyMstrTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveWorkDairy() {
    if (this.selectedlist[0]) {
      const req = { projWorkDairyMstrTOs: this.workDairy };
      this._service.PostService(req, '/projsettings/saveWorkDairy')
        .subscribe(
        data => {
          this.workDairy = data.projWorkDairyMstrTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  geTimeSheet() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/ProjTimeSheetOnLoad')
        .subscribe(
        data => {
          this.timeSheets = data.projTimeSheetResp;
          this.weeks = data.weekDays;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveTimeSheet() {
    if (this.selectedlist[0]) {
      const req = this.timeSheets;
      req.projTimeSheetWeekDtlTO.projId = this.selectedlist[0].projId;
      req.projTimeSheetWeekDtlTO.id = this.selectedlist[0].projId;

      this._service.PostService(req, '/projsettings/saveProjTimeSheet')
        .subscribe(
        data => {
          this.geTimeSheet();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getProjProcure() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjProcure')
        .subscribe(
        data => {
          this.procureData = data.projProcurementTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveProjProcure() {
    if (this.selectedlist[0]) {
      const req = { projProcurementTOs: this.procureData };
      this._service.PostService(req, '/projsettings/saveProjProcure')
        .subscribe(
        data => {
          this.getProjProcure();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getEmpTrans() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getEmpTrans')
        .subscribe(
        data => {
          this.empData = data.projEmpTransTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveEmpTrans() {
    if (this.selectedlist[0]) {
      const req = { projEmpTransTOs: this.empData };
      this._service.PostService(req, '/projsettings/saveEmpTrans')
        .subscribe(
        data => {
          this.getEmpTrans();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getPlantTrans() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjPlantTrans')
        .subscribe(
        data => {
          this.planttrData = data.projPlantTransTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  savePlantTrans() {
    if (this.selectedlist[0]) {
      const req = { projPlantTransTOs: this.planttrData };
      this._service.PostService(req, '/projsettings/saveProjPlantTrans')
        .subscribe(
        data => {
          this.getPlantTrans();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getMaterialTrans() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjMaterialTrans')
        .subscribe(
        data => {
          this.materialtrData = data.projMaterialTransTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveMaterialTrans() {
    if (this.selectedlist[0]) {
      const req = { projMaterialTransTOs: this.materialtrData };
      this._service.PostService(req, '/projsettings/saveProjMaterialTrans')
        .subscribe(
        data => {
          this.getMaterialTrans();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getEstimate() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjEstimate')
        .subscribe(
        data => {
          this.estimateData = this.removeDuplicates(data.projEstimateTOs, 'estimateType');
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveEstimate() {
    if (this.selectedlist[0]) {
      this.estimateData.forEach(element => {
        element.otherHrs === false ? element.otherHrs = 0 : (element.otherHrs === true ? element.otherHrs = 1 : element.otherHrs = 2);
        element.materialHrs === false ? element.materialHrs = 0 : (element.materialHrs === true ? element.materialHrs = 1 : element.materialHrs = 2);
        element.plantHrs === false ? element.plantHrs = 0 : (element.plantHrs === true ? element.plantHrs = 1 : element.plantHrs = 2);
        element.manHrs === false ? element.manHrs = 0 : (element.manHrs === true ? element.manHrs = 1 : element.manHrs = 2);
        element.estimateCost === false ? element.estimateCost = 0 : (element.estimateCost === true ? element.estimateCost = 1 : element.otherHrs = 2);
      });
      const req = { projEstimateTOs: this.estimateData };
      this._service.PostService(req, '/projsettings/saveProjEstimate')
        .subscribe(
        data => {
          this.getEstimate();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getPerfomThre() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjPerformenceThreshold')
        .subscribe(
        data => {
          this.perfomThre = data.projPerformenceThresholdTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  savePerfomThre(t) {
    if (this.selectedlist[0]) {
      let req = {};
      if (t === 0) {
        req = { 'status': 1, 'projId': this.selectedlist[0].projId, 'projPerformenceThresholdTOs': this.perfomThre };
      } else {
        req = { 'projId': this.selectedlist[0].projId };
      }
      this._service.PostService(req, '/projsettings/SaveProjPerformenceThreshold')
        .subscribe(
        data => {
          this.getPerfomThre();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getReport() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/projReportsOnLoad')
        .subscribe(
        data => {
          this.reportData = data;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getProgressClaims() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/getProjProgressClaim')
        .subscribe(
        data => {
          this.progessNormal = data.projProgressClaimTOs;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveProgressClaims() {
    if (this.selectedlist[0]) {
      const req = { projProgressClaimTOs: this.progessNormal };
      this._service.PostService(req, '/projsettings/saveProjProgressClaim')
        .subscribe(
        data => {
          this.getProgressClaims();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getProgressCycle() {
    if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/ProjProgressClaimePeriodCycleOnload')
        .subscribe(
        data => {
          this.progessCycle = data;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  saveProgressCycle() {
    if (this.selectedlist[0]) {
      const req = { projProgressClaimePeriodTOs: this.saveprogessCycle };
      this._service.PostService(req, '/projsettings/saveProjProgressClaimePeriodCycle')
        .subscribe(
        data => {
          this.getProgressCycle();
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getPayroll() {
 if (this.selectedlist[0]) {
      const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
      this._service.PostService(req, '/projsettings/projPayRollCycleOnLoad')
        .subscribe(
        data => {
          this.payrollData = data;
        }, error => {
          console.log(error);
        }
        );
    }
  }
  getLeave() {

  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
