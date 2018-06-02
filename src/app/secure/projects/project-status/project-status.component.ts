import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.less'],
  providers: [ApiService]
})
export class ProjectStatusComponent implements OnInit {
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    // disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() },
  };
  List: any;
  editDetails: any;
  records = 10;
  selectedlist: any = [{ projId: 0 }];
  manDetails: any = [];
  plantDetails: any = [];
  costDetails: any = [];
  dateDetails: any = [];
  statusDateDetails: any = { projId: '', suspendedDate: '', startDate: '', finishDate: '', resumeDate: '' };
  statusListDetails: any;
  sowDetails = [];
  sowexp = false;
  projSummMP = false;
  projSummP = false;
  projSummC = false;
  projSummD = false;
  // projSummMP=false;
  // projSummMP=false;
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
    $('#myTab a[href="#tab1"]').trigger('click');
    this.getSow();
  }
  getManPower() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjManPowerStatus')
      .subscribe(data => {
        this.manDetails = data.projManPowerStatusTOs;
      }, error => console.log(error));
  }
  getPlants() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjectPlantsStatus')
      .subscribe(data => {
        this.plantDetails = data.projectPlantsStatusTOs;
      }, error => console.log(error));
  }
  getCosts() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjectCostStatementsSummary')
      .subscribe(data => {
        this.costDetails = data.projCostStatementsSummaryTOs;
      }, error => console.log(error));
  }
  getDates() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjDates')
      .subscribe(data => {
        this.dateDetails = data.projDatesTOs;
      }, error => console.log(error));
  }
  getStatus() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjectStatus')
      .subscribe(data => {
        this.statusListDetails = data.projManPowerStatusTOs;
      }, error => console.log(error));
  }
  getProjDates() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjStatusDates')
      .subscribe(data => {
        if (data.projStatusDatesTOs.length > 0) {
          this.statusDateDetails = data.projStatusDatesTOs[0];
        }
      }, error => console.log(error));

  }
  getSow() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projectlib/getSOWItems')
      .subscribe(data => {
        this.sowDetails = data.projSOWItemTOs;
        setTimeout(() => {
          jQuery('.addicon').click(function (d) {
            // debugger;
            d.stopPropagation();
            jQuery(this).parents('header').siblings('ul').toggle();
            jQuery(this).toggleClass('active');

          });
        }, 500);
      }, error => console.log(error));

  }
  spentCost(budgetCosts) {
    let cost = 0;
    if (budgetCosts.length > 2) {
      if (budgetCosts[1].cost != undefined && budgetCosts[1].cost != null && budgetCosts[2].cost != undefined && budgetCosts[2].cost != null) {
        cost = parseFloat(budgetCosts[2].cost) / parseFloat(budgetCosts[1].cost);
      }
    } else {
      cost = parseFloat(budgetCosts[1].cost) / parseFloat(budgetCosts[0].cost);
    }
    return cost;
  }
  saveDates() {
    this.statusDateDetails.projId = this.selectedlist.projId;
    const req = {
      'projStatusDatesTOs': [{
        projId: this.selectedlist.projId,
        suspendedDate: this.statusDateDetails.suspendedDate.formatted,
        startDate: this.statusDateDetails.startDate.formatted,
        finishDate: this.statusDateDetails.finishDate.formatted,
        resumeDate: this.statusDateDetails.resumeDate.formatted
      }]
    };
    this._service.PostService(req, '/projsettings/saveProjStatusDates')
      .subscribe((data) => {
        alert(' dates successfully saved');
      }, (error) => alert('error caught'));

  }
}
