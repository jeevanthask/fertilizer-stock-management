import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  uri = "http://localhost:4000"

  constructor(private http: HttpClient) {
  }

  addOfficer(firstname: any, secondname: any, position: any) {
    const officer = {
      firstname: firstname,
      secondname: secondname,
      position: position
    };
    return this.http.post(`${this.uri}/Dashboard/admin/addofficer`, officer)
  }
}
