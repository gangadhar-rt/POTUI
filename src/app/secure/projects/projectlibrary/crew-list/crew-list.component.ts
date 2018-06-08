import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.less'],
  providers: [ApiService]

})
export class CrewListComponent implements OnInit {

  ProjectList: any = [];
  showProjs = false;
  selectedProj: any = '';
  List: any = [];
  records = 10;
  shiftType: any = [];
  selectedRecord: any = {};
  CrewForm: FormGroup;
  deleteList: any = [];
  isedit = false;
  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getPreData();
    this.getprojects();
    this.CrewForm = this.fb.group({
      'code': ['', Validators.required],
      'desc': ['', Validators.required],
      'projWorkShiftTO': ['', Validators.required],
    });
  }
  getPreData() {
    this.service.PostService({ status: 1, projId: this.selectedProj }, '/projectlib/projCrewListifOnLoad')
      .subscribe((data) => this.shiftType = data.projWorkShiftResp.projWorkShiftTOs,
        (error) => console.log(error));
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
  selectRecord(id) {
    const index = this.deleteList.indexOf(id);
    if (index > -1) {
      this.deleteList.splice(index, 1);
    } else {
      this.deleteList.push(id);
    }
  }
  getData() {
    const request = { 'projId': this.selectedProj, 'status': '1' }
    console.log(this.selectedProj);
    this.service.PostService(request, '/projectlib/getProjCrewLists')
      .subscribe(data => {
        console.log(data);
        this.List = data.projCrewTOs;
      },
        error => console.log(error));

  }
  create() {
    let req: any;
    if (this.isedit) {
      req = this.selectedRecord;
      req.code = this.CrewForm.value.code;
      req.desc = this.CrewForm.value.desc;
      req.projWorkShiftTO = this.shiftType.filter((data) => data.id == this.CrewForm.value.projWorkShiftTO)[0];
    } else {
      req = {
        'clientId': null,
        'clientCode': null,
        'status': 1,
        'id': null,
        'code': this.CrewForm.value.code,
        'desc': this.CrewForm.value.desc,
        'projId': this.selectedProj,
        'projWorkShiftTO': this.shiftType.filter((data) => data.id == this.CrewForm.value.projWorkShiftTO)[0],
        'duplicateFlag': false,
        'projCrewTOs': [],
      };
    }
    this.service.PostService({ projStoreStockTOs: [req], projId: this.selectedProj }, '/projectlib/saveProjCrewLists')
      .subscribe((data) => {
        this.List = data.projStoreStockTOs;
        this.service.showSuccessMessage(data.message);
        this.CrewForm.reset();
        $('#crewpop').modal('hide');
      }, (error) => this.service.showErrorMessage(error.message));
  }
  edit() {
    this.isedit = true;
    this.CrewForm = this.fb.group({
      'code': [this.selectedRecord.code, Validators.required],
      'desc': [this.selectedRecord.desc, Validators.required],
      'projWorkShiftTO': [this.selectedRecord.projWorkShiftTO.id, Validators.required],
    });
    $('#crewpop').modal('show');
  }

  deactive() {
    const req = { 'projCrewIds': this.deleteList, 'status': 2 };
    this.service.PostService(req, '/projectlib/deleteProjCrewLists')
      .subscribe((data) => {
        this.service.showSuccessMessage(data.message);
        this.getData();
      }, (error) => this.service.showErrorMessage(error.message));
  }
}
