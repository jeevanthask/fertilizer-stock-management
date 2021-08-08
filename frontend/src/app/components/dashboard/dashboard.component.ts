import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  panelOpenState: any;
  addFarmersPanel: any;
  showFarmersList: any;

  constructor() {}

  ngOnInit(): void {}

  addfarmers() {
    this.addFarmersPanel = true;
    this.showFarmersList = false;
    console.log(this.addFarmersPanel);
    console.log(this.showFarmersList);
  }

  showFarmers() {
    this.showFarmersList = true;
    this.addFarmersPanel = false;
    console.log(this.showFarmersList);
    console.log(this.addFarmersPanel);
  }
}
