import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';


@Component({
  selector: 'app-plant-classification',
  templateUrl: './plant-classification.component.html',
  styleUrls: ['./plant-classification.component.less'],
  providers: [ApiService]

})
export class PlantClassificationComponent implements OnInit {

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
    this.service.PostService(request, '/projectlib/getProjPlantClasses')
      .subscribe(data => {
        console.log(data);
        this.List = data.projPlantClassTOs;
      },
      error => console.log(error))

  }
  save(){
    console.log("saved");
  }
}
