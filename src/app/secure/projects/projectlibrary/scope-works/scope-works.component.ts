import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';


@Component({
  selector: 'app-scope-works',
  templateUrl: './scope-works.component.html',
  styleUrls: ['./scope-works.component.less'],
  providers: [ApiService]

})
export class ScopeWorksComponent implements OnInit {

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
  getProjects() {
    this.showProjs = !this.showProjs;
  }
  getData() {
    const request = { "projId": this.selectedProj, "status": "1" }
    console.log(this.selectedProj);
    this.service.PostService(request, '/projectlib/getSOWItems')
      .subscribe(data => {
        console.log(data);
        this.List = data.projSOWItemTOs;
        setTimeout(() => {
          jQuery('.addicon').click(function (d) {
            d.stopPropagation();
            jQuery(this).parents('header').siblings('ul').toggle();
            jQuery(this).toggleClass('active');

          });
        }, 500);
      },
      error => console.log(error))
  }

}
