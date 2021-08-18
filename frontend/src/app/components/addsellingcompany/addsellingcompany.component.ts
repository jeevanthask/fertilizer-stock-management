import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../services/company.service";


@Component({
  selector: 'app-addsellingcompany',
  templateUrl: './addsellingcompany.component.html',
  styleUrls: ['./addsellingcompany.component.css']
})
export class AddsellingcompanyComponent implements OnInit {

  createForm: FormGroup;

  constructor(private companyService: CompanyService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      email: '',
      telephone: '',
      address: ''
    });
  }

  addCompany(firstname: any, secondname: any, email: any, telephone: any, address: any) {

    console.log(firstname)
    console.log(secondname)
    console.log(email)
    console.log(telephone)
    console.log(address)

    this.companyService.addCompany(firstname, secondname, email, telephone, address).subscribe(() => {
      alert("The company added successfully!!")
    });

    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      email: '',
      telephone: '',
      address: ''
    })

  };

  ngOnInit(): void {
  }

}
