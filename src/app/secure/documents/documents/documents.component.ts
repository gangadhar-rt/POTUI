import { Component, OnInit } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';
@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.less'],
    providers: [ApiService]
})
export class DocumentComponent implements OnInit {
    List: any = [];
    itemid = 1;
    expsnad = true;
    epsData: any = [];
    request: any = { project: '', eps: '', id: 0 };
    documentrequest: any = { id: 0 };
    getpop = false;
    selectedlist = [];
    records = 10;
    documentsList: any = [];
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
        this.documentsList = [];
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
        this.documentrequest.id = item.id;
        this.documentrequest.projId = item.projId;
        this._service.PostService({ 'status': 1, 'id': item.id }, '/document/getProjDocFilesByFolder')
            .subscribe(data => {
                console.log(data);
                this.documentsList = data.projDocFileTOs;
            }, error => console.log(error));
    }

    addNewDocument() {

        if (this.documentrequest.id > 0) {
            const newDoc = {
                'select': false,
                'code': '',
                'name': '',
                'fileContentId': '',
                'fileType': '',
                'fileSize': '',
                'version': '',
                'fileStatus': '',
                'folderId': '',
                'parentId': '',
                'status': 1,
                'projId': this.documentrequest.projId,
                'category': ''
            };
            this.documentsList.push(newDoc);
        } else {
            alert('click on folder icon first to do operations of documents');
        }
    }
    saveData() {
        const request = { folderId: this.documentrequest.id, status: 1, projDocFileTOs: this.documentsList };
        this._service.PostService(request, '/document/saveProjDocFilesByFolder')
            .subscribe(data => {
                console.log(data);
                this.documentsList = data.projDocFileTOs;
            }, error => console.log(error));
    }

}
