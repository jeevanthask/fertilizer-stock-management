import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-sellingcompanieslist',
  templateUrl: './sellingcompanieslist.component.html',
  styleUrls: ['./sellingcompanieslist.component.css'],
})
export class SellingcompanieslistComponent implements OnInit {
  companies: any = [];
  isUpdateCompanyClicked: any;
  companyId: any = ''

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data;
      console.log(this.companies);
    });
  }

  deleteCompany(id: any) {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.fetchCompanies();
    });
  }

  clickUpdateCompany(id: any) {

    this.companyId = id
    console.log('company is',this.companyId)
    this.isUpdateCompanyClicked = 'updateCompany';
  }

  handleBack() {
    alert('cbducb');
  }
}
