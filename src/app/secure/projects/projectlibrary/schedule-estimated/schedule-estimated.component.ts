import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';


@Component({
  selector: 'app-schedule-estimated',
  templateUrl: './schedule-estimated.component.html',
  styleUrls: ['./schedule-estimated.component.less'],
  providers: [ApiService]
})
export class ScheduleEstimatedComponent implements OnInit {
  ProjectList: any = [];
  showProjs = false;
  selectedProj: any = '';
  List: any = [];
  records = 10;
  treeData = {
    "projSOEItemTOs": [
      {
        "select": false,
        "parentId": null,
        "item": false,
        "deleteFlag": true,
        "status": 1,
        "code": "",
        "name": "",
        "childMaterialItemTOs": [],
        "level": 0,
        "leaf": true,
        "expand": true
      }
    ]
  }
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
    this.service.PostService(request, '/projectlib/getSOEItems')
      .subscribe(data => {
        console.log(data);
        this.List = data.projSOEItemTOs;
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
  treeJsonBuilder(level, type, i?, j?, k?, l?, m?) {
    const newJson = {
      "select": false,
      "parentId": null,
      "item": false,
      "deleteFlag": true,
      "status": 1,
      "code": "",
      "name": "",
      "childMaterialItemTOs": [],
      "level": level + 1,
      "leaf": true,
      "expand": true
    }
    if (type === 'delete') {
      // array.splice(index, howmany, item1, ....., itemX)
      if (i === undefined && j === undefined && k === undefined && l === undefined && m === undefined) {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs.splice(0, 1);
      }
      if (j === undefined && k === undefined && l === undefined && m === undefined) {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs.splice(i, 1);
      }
      else if (k === undefined && l === undefined && m === undefined) {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs.splice(j, 1);
      }
      else if (l === undefined && m === undefined) {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs.splice(k, 1);
      }
      else if (m === undefined) {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.splice(l, 1);
      }
      else {
        this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs[l].childMaterialItemTOs.splice(m, 1);
      }

    }
    else {

      if (type === 'addLeaf') {
        newJson.expand = false;
        newJson.leaf = false;
      }

      switch (level) {
        case 0:

          // newJson.code = `level 1-0`
          this.treeData.projSOEItemTOs[0].childMaterialItemTOs.push(newJson);
          break;
        case 1:
          // newJson.code = `level 2-${i}`
          this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs.push(newJson);
          break;
        case 2:
          // newJson.code = `level 3-${j}`
          this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs.push(newJson);
          break;
        case 3:
          // newJson.code = `level 4-${k}`
          this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.push(newJson);
          break;
        case 4:
          // newJson.code = `level 5-${l}`
          // this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.push(newJson);
          this.treeData.projSOEItemTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs[l].childMaterialItemTOs.push(newJson);
          break;

      }
    }

    console.log(this.treeData)
  }
}


