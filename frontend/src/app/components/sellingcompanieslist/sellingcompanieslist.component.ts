import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-sellingcompanieslist',
  templateUrl: './sellingcompanieslist.component.html',
  styleUrls: ['./sellingcompanieslist.component.css'],
})
export class SellingcompanieslistComponent implements OnInit {
  companies: any = [];

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
}
