import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService, SettingsService, FormsValidationService } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less'],
  providers: [ApiService]
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _service: ApiService, private router: Router) {

  }
  login() {
    if (this.loginForm.valid) {
      console.log('Valid!');
      let isLoggedin: any = true;
      this._service.PostService('', '/user/changeUserPassword', this.loginForm.value)
        .subscribe(
        data => {
          localStorage.clear();
          this.router.navigateByUrl('/');
          alert('password reset successfull ')
        },
        error => console.log(error),
        () => console.log('everythin')
        );

    }
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      'oldPassWord': ['', [Validators.required]],
      'newPassWord': ['', Validators.required],
      'confirmPassWord': ['', [Validators.required, FormsValidationService.matchOtherValidator('newPassWord')]]
    });
  }
  resetform() {
    this.loginForm.reset();
  }

}
