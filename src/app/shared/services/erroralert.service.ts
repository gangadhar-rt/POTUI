import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Erroralert } from './erroralert';
@Injectable()
export class ErroralertService {
  private statuserrorObject = new Subject<Erroralert>();
  Statuserror = this.statuserrorObject.asObservable();
  constructor() { }
  show(s) {
    this.statuserrorObject.next(<Erroralert>{ errorMessage: s });
  }
}
