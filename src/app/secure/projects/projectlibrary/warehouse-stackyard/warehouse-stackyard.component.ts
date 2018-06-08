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
  categoryList = [];
  deleteList: any = [];
  constructor(private service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getPreData();
    this.stokyard = this.fb.group({
      // 'username': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'code': ['', Validators.required],
      'desc': ['', Validators.required],
      'category': ['', Validators.required],
    });
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
    const request = { 'projId': this.selectedProj, 'status': '1' }
    console.log(this.selectedProj);
    this.service.PostService(request, '/projectlib/getProjStoreStocks')
      .subscribe(data => {
        console.log(data);
        this.List = data.projStoreStockTOs;
      },
        error => console.log(error));

  }
  selectRecord(id) {
    const index = this.deleteList.indexOf(id);
    if (index > -1) {
      this.deleteList.splice(index, 1);
    } else {
      this.deleteList.push(id);
    }
  }
  create() {
    let req: any;
    if (this.isedit) {
      req = this.selectedRecord;
      req.code = this.stokyard.value.code;
      req.desc = this.stokyard.value.desc;
      req.category = this.stokyard.value.category;
    } else {
      req = {
        'clientId': null,
        'clientCode': null,
        'status': 1,
        'id': null,
        'code': this.stokyard.value.code,
        'desc': this.stokyard.value.desc,
        'projId': this.selectedProj,
        'category': this.stokyard.value.category,
        'duplicateFlag': false
      };
    }
    this.service.PostService({ projStoreStockTOs: [req], projId: this.selectedProj }, '/projectlib/saveProjStoreStocks')
      .subscribe((data) => {
        this.List = data.projStoreStockTOs;
        this.service.showSuccessMessage(data.message);
        this.stokyard.reset();
        $('#empclasification').modal('hide');
      }, (error) => this.service.showErrorMessage(error.message));
  }
  getPreData() {
    const req = { 'status': 1 };
    this.service.PostService(req, '/projectlib/projStockPileOnLoad')
      .subscribe((data) => {
        this.categoryList = data.categorys;
      }, (error) => console.log(error));
  }
  edit() {
    this.isedit = true;
    this.stokyard = this.fb.group({
      'code': [this.selectedRecord.code, Validators.required],
      'desc': [this.selectedRecord.desc, Validators.required],
      'category': [this.selectedRecord.category, Validators.required],
    });
    $('#empclasification').modal('show');
  }

  deactive() {
    const req = { 'projStoreStockIds': this.deleteList, 'status': 2 };
    this.service.PostService(req, '/projectlib/deleteProjStoreStocks')
      .subscribe((data) => {
        this.service.showSuccessMessage(data.message);
        this.getData();
      }, (error) => this.service.showErrorMessage(error.message));
  }
}
