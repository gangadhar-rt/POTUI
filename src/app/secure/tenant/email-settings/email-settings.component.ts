import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-email-settings',
  templateUrl: './email-settings.component.html',
  styleUrls: ['./email-settings.component.less'],
  providers: [ApiService]
})
export class EmailSettingsComponent implements OnInit {
  settingList: any = [];
  records = 10;
  emailCreate: FormGroup;
  constructor(private fb: FormBuilder, private _service: ApiService) { }

  ngOnInit() {
    this.emailCreate = this.fb.group({
      'host': ['', [Validators.required]],
      'port': ['', Validators.required],
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.getEmailSettings();
  }

  getEmailSettings() {
    const req = { "status": 1 };
    this._service.PostService(req, '/user/getEmailSettings')
      .subscribe((data) => {
        this.settingList = data.emailSettingTOs;
      },
      (error) => console.log(error))
  }
  
  saveDetails() {
    let loggedInUser = JSON.parse(localStorage.getItem('uzrData'));
    let request = {"clientId": loggedInUser.clientId,"clientCode":loggedInUser.clientCode,"status":1, "emailSettingTOs" : 
      [{"id" : null,"host":this.emailCreate.value.host,"port":this.emailCreate.value.port,"fromEmail":this.emailCreate.value.email,"userName" : this.emailCreate.value.username,
      "password" : this.emailCreate.value.password}]};
    
    this._service.PostService(request, '/user/saveEmailSettings')
      .subscribe(
      data => {
        this.settingList.push(data.emailSettingTOs[0]);
        console.log(data);
        $('#emailpop').modal('hide');
        }
      )
  }

  createEmail() {
    this.emailCreate.reset();
    $('#emailpop').modal('show')
  }
}
