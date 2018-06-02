import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';


@Component({
  selector: 'app-working-shifts',
  templateUrl: './working-shifts.component.html',
  styleUrls: ['./working-shifts.component.less'],
  providers: [ApiService]

})
export class WorkingShiftsComponent implements OnInit {

  ProjectList: any = [];
  showProjs = false;
  selectedProj: any = '';
  List: any = [];
  records = 10;
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getprojects();
  }
  getprojects() {
    const request = { "status": 1 }
    this.service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(data => {
        console.log(data);
        this.ProjectList = data.epsProjs;
      },
      error => console.log(error))
  }
  getProjs() {
    this.showProjs = !this.showProjs;
  }
  getData() {
    const request = { "projId": this.selectedProj, "status": "1" }
    console.log(this.selectedProj);
    this.service.PostService(request, '/projectlib/getProjWorkShifts')
      .subscribe(data => {
        console.log(data);
        this.List = data.projWorkShiftTOs;
      },
      error => console.log(error))

  }
}
