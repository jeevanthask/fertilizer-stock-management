import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FarmerService} from 'src/app/services/farmer.service';

@Component({
  selector: 'app-updatefarmer',
  templateUrl: './updatefarmer.component.html',
  styleUrls: ['./updatefarmer.component.css'],
})
export class UpdatefarmerComponent implements OnInit {

  @Input() farmerId: any
  farmer: any = {}

  updateForm: FormGroup;

  constructor(private farmerService: FarmerService, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      secondname: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.farmerService.getFarmerById(this.farmerId).subscribe(res => {
      this.farmer = res
    })
  }

  updateFarmer(firstname: any, secondname: any, address: any) {
    this.farmerService
      .updateFarmer(this.farmerId,firstname, secondname , address)
      .subscribe(() => {
        alert('The farmer updated successfully!!');
      });

    this.farmer.firstname = ''
    this.farmer.secondname = ''
    this.farmer.address = ''
  }


}
