import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from 'src/app/services/farmer.service';

@Component({
  selector: 'app-updatefarmer',
  templateUrl: './updatefarmer.component.html',
  styleUrls: ['./updatefarmer.component.css'],
})
export class UpdatefarmerComponent implements OnInit {
  @Input() farmerId: any;
  farmer: any = {};

  updateForm: FormGroup;
  displayModal: boolean = false;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      nic: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.farmerService.getFarmerById(this.farmerId).subscribe((res) => {
      this.farmer = res;
    });
  }

  updateFarmer(firstname: any, secondname: any, nic: any, address: any) {
    this.farmerService
      .updateFarmer(this.farmerId, firstname, secondname, nic, address)
      .subscribe(() => {
        this.displayModal = true;
      });

    this.farmer.firstname = '';
    this.farmer.secondname = '';
    this.farmer.nic = '';
    this.farmer.address = '';
  }
}
