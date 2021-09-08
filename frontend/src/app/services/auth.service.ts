import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  // addOfficer(firstname: any, secondname: any, position: any) {
  //   const officer = {
  //     firstname: firstname,
  //     secondname: secondname,
  //     position: position,
  //   };
  //   return this.http.post(`${this.uri}/Dashboard/admin/addofficer`, officer);
  // }

  // getOfficers() {
  //   return this.http.get(`${this.uri}/Dashboard/admin/getofficers`);
  // }

  // getOfficerById(id: any) {
  //   return this.http.get(`${this.uri}/Dashboard/admin/getofficer/${id}`);
  // }

  loginUser(user: any) {
    return this.http.post(`${this.uri}/Dashboard/admin/login`, user);
  }
}
