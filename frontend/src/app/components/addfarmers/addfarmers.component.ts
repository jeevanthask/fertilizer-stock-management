import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from '../../services/farmer.service';

@Component({
  selector: 'app-addfarmers',
  templateUrl: './addfarmers.component.html',
  styleUrls: ['./addfarmers.component.css'],
})
export class AddfarmersComponent implements OnInit {
  createForm: FormGroup;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      nic: '',
      address: '',
    });
  }

  addFarmer(firstname: any, secondname: any, nic: any, address: any) {
    console.log(firstname);
    console.log(secondname);
    console.log(address);

    this.farmerService
      .addFarmer(firstname, secondname, nic, address)
      .subscribe(() => {
        alert('The farmer added successfully!!');
      });

    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      nic: '',
      address: '',
    });
  }

  ngOnInit(): void {}
}
