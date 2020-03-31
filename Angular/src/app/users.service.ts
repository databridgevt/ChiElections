import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginData } from './login-dialog/login-dialog.component';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const loginOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postLogin(data: LoginData): Observable<any> {
    return this.http.post(environment.api + 'login', data, loginOptions);
  }

}
