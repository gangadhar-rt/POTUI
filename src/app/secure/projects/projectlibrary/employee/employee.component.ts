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
  projEmpCatgList: any = [];
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getPreData();
    this.getprojects();
  }
  getprojects() {
    const request = { 'status': 1 };
    this.service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(data => {
        console.log(data);
        this.ProjectList = data.epsProjs;
      },
        error => console.log(error));
  }
  getProjs() {
    this.showProjs = !this.showProjs;
  }
  getPreData() {
    const request = { 'status': 1 };
    this.service.PostService(request, '/projectlib/projEmpClassifyOnLoad')
      .subscribe((data) => {
        this.projEmpCatgList = data.projEmpCatgTOs;
      });
  }
  getData() {
    const request = { 'projId': this.selectedProj, 'status': '1' };
    console.log(this.selectedProj);
    this.service.PostService(request, '/projectlib/getProjEmpClasses')
      .subscribe(data => {
        console.log(data);
        this.List = data.projEmpClassTOs;
      },
        error => console.log(error));

  }
  save() {
    console.log('saved');
    this.List.map((data) => {
      data.projEmpCatgTO = this.projEmpCatgList.filter((data1) => data1.id == data.projEmpCatgTO.id)[0];
    });
    this.service.PostService({ projEmpClassTOs: this.List, projId: this.selectedProj }, '/projectlib/saveProjEmpClasses')
      .subscribe((data) => {
        this.service.showSuccessMessage(data.message);
        this.List = data.projEmpClassTOs;
      }, (error) => {
        this.service.showErrorMessage(error.message);
      });
  }
}
