import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';


@Component({
  selector: 'app-periodicalprogress',
  templateUrl: './periodicalprogress.component.html',
  styleUrls: ['./periodicalprogress.component.less'],
  providers: [ApiService]

})
export class PeriodicalprogressComponent implements OnInit {

  getpop = false;
  request: any = { project: '', eps: '', id: 0 };

  constructor(private _service: ApiService) { }

  ngOnInit() {
  }
  updateValues(e) {
    this.getpop = false;
    this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
  }
}