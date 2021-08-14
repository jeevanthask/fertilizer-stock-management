import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
  }

  clickAddFarmer() {
    alert('clickAddFarmer')
  }

  clickFarmersList() {
    alert('clickFarmersList')
  }

  clickAddOfficer() {
    alert('clickAddOfficer')
  }

  clickOfficersList() {
    alert('clickOfficersList')
  }

  clickAddFertilizer() {
    alert('clickAddFertilizer')
  }

  clickFertilizersList() {
    alert('clickFertilizersList')
  }

  clickAddCompany() {
    alert('clickAddCompany')
  }

  clickCompaniesList() {
    alert('clickCompaniesList')
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Farmers',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Add Farmer',
            icon: 'pi pi-fw pi-trash',
            command: () => {
              this.clickAddFarmer();
            }
          },
          {
            label: 'Farmers List',
            icon: 'pi pi-fw pi-external-link',
            command: () => {
              this.clickFarmersList();
            }
          }
        ]
      },
      {
        label: 'Officers',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Add Officer',
            icon: 'pi pi-fw pi-trash',
            command: () => {
              this.clickAddOfficer();
            }
          },
          {
            label: 'Officers List',
            icon: 'pi pi-fw pi-external-link',
            command: () => {
              this.clickOfficersList();
            }
          }
        ]
      },
      {
        label: 'Fertilizers',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Add Fertilizer',
            icon: 'pi pi-fw pi-trash',
            command: () => {
              this.clickAddFertilizer();
            }
          },
          {
            label: 'Fertilizer List',
            icon: 'pi pi-fw pi-external-link',
            command: () => {
              this.clickFertilizersList();
            }
          }
        ]
      },
      {
        label: 'Companies',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Add Company',
            icon: 'pi pi-fw pi-trash',
            command: () => {
              this.clickAddCompany();
            }
          },
          {
            label: 'Company List',
            icon: 'pi pi-fw pi-external-link',
            command: () => {
              this.clickCompaniesList();
            }
          }
        ]
      }
    ]
  }


}
