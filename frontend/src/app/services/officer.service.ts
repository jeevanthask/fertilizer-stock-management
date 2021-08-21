import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  addOfficer(firstname: any, secondname: any, position: any) {
    const officer = {
      firstname: firstname,
      secondname: secondname,
      position: position,
    };
    return this.http.post(`${this.uri}/Dashboard/admin/addofficer`, officer);
  }

  getOfficers() {
    return this.http.get(`${this.uri}/Dashboard/admin/getofficers`);
  }

  getOfficerById(id: any) {
    return this.http.get(`${this.uri}/Dashboard/admin/getofficer/${id}`);
  }

  deleteOfficer(id: any) {
    return this.http.delete(`${this.uri}/Dashboard/admin/deleteofficer/${id}`);
  }

  updateOfficer(id: any, firstname: any, secondname: any, position: any) {
    const officer = {
      firstname: firstname,
      secondname: secondname,
      position: position,
    };
    return this.http.put(
      `${this.uri}/Dashboard/admin/updateofficer/${id}`,
      officer
    );
  }
}
