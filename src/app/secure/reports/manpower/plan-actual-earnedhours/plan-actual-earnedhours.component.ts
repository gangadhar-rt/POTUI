import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared';


@Component({
  selector: 'app-plan-actual-earnedhours',
  templateUrl: './plan-actual-earnedhours.component.html',
  styleUrls: ['./plan-actual-earnedhours.component.less'],
  providers: [ApiService]

})
export class PlanActualEarnedhoursComponent implements OnInit {

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
