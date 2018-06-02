import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/index';

@Component({
  selector: 'app-monthly-plantrec',
  templateUrl: './monthly-plantrec.component.html',
  styleUrls: ['./monthly-plantrec.component.less'],
  providers: [ApiService]
})
export class MonthlyPlantrecComponent implements OnInit {
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
