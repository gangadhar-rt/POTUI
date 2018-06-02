import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.less'],
  providers: [ApiService]
})
export class ProjectNotesComponent implements OnInit {
  List: any;
  editDetails: any;
  records = 10;
  selectedlist: any = [{ projId: 0 }];
  selectedlist1: any = [];
  noteList: any = [];
  Isedit = false;
  cc_creation: FormGroup;
  isForm = false;
  constructor(private fb: FormBuilder, private _service: ApiService, private router: Router) { }
  ngOnInit() {
    this.getProjectList();

  }
  resetForm(val) {
    this.cc_creation = this.fb.group({
      'projId': [this.selectedlist[0].projId, Validators.nullValidator],
      'selected': [false, Validators.nullValidator],
      'topic': [val.topic || null, Validators.required],
      'description': [val.description || null, Validators.required],
      'status': [1, Validators.required]
    });
    this.isForm = true;
  }
  getProjectList() {
    const request = { 'status': '1' };
    this._service.PostService(request, '/projectlib/getEPSUserProjects')
      .subscribe(
        data => {
          this.List = data.epsProjs;
          setTimeout(() => {
            jQuery('.addicon').click(function (d) {
              // debugger;
              // d.stopPropagation();
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
  selectedRecords(e) {
    this.selectedlist = [e];
    this.getNotes();
  }
  selectedRecords1(code, e) {
    e.stopPropagation();
    code.checked = !code.checked;
    if (code.checked) {
      this.selectedlist1.push(code);
    } else {
      const index = this.selectedlist1.map(function (x) { return x.id; }).indexOf(code.id);
      this.selectedlist1.splice(index, 1);
    }
  }
  getNotes() {
    const req = { 'status': 1, 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/getProjNoteBook')
      .subscribe(
        data => {
          this.noteList = data.projNoteBookTOs;
          this.noteList.forEach(element => {
            element.checked = false;
          });
          this.selectedlist1 = [];
        },
        error => {
          console.log(error);
        }
      );
  }
  edit() {
    this.Isedit = true;
    this.resetForm(this.selectedlist1[0]);
    $('.modal').modal('show');
  }
  reset() {
    this.resetForm({});
    $('.modal').modal('hide');

  }
  saveDetails() {
    let req;
    if (this.Isedit) {
      req = this.selectedlist1[0];
      req.topic = this.cc_creation.value.topic;
      req.description = this.cc_creation.value.description;
    } else {
      req = this.cc_creation.value;
    }

    req = { 'projNoteBookTOs': [req], 'projId': this.selectedlist[0].projId };
    this._service.PostService(req, '/projsettings/saveProjNoteBook')
      .subscribe(
        data => {
          this.noteList = data.projNoteBookTOs;
          this.noteList.forEach(element => {
            element.checked = false;
          });
          this.Isedit = false;
          $('.modal').modal('hide');
          this.selectedlist1 = [];
        },
        error => {
          console.log(error);
        }
      );
  }
}
