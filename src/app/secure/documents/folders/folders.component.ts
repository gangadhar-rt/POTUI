import { Component, OnInit } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';
@Component({
    selector: 'app-folders',
    templateUrl: './folders.component.html',
    styleUrls: ['./folders.component.less'],
    providers: [ApiService]
})
export class FoldersComponent implements OnInit {
    List: any = [];
    itemid = 1;
    expsnad = true;
    epsData: any = [];
    request: any = { project: '', eps: '', id: 0 };
    getpop = false;
    selectedlist = [];
    records = 10;
    constructor(private _service: ApiService) { }
    ngOnInit() {

    }
    updateValues(e) {
        this.getpop = false;
        this.request = { project: e.selectedProj.projName, eps: e.selectedProj.parentName, id: e.selectedProj.projId }
    }
    reset() {
        this.request = { project: '', eps: '' };
        this.List = [];
    }
    getList() {
        this._service.PostService({ 'status': 1, 'projId': this.request.id }, '/document/getProjDocFolders')
            .subscribe(data => {
                this.List = data.projDocFolderTOs;
            }, error => console.log(error));
    }
    selectedRecords(folderObj) {
        if (folderObj.select) {
            this.selectedlist.push(folderObj);
        } else {
            const index = this.selectedlist.map(function (e) { return e.id; }).indexOf(folderObj.id);
            this.selectedlist.splice(index, 1);
        }
    }
    getDocumentDetails(item) {
        console.log(item);
    }
    addFolderSubGroup(tabData) {
        tabData.childProjDocFolderTOs.push({
            'select': false,
            'parentId': '',
            'status': 1,
            'deleteFlag': false,
            'parentName': '',
            'name': '',
            'projId': this.request.id,
            'childProjDocFolderTOs': []
        });
        this.itemid = tabData.id;
        this.expsnad = false;
    }
    itemClick1(id, expand) {

    }
    deleteFolder(tab) {
        if (this.request.id <= 0) {
            alert('Please select Project and folder');
            return;
        }
        tab.deleteFlag = true;
    }
    saveData() {
        const folderReq = {
            'projDocFolderTOs': this.List,
            'status': 1,
            'projId': this.request.id
        };
        this._service.PostService(folderReq, '/document/saveProjDocFolders')
            .subscribe(data => this.List = data.projDocFolderTOs,
            error => console.log(error));
    }

    addFolderGroup(actionType) {
        if (this.request.id <= 0) {
            alert('Please select Project ');
            return;
        }
        if (actionType === 'Add') {
            this.List.push({
                'select': false,
                'deleteFlag': false,
                'status': 1,
                'parentName': '',
                'name': '',
                'projId': this.request.id,
                'childProjDocFolderTOs': []
            });
            this.itemid = null;
            this.expsnad = false;
        } else {
            alert('invalid action');
        }
    }

}
