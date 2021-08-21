import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FarmerService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  addFarmer(firstname: any, secondname: any, address: any) {
    const farmer = {
      firstname: firstname,
      secondname: secondname,
      address: address,
    };
    return this.http.post(`${this.uri}/Dashboard/admin/addfarmer`, farmer);
  }

  getFarmers() {
    return this.http.get(`${this.uri}/Dashboard/admin/getfarmers`);
  }

  getFarmerById(id: any) {
    return this.http.get(`${this.uri}/Dashboard/admin/getfarmer/${id}`);
  }

  deleteFarmer(id: any) {
    return this.http.delete(`${this.uri}/Dashboard/admin/deletefarmer/${id}`);
  }

  updateFarmer(id: any, firstname: any, secondname: any, address: any) {
    const farmer = {
      firstname: firstname,
      secondname: secondname,
      address: address,
    };
    return this.http.put(
      `${this.uri}/Dashboard/admin/updatefarmer/${id}`,
      farmer
    );
  }
}
