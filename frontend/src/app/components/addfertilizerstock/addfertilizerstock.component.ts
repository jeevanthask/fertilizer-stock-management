import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FertilizerService } from 'src/app/services/fertilizer.service';

interface FertilizerType {
  name: string;
  code: string;
}

interface FertilizerProductName {
  name: string;
  companyname: string;
  producttype: string;
}

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
  fertilizerTypes: FertilizerType[];
  fertilizerProductNames: FertilizerProductName[];

  constructor(
    private fertilizerService: FertilizerService,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      producttype: '',
      quantity: '',
    });

    this.fertilizerTypes = [
      { name: 'Organic', code: 'NY' },
      { name: 'Inorganic', code: 'RM' },
    ];

    this.fertilizerService.getFertilizers().subscribe((data) => {
      this.fertilizers = data;

      for (let item in this.fertilizers) {
        this.fertilizerNames.push(this.fertilizers[item]);
      }
    });

    this.fertilizerProductNames = this.fertilizerNames;
  }

  ngOnInit(): void {}

  sendStockToDB(name: any, protype: any, quantity: any) {
    console.log(name.name);
    console.log(protype.name);
    console.log(quantity);

    this.fertilizerService
      .addFertilizerSock(name.name, protype.name, quantity)
      .subscribe(() => {
        alert('The fertilizer stock transaction successfull!!');
      });
  }
}
