import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

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
  cities: City[] = [];
  billPreview: boolean = false;
  nextTemplate: boolean = false;
  selectedFertilizers: any = []; //array which conains the names of fertilizers user selected
  selectedFertilizersLength = 0;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      inputnic: '',
    });

    this.cities = [
      { name: 'NPK', code: 'NY' },
      { name: 'Urea', code: 'RM' },
      { name: 'PST', code: 'LDN' },
      { name: 'Fertilizer 4', code: 'IST' },
      { name: 'Fertilizer 5', code: 'PRS' },
    ];
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
