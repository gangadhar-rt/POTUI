import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared';

@Component({
  selector: 'app-submission-approval',
  templateUrl: './submission-approval.component.html',
  styleUrls: ['./submission-approval.component.less'],
  providers: [ApiService]
})
export class SubmissionApprovalComponent implements OnInit {

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
