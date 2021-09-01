import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FertilizerService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  addFertilizer(pname: any, comname: any, protype: any) {
    const fertilizer = {
      name: pname,
      companyname: comname,
      producttype: protype,
    };
    return this.http.post(
      `${this.uri}/Dashboard/admin/addfertilizer`,
      fertilizer
    );
  }

  getFertilizers() {
    return this.http.get(`${this.uri}/Dashboard/admin/getfertilizers`);
  }

  getFertilizerById(id: any) {
    return this.http.get(`${this.uri}/Dashboard/admin/getfertilizer/${id}`);
  }

  deleteFertilizer(id: any) {
    return this.http.delete(
      `${this.uri}/Dashboard/admin/deletefertilizer/${id}`
    );
  }

  updateFertilizer(id: any, name: any, companyname: any, producttype: any) {
    const fertilizer = {
      name: name,
      companyname: companyname,
      producttype: producttype,
    };
    return this.http.put(
      `${this.uri}/Dashboard/admin/updatefertilizer/${id}`,
      fertilizer
    );
  }

  //fertilizer stock service functions

  addFertilizerSock(name: any, producttype: any, quantity: any) {
    const fertilizer = {
      name: name,
      producttype: producttype,
      quantity: quantity,
    };
    return this.http.post(
      `${this.uri}/Dashboard/admin/addfertilizerstock`,
      fertilizer
    );
  }

  getFertilizersStock() {
    return this.http.get(`${this.uri}/Dashboard/admin/getfertilizerstocks`);
  }

  getFertilizerStockById(id: any) {
    return this.http.get(
      `${this.uri}/Dashboard/admin/getfertilizerstock/${id}`
    );
  }

  deleteFertilizerStock(id: any) {
    return this.http.delete(
      `${this.uri}/Dashboard/admin/deletefertilizerstock/${id}`
    );
  }

  updateFertilizerStock(id: any, name: any, producttype: any, quantity: any) {
    const fertilizer = {
      name: name,
      producttype: producttype,
      quantity: quantity,
    };
    return this.http.put(
      `${this.uri}/Dashboard/admin/updatefertilizerstock/${id}`,
      fertilizer
    );
  }
}
