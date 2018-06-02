import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';

@Component({
  selector: 'app-progressplan-actual',
  templateUrl: './progressplan-actual.component.html',
  styleUrls: ['./progressplan-actual.component.less'],
  providers: [ApiService]

})
export class ProgressplanActualComponent implements OnInit {

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