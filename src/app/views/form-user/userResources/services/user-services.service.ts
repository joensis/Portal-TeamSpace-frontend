import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewUsers } from '../models/NewUsers';
import { Observable } from 'rxjs';
import { newUserResponse } from '../newUserResponse';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient, private router: Router) {  }

  createUser(newUser: NewUsers): Observable<newUserResponse>{
    return this.http.post<newUserResponse>('http://localhost:8080/api/users/register', newUser)
  }



}