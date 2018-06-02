import { ApiService } from '../../../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocwise-dailydeployment',
  templateUrl: './cocwise-dailydeployment.component.html',
  styleUrls: ['./cocwise-dailydeployment.component.less'],
  providers: [ApiService]
})
export class CocwiseDailydeploymentComponent implements OnInit {

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
