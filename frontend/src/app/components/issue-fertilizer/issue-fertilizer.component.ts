import { Component, OnInit } from '@angular/core';
import { FarmerService } from 'src/app/services/farmer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FertilizerService } from 'src/app/services/fertilizer.service';

interface City {
  name: string;
  code: string;
}

interface FertilizerProductName {
  name: string;
  companyname: string;
  producttype: string;
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
  fertilizers: any = [];
  fertilizerNames: any = [];

  fertilizerProductTypes: any = [];
  fertilizerProductNames: FertilizerProductName[];

  isNextBtnClicked: any = false;

  generateQuantityNames: any = [];

  isBillPreviewClicked: boolean = false;

  xx: any;

  constructor(
    private farmerService: FarmerService,
    private fertilizerService: FertilizerService,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      inputnic: '',
    });

    this.fertilizerService.getFertilizers().subscribe((data) => {
      this.fertilizers = data;

      for (let item in this.fertilizers) {
        this.fertilizerNames.push(this.fertilizers[item]);
      }
    });

    this.fertilizerProductNames = this.fertilizerNames;
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

  handleNext(selectedItems: any) {
    this.isNextBtnClicked = true;
    this.generateQuantityNames = selectedItems;
  }

  ngOnInit() {
    this.fetchFarmers();
  }

  fetchFarmers() {
    this.farmerService.getFarmers().subscribe((data) => {
      this.farmers = data;
    });
  }

  handleGenerateBill() {
    console.log('from generate bill');
    console.log(this.xx);
    this.isBillPreviewClicked = true;
    this.generateQuantityNames.push(this.xx);
    console.log(this.generateQuantityNames);
  }
}
