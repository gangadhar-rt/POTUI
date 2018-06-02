import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService, SettingsService } from '../../shared';
import Chart from 'chart.js';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less'],
  providers: [ApiService]
})
export class ScheduleComponent implements OnInit {
  @ViewChild('charts') charts: ElementRef;
  request: any = { project: '', eps: '', id: 0 };
  documentrequest: any = { id: 0 };
  getpop = false;
  records = 10;
  documentsList: any = [];
  List: any = [];
  tab = 0;
  projectid = '';
  selectedMaterialid: any = '';
  baseLineList = [];
  selectedBase = '';
  planned = 0;
  day = 0;
  chartData: any = [];
  barchart: any;
  data: any = {
    labels: [],
    datasets: [
      {
        label: 'Curves',
        "data": [],   // Example data
        "backgroundColor": []
      }]
  };
  constructor(private _service: ApiService) { }

  ngOnInit() {

  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId };
    this.getBseLine();
  }
  reset() {
    this.request = { project: '', eps: '' };
    this.List = [];
    this.documentsList = [];
  }
  getList() {
    this.projectid = '';
    this.projectid = this.request.id;
  }
  getBseLine() {
    this._service.PostService({ 'status': 1, 'projId': this.request.id, 'scheduleItemType': 'M' }, '/projschedules/getProjScheduleBaseLines')
      .subscribe(data => {
        this.baseLineList = data.projScheduleBaseLineTOs;
      }, error => console.log(error));
  }

  getChartData(e) {
    console.log(e);
    this.chartData = e;
  }
  getCurve() {
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Curves',
          "data": [],   // Example data
          "backgroundColor": []
        }]
    };
    if (this.day == 0) {
      let strt: any = new Date(this.chartData[0].startDate);
      let end = new Date(this.chartData[0].finishDate);
      this.chartData[0].weeklyData.forEach(element => {
        this.data.labels.push(strt.toLocaleDateString());
        this.data.datasets[0].data.push(element);
        this.data.datasets[0].backgroundColor.push("#1fc8f8");
        strt.setDate(strt.getDate() + 7);
      });
    } else if (this.day == 1) {
      let strt: any = new Date(this.chartData[0].startDate);
      let end = new Date(this.chartData[0].finishDate);
      this.chartData[0].monthlyData.forEach(element => {
        this.data.labels.push(strt.toLocaleDateString());
        this.data.datasets[0].data.push(element);
        this.data.datasets[0].backgroundColor.push("#1fc8f8");
        strt.setDate(strt.getMonth() + 1);
      });
    } else if (this.day == 2) {
      let strt: any = new Date(this.chartData[0].startDate);
      let end = new Date(this.chartData[0].finishDate);
      this.chartData[0].yearlyData.forEach(element => {
        this.data.labels.push(strt.toLocaleDateString());
        this.data.datasets[0].data.push(element);
        this.data.datasets[0].backgroundColor.push("#1fc8f8");
        strt.setDate(strt.getFullYear() + 1);
      });
    }
    const ctx = this.charts.nativeElement.getContext('2d');
    if (this.barchart) {
      this.barchart.destroy();
    }
    this.barchart = new Chart(
      ctx,
      {
        "type": 'bar',
        "data": this.data,
        "options": {
          "cutoutPercentage": 50,
          "animation": {
            "animateScale": true,
            "animateRotate": false
          }
        }
      }
    );
    $("#curveinfo").modal('show');
  }
}
