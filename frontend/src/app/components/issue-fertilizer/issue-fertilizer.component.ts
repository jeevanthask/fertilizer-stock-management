import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-fertilizer',
  templateUrl: './issue-fertilizer.component.html',
  styleUrls: ['./issue-fertilizer.component.css'],
})
export class IssueFertilizerComponent implements OnInit {
  createForm: FormGroup;
  farmers: any = [];
  firstname: any;
  secondname: any;
  address: any;
  showResults: boolean = false;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      inputnic: '',
    });
  }

  searchFarmer(inputnic: any) {
    const farmerObj = this.farmers.find((k: any) => k.nic == inputnic);

    if (farmerObj == undefined) {
      this.firstname = '';
      this.secondname = '';
      this.address = '';
      this.showResults = false;
      alert('No Farmer for this ID');
    } else {
      this.firstname = farmerObj.firstname;
      this.secondname = farmerObj.secondname;
      this.address = farmerObj.address;
      this.showResults = true;
      console.log(this.firstname);
      console.log(this.secondname);
      console.log(this.address);
    }
  }

  ngOnInit() {
    this.fetchFarmers();
  }

  fetchFarmers() {
    this.farmerService.getFarmers().subscribe((data) => {
      this.farmers = data;
      console.log(this.farmers);
    });
  }
}
