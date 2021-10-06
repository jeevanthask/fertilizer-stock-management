import { OfficerService } from './../../services/officer.service';
import { FarmerService } from './../../services/farmer.service';
import { FertilizerService } from './../../services/fertilizer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultdisplay',
  templateUrl: './defaultdisplay.component.html',
  styleUrls: ['./defaultdisplay.component.css'],
})
export class DefaultdisplayComponent implements OnInit {
  fertilizers: any = [];
  farmers: any = [];
  officers: any = [];

  constructor(
    private farmerService: FarmerService,
    private ferilizerService: FertilizerService,
    private officerService: OfficerService
  ) {}

  ngOnInit(): void {
    this.fetchFertilizers();
    this.fetchFarmers();
    this.fetchOfficers();
  }

  fetchFertilizers() {
    this.ferilizerService.getFertilizers().subscribe((data) => {
      this.fertilizers = data;
      console.log(this.fertilizers);
    });
  }

  fetchFarmers() {
    this.farmerService.getFarmers().subscribe((data) => {
      this.farmers = data;
      console.log(this.farmers.length);
    });
  }

  fetchOfficers() {
    this.officerService.getOfficers().subscribe((data) => {
      this.officers = data;
      console.log(this.officers);
    });
  }
}
