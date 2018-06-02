import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../../shared';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-warehouse-stackyard',
  templateUrl: './warehouse-stackyard.component.html',
  styleUrls: ['./warehouse-stackyard.component.less'],
  providers: [ApiService]

})
export class WarehouseStackyardComponent implements OnInit {
  ProjectList: any = [];
  showProjs = false;
  selectedProj: any = '';
  List: any = [];
  records = 10;
  isedit: any = false;
  stokyard: FormGroup;
  selectedRecord: any = {};
  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.stokyard = this.fb.group({
      // 'username': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'code': ['', Validators.required],
      'desc': ['', Validators.required],
      'category': ['', Validators.required],
      'status': ['', Validators.nullValidator]
    });
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
    this.service.PostService(request, '/projectlib/getProjStoreStocks')
      .subscribe(data => {
        console.log(data);
        this.List = data.projStoreStockTOs;
      },
      error => console.log(error))

  }
  create() {
    let req: any;
    if (this.isedit) {

    } else {

    }
    this.service.PostService(req, '')
      .subscribe((data) => {

      }, (error) => alert('server Issue'))
  }
  edit() {
    this.isedit = true;
    this.stokyard = this.fb.group({
      'code': [this.selectedRecord.code, Validators.required],
      'desc': [this.selectedRecord.desc, Validators.required],
      'category': [this.selectedRecord.category, Validators.required],
      'status': [this.selectedRecord.status, Validators.nullValidator]
    });
  }
}
