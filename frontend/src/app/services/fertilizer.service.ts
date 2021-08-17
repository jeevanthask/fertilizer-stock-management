import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FertilizerService {

  uri = "http://localhost:4000"

  constructor(private http: HttpClient) {
  }

  addFertilizer(pname: any, comname: any, protype: any) {
    const fertilizer = {
      name: pname,
      companyname: comname,
      producttype: protype
    };
    return this.http.post(`${this.uri}/Dashboard/admin/addfertilizer`, fertilizer)
  }
}
