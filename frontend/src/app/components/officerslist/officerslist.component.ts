import { Component, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officerslist',
  templateUrl: './officerslist.component.html',
  styleUrls: ['./officerslist.component.css'],
})
export class OfficerslistComponent implements OnInit {
  officers: any = [];
  isUpdateOfficerClicked: any;
  officerId: any = ''

  constructor(private officerService: OfficerService) {}

  ngOnInit() {
    this.fetchOfficers();
  }

  fetchOfficers() {
    this.officerService.getOfficers().subscribe((data) => {
      this.officers = data;
      console.log(this.officers);
    });
  }

  deleteOfficer(id: any) {
    this.officerService.deleteOfficer(id).subscribe(() => {
      this.fetchOfficers();
    });
  }

  clickUpdateOfficer(id: any) {
    console.log(id);
    this.officerId = id
    console.log('officer is',this.officerId)
    this.isUpdateOfficerClicked = 'updateFarmer';
  }



  handleBack() {
    alert('cbducb');
  }
}
