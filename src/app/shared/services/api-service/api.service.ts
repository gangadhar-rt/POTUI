import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {
  baseUrll = environment.url;
  constructor(private _http: Http) { }
  random() {
    return Math.round(new Date().getTime() / 1000);
  }
  PostService(body, Url, paramsObj?) {
    let request = '';
    if (body !== '') {
      request = JSON.stringify(body);
    }
    const params: URLSearchParams = new URLSearchParams();
    for (const key in paramsObj) {
      if (paramsObj.hasOwnProperty(key)) {
        const element = paramsObj[key];

        params.set(key, element.split(' ').join('+'));
      }
    }
    let buster: any = this.random();
    const parm: any = params;
    if (paramsObj) {
      buster = buster + '&';
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json;application/json;charset=UTF-8');
    headers.append('pragma', 'no-cache');
    const token = localStorage.getItem('token');
    if (token !== undefined) {
      headers.append('pottoken', localStorage.getItem('token'));
    }
    return this._http.post(this.baseUrll + Url + '?cacheBuster=' + buster + params, request, { headers: headers })
      .map((res: Response) => res.json())
      //  .retry()
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  PostServiceWithMultipart(body, Url) {
      const headers = new Headers();
      headers.append('pragma', 'no-cache');
       
       const token = localStorage.getItem('token');
      if (token !== undefined) {
        headers.append('pottoken', localStorage.getItem('token'));
    }
            
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post(this.baseUrll + Url, body, options)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  GetService(url, prams) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.getItem('token'));
    // headers.append('Access-Control-Allow-Origin', '*');
    return this._http.get(this.baseUrll + url + prams + '?cacheBuster=' + this.random(), { headers: headers })
      .map((response: Response) => response.json())
      .catch((error) => {
        return 'seomething gone wrong';
      });
  }

  getExternalService(url, params) {
    return this._http.get(url + params)
    .map((response: Response) => response.json())
    .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

}



