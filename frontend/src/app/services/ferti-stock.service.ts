import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FertiStockService {
  // uri = 'http://localhost:4000';
  // constructor(private http: HttpClient) {}
  // addFertiStock(firstname: any, secondname: any, nic: any, address: any) {
  //   const stock = {
  //     name: name,
  //     producttype: producttype,
  //     quantity: quantity,
  //   };
  //   return this.http.post(
  //     `${this.uri}/Dashboard/admin/addfertilizerstock`,
  //     stock
  //   );
  // }
  // getFarmers() {
  //   return this.http.get(`${this.uri}/Dashboard/admin/getfarmers`);
  // }
  // getFarmerById(id: any) {
  //   return this.http.get(`${this.uri}/Dashboard/admin/getfarmer/${id}`);
  // }
  // deleteFarmer(id: any) {
  //   return this.http.delete(`${this.uri}/Dashboard/admin/deletefarmer/${id}`);
  // }
  // updateFarmer(
  //   id: any,
  //   firstname: any,
  //   secondname: any,
  //   nic: any,
  //   address: any
  // ) {
  //   const farmer = {
  //     firstname: firstname,
  //     secondname: secondname,
  //     nic: nic,
  //     address: address,
  //   };
  //   return this.http.put(
  //     `${this.uri}/Dashboard/admin/updatefarmer/${id}`,
  //     farmer
  //   );
  // }
}
