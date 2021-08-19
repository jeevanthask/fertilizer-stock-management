import { Component, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officerslist',
  templateUrl: './officerslist.component.html',
  styleUrls: ['./officerslist.component.css'],
})
export class OfficerslistComponent implements OnInit {
  officers: any = [];

  constructor(private officerService: OfficerService) {}

  ngOnInit() {
    this.fetchFarmers();
  }

  fetchFarmers() {
    this.officerService.getOfficers().subscribe((data) => {
      this.officers = data;
      console.log(this.officers);
    });
  }
}
