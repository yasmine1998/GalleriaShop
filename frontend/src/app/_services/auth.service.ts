import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../global-constant';
import { map } from 'rxjs/operators';

const baseUrl = GlobalConstants.apiURL ;
const header = new HttpHeaders({
  'Content-type': 'application/json',
  Authorization: 'Token ' + localStorage.getItem('token')
});
const header1 = new HttpHeaders({
  'Content-type': 'application/x-www-form-urlencoded',
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router : Router ) { }

  register(model: any) {
    return this.http.post(baseUrl + 'user/create/', model, { headers: header})
  }

  login(model: any) {
    const body = new HttpParams()
        .set('username', model.username)
        .set('password', model.password)
        .set('grant_type', 'password');
    return this.http.post(baseUrl + 'api/token/', body, { headers: header1})
  }
}
