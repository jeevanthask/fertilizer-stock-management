import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FertilizerService } from 'src/app/services/fertilizer.service';

@Component({
  selector: 'app-addfertilizerstock',
  templateUrl: './addfertilizerstock.component.html',
  styleUrls: ['./addfertilizerstock.component.css'],
})
export class AddfertilizerstockComponent implements OnInit {
  createForm: FormGroup;
  fertilizers: any = [];
  fertilizerNames: any = [];
  fertilizerProductTypes: any = [];

  constructor(
    private fertilizerService: FertilizerService,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      producttype: '',
      quantity: '',
    });
  }

  ngOnInit(): void {
    this.fetchFertilizers();
  }

  fetchFertilizers() {
    this.fertilizerService.getFertilizers().subscribe((data) => {
      this.fertilizers = data;

      console.log(this.fertilizers);
      this.fetchFertilizerNamesAndProducts();
    });
  }

  //fertilizer names and producttypes are inserted in to separate arrays
  fetchFertilizerNamesAndProducts() {
    for (let item in this.fertilizers) {
      this.fertilizerNames.push(this.fertilizers[item].name);
    }
    console.log(this.fertilizerNames);

    for (let item in this.fertilizers) {
      this.fertilizerProductTypes.push(this.fertilizers[item].producttype);
    }
    console.log(this.fertilizerProductTypes);
  }
}
