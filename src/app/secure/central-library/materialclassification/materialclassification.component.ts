import { Component, OnInit } from '@angular/core';
import { ApiService, SettingsService } from '../../../shared';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
@Component({
    selector: 'app-materialclassification',
    templateUrl: './materialclassification.component.html',
    styleUrls: ['./materialclassification.component.less'],
    providers: [ApiService]
})
export class MaterialclassificationComponent implements OnInit {
    togggled: any = false;
    List: any;
    selectedlist = [];
    editDetails: any;
    mStatus = '';
    records = 10;
    treeData = {
        'materialClassTOs': [
            {
                'select': false,
                'parentId': null,
                'item': false,
                'deleteFlag': true,
                'status': 1,
                'code': '',
                'name': '',
                'childMaterialItemTOs': [],
                'level': 0,
                'leaf': true,
                'expand': true
            }
        ]
    };
    request = { 'status': '1' };

    constructor(private _service: ApiService, private _route: Router) { }
    ngOnInit() {
        this.getList();
    }

    getList() {
        this._service.PostService(this.request, '/centrallib/getMaterialGroups')
            .subscribe(
                data => {
                    this.List = data.materialClassTOs;
                    this.List.forEach(element => {
                        element.checked = false;
                    });
                    setTimeout(() => {
                        jQuery('.addicon').click(function (d) {
                            // debugger;
                            console.log('fdgdfg');
                            d.stopPropagation();
                            jQuery(this).parents('header').siblings('ul').toggle();
                            jQuery(this).toggleClass('active');

                        });
                    }, 500);


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

    treeJsonBuilder(level, type, i?, j?, k?, l?, m?) {
        const newJson = {
            'select': false,
            'parentId': null,
            'item': false,
            'deleteFlag': true,
            'status': 1,
            'code': '',
            'name': '',
            'childMaterialItemTOs': [],
            'level': level + 1,
            'leaf': true,
            'expand': true
        };
        if (type === 'delete') {
            // array.splice(index, howmany, item1, ....., itemX)
            if (i === undefined && j === undefined && k === undefined && l === undefined && m === undefined) {
                this.treeData.materialClassTOs[0].childMaterialItemTOs.splice(0, 1);
            }
            if (j === undefined && k === undefined && l === undefined && m === undefined) {
                this.treeData.materialClassTOs[0].childMaterialItemTOs.splice(i, 1);
            } else if (k === undefined && l === undefined && m === undefined) {
                this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs.splice(j, 1);
            } else if (l === undefined && m === undefined) {
                this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs.splice(k, 1);
            } else if (m === undefined) {
                this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.splice(l, 1);
            } else {
                this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs[l].childMaterialItemTOs.splice(m, 1);
            }

        } else {

            if (type === 'addLeaf') {
                newJson.expand = false;
                newJson.leaf = false;
            }

            switch (level) {
                case 0:

                    // newJson.code = `level 1-0`
                    this.treeData.materialClassTOs[0].childMaterialItemTOs.push(newJson);
                    break;
                case 1:
                    // newJson.code = `level 2-${i}`
                    this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs.push(newJson);
                    break;
                case 2:
                    // newJson.code = `level 3-${j}`
                    this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs.push(newJson);
                    break;
                case 3:
                    // newJson.code = `level 4-${k}`
                    this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.push(newJson);
                    break;
                case 4:
                    // newJson.code = `level 5-${l}`
                    // this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs.push(newJson);
                    this.treeData.materialClassTOs[0].childMaterialItemTOs[i].childMaterialItemTOs[j].childMaterialItemTOs[k].childMaterialItemTOs[l].childMaterialItemTOs.push(newJson);
                    break;

            }
        }
    }

    SaveData() {
        this._service.PostService(this.treeData, '/centrallib/saveMaterialGroups')
            .subscribe(data => {
                console.log(data);
                this.List = data.materialClassTOs;
                this.List.forEach(element => {
                    element.checked = false;
                });
                setTimeout(() => {
                    jQuery('.addicon').click(function (d) {
                        // debugger;
                        console.log('fdgdfg');
                        d.stopPropagation();
                        jQuery(this).parents('header').siblings('ul').toggle();
                        jQuery(this).toggleClass('active');

                    });
                }, 500);
                this.treeData = {
                    'materialClassTOs': [
                        {
                            'select': false,
                            'parentId': null,
                            'item': false,
                            'deleteFlag': true,
                            'status': 1,
                            'code': '',
                            'name': '',
                            'childMaterialItemTOs': [],
                            'level': 0,
                            'leaf': true,
                            'expand': true
                        }
                    ]
                };
                $('#materialCreate').modal('hide');
            },
                error => {
                    console.log(error);

                },
                () => {
                    console.log('call successfull');
                });
    }
    editRecord(record) {
        this.editDetails = record;
        this.treeData.materialClassTOs[0] = record;
        $('#materialCreate').modal('show');
    }
    reset() {
        this.request = { 'status': '1' };
        this.getList();
    }
    deactive() {
        const req = { 'materialIds': this.selectedlist.map((data) => data.id), 'status': 2 };
        this._service.PostService(req, '/centrallib/deleteMaterialGroups')
            .subscribe((data) => {
                this.selectedlist = [];
                this.getList();
            },
                (error) => {
                    alert('deactive failed');
                });

    }
    createNew() {
        this.treeData = {
            'materialClassTOs': [
                {
                    'select': false,
                    'parentId': null,
                    'item': false,
                    'deleteFlag': true,
                    'status': 1,
                    'code': '',
                    'name': '',
                    'childMaterialItemTOs': [],
                    'level': 0,
                    'leaf': true,
                    'expand': true
                }
            ]
        };
    }
}
