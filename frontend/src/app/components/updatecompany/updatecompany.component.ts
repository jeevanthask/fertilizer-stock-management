import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from '../../services/farmer.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css'],
})
export class UpdatecompanyComponent implements OnInit {
  @Input() companyId: any;
  updateForm: FormGroup;
  company: any = {};

  constructor(private companyService: CompanyService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      email: '',
      telephone: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.companyService.getCompanyById(this.companyId).subscribe((res) => {
      this.company = res;
    });
  }

  updateCompany(
    firstname: any,
    secondname: any,
    email: any,
    telephone: any,
    address: any
  ) {
    this.companyService
      .updateCompany(
        this.companyId,
        firstname,
        secondname,
        email,
        telephone,
        address
      )
      .subscribe(() => {
        alert('The company updated successfully!!');
      });

    this.company.firstname = '';
    this.company.secondname = '';
    this.company.email = '';
    this.company.telephone = '';
    this.company.address = '';
  }
}
