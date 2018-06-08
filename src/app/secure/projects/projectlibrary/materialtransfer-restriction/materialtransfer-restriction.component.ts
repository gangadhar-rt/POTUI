import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';


@Component({
  selector: 'app-materialtransfer-restriction',
  templateUrl: './materialtransfer-restriction.component.html',
  styleUrls: ['./materialtransfer-restriction.component.less'],
  providers: [ApiService]

})
export class MaterialtransferRestrictionComponent implements OnInit {
  ProjectList: any = [];
  showProjs = false;
  selectedProj: any = '';
  List: any = [];
  records = 10;
  selectedMaterial: any = [];
  constructor(private service: ApiService) { }

  ngOnInit() {
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
  getData() {
    const request = { 'projId': this.selectedProj, 'status': '1' };
    console.log(this.selectedProj);
    // debugger;
    this.service.PostService(request, '/projectlib/getProjMaterialClasses')
      .subscribe(data => {
        console.log(data);
        this.List = data.projMaterialClassTOs;
        setTimeout(() => {
          jQuery('.addicon').click(function (d) {
            d.stopPropagation();
            jQuery(this).parents('header').siblings('ul').toggle();
            jQuery(this).toggleClass('active');

          });
        }, 500);
      },
        error => console.log(error));

  }
  save() {
    const request = { 'projMaterialClassTOs': this.selectedMaterial, 'projId': this.selectedProj };
    console.log(this.selectedProj);
    // debugger;
    this.service.PostService(request, '/projectlib/saveProjMaterialClasses')
      .subscribe(data => {
        this.List = data.projMaterialClassTOs;
        this.selectedMaterial = [];
        this.service.showSuccessMessage(data.message);
        setTimeout(() => {
          jQuery('.addicon').click(function (d) {
            d.stopPropagation();
            jQuery(this).parents('header').siblings('ul').toggle();
            jQuery(this).toggleClass('active');

          });
        }, 500);
      },
        error => this.service.showErrorMessage(error.message));
  }
  selectMaterial(material) {
    const index = this.selectedMaterial.map(e => e.id).indexOf(material.id);
    if (index > -1) {
      this.selectedMaterial[index] = material;
    } else {
      this.selectedMaterial.push(material);
    }
  }
}
