import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ErroralertService } from '../../services/erroralert.service';
import { Erroralert } from '../../services/erroralert';
declare var $: any;
@Component({
  selector: 'app-erroralert',
  templateUrl: './erroralert.component.html',
  styleUrls: ['./erroralert.component.less']
})
export class ErroralertComponent implements OnInit {
  message = '';
  error: any;
  private subscription: Subscription;
  constructor(private errSvc: ErroralertService) { }

  ngOnInit() {
    this.subscription = this.errSvc.Statuserror
      .subscribe((state: Erroralert) => {
        this.error = state.errorMessage;
        this.show();
      });
  }

  hide() {
    this.error = '';
    $('#errModal').modal('hide');
    // location.reload();
  }

  show() {
    if (this.error !== undefined || this.error !== null || this.error !== '') {
      this.message = this.error;
      $('#errModal').modal('show');
    } else {
      $('#errModal').modal('hide');
    }
  }
}
