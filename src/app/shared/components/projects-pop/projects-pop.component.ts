import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
@Component({
  selector: 'app-projects-pop',
  templateUrl: './projects-pop.component.html',
  styleUrls: ['./projects-pop.component.css']
})
export class ProjectsPopComponent implements OnInit, OnChanges {
  epsData: any = [];
  selectedProj: {};
  @Input() projid: any;

  @Output() update = new EventEmitter<any>();
  projectList: any = [];
  itemid: any = 1;
  expand: any = true;
  constructor(private _service: ApiService) { }
  ngOnInit() {

  }
  ngOnChanges() {
    if (this.projid) {
      this.getDetails();
    } else {
      $('#getprojects').modal('hide');
    }
  }
  getDetails() {
    this._service.PostService({ 'status': 1 }, '/projectlib/getEPSUserProjects')
      .subscribe(data => {
        this.projectList = data.epsProjs;
        this.epsData = data.epsProjs;
        console.log(data);
        $('#getprojects').modal('show');
      });
  }



  selectEPSProject(a) {
    this.update.emit({
      selectedProj: a
    }
    );
    $('#getprojects').modal('hide');
    console.log(a);
  }
  getid(id, exp) {
    this.itemid = id;
    this.expand = !exp;
    this.getDetails();
  }
  reset() {
    $('#getprojects').modal('hide');
  }
}
