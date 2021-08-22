import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';

@Component({
  selector: 'app-farmerslist',
  templateUrl: './farmerslist.component.html',
  styleUrls: ['./farmerslist.component.css'],
})
export class FarmerslistComponent implements OnInit {
  farmers: any = [];
  isUpdateFarmerClicked: any;

  constructor(private farmerService: FarmerService) {}

  ngOnInit() {
    this.fetchFarmers();
  }

  fetchFarmers() {
    this.farmerService.getFarmers().subscribe((data) => {
      this.farmers = data;
      console.log(this.farmers);
    });
  }

  deleteFarmer(id: any) {
    this.farmerService.deleteFarmer(id).subscribe(() => {
      this.fetchFarmers();
    });
  }

  clickUpdateFarmer(id: any) {
    console.log(id);
    this.isUpdateFarmerClicked = 'updateFarmer';
    alert(id);
  }

  handleBack() {
    alert('cbducb');
  }
}
