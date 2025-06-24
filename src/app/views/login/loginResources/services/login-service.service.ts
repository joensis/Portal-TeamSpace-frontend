import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './../LoginResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  LoginUser(user: User): Observable<LoginResponse>{
    return this.http.post<LoginResponse>('http://localhost:8080/api/users/login', user);
    
  }


}
