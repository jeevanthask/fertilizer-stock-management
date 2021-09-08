import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: any) {
    return this.http.post(`${this.uri}/Dashboard/admin/login`, user);
  }

  loggedIn() {
    //return always true or false by !!if  the token is in the browser it will reuturn true else false
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
