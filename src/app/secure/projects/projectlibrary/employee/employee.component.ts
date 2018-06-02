import { ApiService } from './../../../../shared';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
  providers: [ApiService]
})
export class EmployeeComponent implements OnInit {
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
    this.service.PostService(request, '/projectlib/getProjEmpClasses')
      .subscribe(data => {
        console.log(data);
        this.List = data.projEmpClassTOs;
      },
      error => console.log(error))

  }
  save() {
    console.log("saved");
  }
}
