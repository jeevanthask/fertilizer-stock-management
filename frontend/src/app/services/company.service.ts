import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  addCompany(
    firstname: any,
    secondname: any,
    email: any,
    telephone: any,
    address: any
  ) {
    const company = {
      firstname: firstname,
      secondname: secondname,
      email: email,
      telephone: telephone,
      address: address,
    };
    return this.http.post(`${this.uri}/Dashboard/admin/addcompany`, company);
  }

  getCompanies() {
    return this.http.get(`${this.uri}/Dashboard/admin/getcompanies`);
  }

  getCompanyById(id: any) {
    return this.http.get(`${this.uri}/Dashboard/admin/getcompany/${id}`);
  }

  deleteCompany(id: any) {
    return this.http.delete(`${this.uri}/Dashboard/admin/deletecompany/${id}`);
  }

  updateCompany(
    id: any,
    firstname: any,
    secondname: any,
    email: any,
    telephone: any,
    address: any
  ) {
    const company = {
      firstname: firstname,
      secondname: secondname,
      email: email,
      telephone: telephone,
      address: address,
    };
    return this.http.put(
      `${this.uri}/Dashboard/admin/updatecompany/${id}`,
      company
    );
  }
}
