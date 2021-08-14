import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addfarmers',
  templateUrl: './addfarmers.component.html',
  styleUrls: ['./addfarmers.component.css']
})
export class AddfarmersComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

    this.createForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      address: ''
    })
  };

  ngOnInit(): void {
  }

}
