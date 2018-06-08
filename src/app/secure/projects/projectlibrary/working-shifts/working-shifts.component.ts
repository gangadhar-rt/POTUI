import { Component, OnInit } from '@angular/core';
import { ApiService, FormsValidationService } from './../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  workshift: FormGroup;
  editShift = false;
  deleteList: any = [];
  selectedRecord: any = {};
  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getprojects();
    this.workshift = this.fb.group({
      'code': ['', Validators.required],
      'startTime': [null, Validators.nullValidator],
      'finishTime': [null, Validators.nullValidator],
      'startHours': ['', [Validators.required, FormsValidationService.numberOnly, FormsValidationService.Hours]],
      'startMinutes': [0, [Validators.required, FormsValidationService.numberOnly, FormsValidationService.Minutes]],
      'finishHours': ['', [Validators.required, FormsValidationService.numberOnly, FormsValidationService.Hours]],
      'finishMinutes': [0, [Validators.required, FormsValidationService.numberOnly, FormsValidationService.Minutes]],
    });
  }
  getprojects() {
    const request = { 'status': 1 };
    this.service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(data => {
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
    this.service.PostService(request, '/projectlib/getProjWorkShifts')
      .subscribe(data => {
        console.log(data);
        this.List = data.projWorkShiftTOs;
      },
        error => console.log(error));
  }
  saveWorkShift() {
    let req;
    debugger;
    if (this.editShift) {
      req = this.selectedRecord;
      req.code = this.workshift.value.code;
      req.startHours = this.workshift.value.startHours;
      req.startMinutes = this.workshift.value.startMinutes;
      req.finishHours = this.workshift.value.finishHours;
      req.finishMinutes = this.workshift.value.finishMinutes;
    } else {
      req = {
        'clientId': null,
        'clientCode': null,
        'status': 1,
        'id': null,
        'code': this.workshift.value.code,
        'startTime': null,
        'finishTime': null,
        'startHours': this.workshift.value.startHours,
        'startMinutes': this.workshift.value.startMinutes,
        'finishHours': this.workshift.value.finishHours,
        'finishMinutes': this.workshift.value.finishMinutes,
        'projectId': this.selectedProj,
        'duplicateFlag': false
      };
    }
    this.service.PostService({ projWorkShiftTOs: [req], projId: this.selectedProj }, '/projectlib/saveProjWorkShifts')
      .subscribe((data) => {
        $('#workshift').modal('hide');
        this.service.showSuccessMessage(data.message);
        this.List = data.projWorkShiftTOs;
        this.editShift = false;
      }, (error) => this.service.showErrorMessage(error.message));
  }
  editShiftS() {
    this.workshift = this.fb.group({
      'code': [this.selectedRecord.code, Validators.required],
      'startTime': [this.selectedRecord.startTime, Validators.nullValidator],
      'finishTime': [this.selectedRecord.finishTime, Validators.nullValidator],
      'startHours': [this.selectedRecord.startHours, [Validators.required,
      FormsValidationService.numberOnly, FormsValidationService.Hours]],
      'startMinutes': [this.selectedRecord.startMinutes, [Validators.required,
      FormsValidationService.numberOnly, FormsValidationService.Minutes]],
      'finishHours': [this.selectedRecord.finishHours, [Validators.required,
      FormsValidationService.numberOnly, FormsValidationService.Hours]],
      'finishMinutes': [this.selectedRecord.finishMinutes, [Validators.required,
      FormsValidationService.numberOnly, FormsValidationService.Minutes]],
    });
    this.editShift = true;
    $('#workshift').modal('show');
  }
  selectRecord(id) {
    const index = this.deleteList.indexOf(id);
    if (index > -1) {
      this.deleteList.splice(index, 1);
    } else {
      this.deleteList.push(id);
    }
  }
  deactive() {
    const req = { 'projWorkShiftIds': this.deleteList, 'status': 2 };
    this.service.PostService(req, '/projectlib/deleteprojWorkShifts')
      .subscribe((data) => {
        this.service.showSuccessMessage(data.message);
        this.getData();
      }, (error) => this.service.showErrorMessage(error.message));
  }
}
