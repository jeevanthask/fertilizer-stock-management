import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FarmerService} from "../../services/farmer.service";

@Component({
  selector: 'app-addfarmers',
  templateUrl: './addfarmers.component.html',
  styleUrls: ['./addfarmers.component.css']
})
export class AddfarmersComponent implements OnInit {

  createForm: FormGroup;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      address: ''
    });
  }

  addFarmer(firstname: any, secondname: any, address: any) {

    console.log(firstname)
    console.log(secondname)
    console.log(address)

    this.farmerService.addFarmer(firstname, secondname, address).subscribe(() => {
      alert("The book added successfully!!")
    });

    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      address: ''
    })

  };

  ngOnInit(): void {
  }

}
