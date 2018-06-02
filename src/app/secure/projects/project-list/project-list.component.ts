import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less'],
  providers: [ApiService]

})
export class ProjectListComponent implements OnInit {
  List: any;
  editDetails: any;
  records = 10;
  userDetails: any;
  selectedlist: any = [];
  treeData = {
    'projs': [
      {
        'clientId': null,
        'clientCode': null,
        'status': 1,
        'projId': null,
        'projCode': '',
        'projName': '',
        'projType': null,
        'expand': true,
        'proj': false,
        'parentId': null,
        'parentName': null,
        'startDate': null,
        'finishDate': null,
        'usrProj': false,
        'assignedStatus': null,
        'settingStatus': null,
        'level': 0,
        'leaf': false,
        'childProjs': []
      }
    ]
  };

  constructor(private _service: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getProjectList();
    // this.getUserDetails();
  }
  getUserDetails() {
    // this is used to get user datails
    this._service.GetService('/account', '')
      .subscribe(data => {
        this.userDetails = data;
      },
        error => {
          console.log(error);
        });
  }
  getProjectList() {
    const request = { 'status': '1' };
    this._service.PostService(request, '/projectlib/projEPSOnLoad')
      .subscribe(
        data => {
          this.List = data.ePSProjectTOs;
          setTimeout(() => {
            jQuery('.addicon').click(function (d) {
              // debugger;
              d.stopPropagation();
              jQuery(this).parents('header').siblings('ul').toggle();
              jQuery(this).toggleClass('active');

            });
          }, 500);
          console.log(this.List);
        },
        error => console.log(error),
        () => console.log('call Sussessful')
      );
  }

  selectedRecords(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist.push(code);
    } else {
      const index = this.selectedlist.map(function (e) { return e.mesaurement_code; }).indexOf(code.mesaurement_code);
      this.selectedlist.splice(index, 1);
    }
  }
  editRecord(record) {
    this.editDetails = record;
    this.treeData.projs[0] = record;
    $('#projectCreate').modal('show');
  }

  treeJsonBuilder(level, type, i?, j?, k?, l?, m?) {
    const newJson = {
      'select': false,
      'clientId': null,
      'clientCode': null,
      'status': 1,
      'projId': null,
      'projCode': '',
      'projName': '',
      'projType': null,
      'expand': true,
      'proj': false,
      'parentId': null,
      'parentName': null,
      'startDate': null,
      'finishDate': null,
      'usrProj': false,
      'assignedStatus': null,
      'settingStatus': null,
      'leaf': true,
      'deleteFlag': true,
      'childProjs': [],
      'level': level + 1
    };
    if (type === 'delete') {
      if (i === undefined && j === undefined && k === undefined && l === undefined && m === undefined) {
        this.treeData.projs[0].childProjs.splice(0, 1);
      }
      if (j === undefined && k === undefined && l === undefined && m === undefined) {
        this.treeData.projs[0].childProjs.splice(i, 1);
      } else if (k === undefined && l === undefined && m === undefined) {
        this.treeData.projs[0].childProjs[i].childProjs.splice(j, 1);
      } else if (l === undefined && m === undefined) {
        this.treeData.projs[0].childProjs[i].childProjs[j].childProjs.splice(k, 1);
      } else if (m === undefined) {
        this.treeData.projs[0].childProjs[i].childProjs[j].childProjs[k].childProjs.splice(l, 1);
      } else {
        this.treeData.projs[0].childProjs[i].childProjs[j].childProjs[k].childProjs[l].childProjs.splice(m, 1);
      }
    } else {
      if (type === 'addLeaf') {
        newJson.expand = false;
        newJson.proj = true;
      }
      switch (level) {
        case 0:
          this.treeData.projs[0].childProjs.push(newJson);
          break;
        case 1:
          this.treeData.projs[0].childProjs[i].childProjs.push(newJson);
          break;
        case 2:
          this.treeData.projs[0].childProjs[i].childProjs[j].childProjs.push(newJson);
          break;
        case 3:
          this.treeData.projs[0].childProjs[i].childProjs[j].childProjs[k].childProjs.push(newJson);
          break;
        case 4:
          this.treeData.projs[0].childProjs[i].childProjs[j].childProjs[k].childProjs[l].childProjs.push(newJson);
          break;
      }
    }
  }
  SaveData() {
    this._service.PostService(this.treeData, '/projectlib/saveProject')
      .subscribe(data => {
        console.log(data);
        this.List = data.epsProjs;
        this.List.forEach(element => {
          element.checked = false;
        });
        setTimeout(() => {
          jQuery('.addicon').click(function (d) {
            d.stopPropagation();
            jQuery(this).parents('header').siblings('ul').toggle();
            jQuery(this).toggleClass('active');

          });
        }, 500);
        this.treeData = {
          'projs': [
            {
              'clientId': null,
              'clientCode': null,
              'status': 1,
              'projId': null,
              'projCode': '',
              'projName': '',
              'projType': null,
              'expand': true,
              'proj': false,
              'parentId': null,
              'parentName': null,
              'startDate': null,
              'finishDate': null,
              'usrProj': false,
              'assignedStatus': null,
              'settingStatus': null,
              'level': 0,
              'leaf': false,
              'childProjs': []
            }
          ]
        };
        $('#projectCreate').modal('hide');
      },
        error => {
          console.log(error);

        },
        () => {
          console.log('call successfull');
        });
  }
  deactive() {
    const req = {
      'projectIds': this.selectedlist.map((data) => data.projId),
      'status': 2
    };
    console.log(req);
    this._service.PostService(req, '/projectlib/deactivateEPSProject')
      .subscribe((data => {
        this.selectedlist = [];
        this.getProjectList();
      }),
        (error) => alert('error in deactivating '));
  }
}
