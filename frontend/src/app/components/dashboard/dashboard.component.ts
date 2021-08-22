import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  isAddFarmerClicked: any;
  isFarmersListClicked: any;
  isPanelClicked: any;

  constructor() {}

  clickShowGraphs() {
    this.isPanelClicked = 'showGraphs';
  }

  clickAddFarmer() {
    this.isPanelClicked = 'addFarmer';
  }

  clickFarmersList() {
    this.isPanelClicked = 'farmersList';
  }

  clickAddOfficer() {
    this.isPanelClicked = 'addOfficer';
  }

  clickOfficersList() {
    this.isPanelClicked = 'officersList';
  }

  clickAddFertilizer() {
    this.isPanelClicked = 'addFertilizer';
  }

  clickFertilizersList() {
    this.isPanelClicked = 'fertilizersList';
  }

  clickAddCompany() {
    this.isPanelClicked = 'addCompany';
  }

  clickCompaniesList() {
    this.isPanelClicked = 'companiesList';
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Show Graphs',
            icon: 'pi pi-cog',
            command: () => {
              this.clickShowGraphs();
            },
          },
        ],
      },
      {
        label: 'Farmers',
        // icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Add Farmer',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.clickAddFarmer();
            },
          },
          {
            label: 'Farmers List',
            icon: 'pi pi-th-large',
            command: () => {
              this.clickFarmersList();
            },
          },
        ],
      },
      {
        label: 'Officers',
        //  icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Add Officer',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.clickAddOfficer();
            },
          },
          {
            label: 'Officers List',
            icon: 'pi pi-th-large',
            command: () => {
              this.clickOfficersList();
            },
          },
        ],
      },
      {
        label: 'Fertilizers',
        //  icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Add Fertilizer',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.clickAddFertilizer();
            },
          },
          {
            label: 'Fertilizer List',
            icon: 'pi pi-th-large',
            command: () => {
              this.clickFertilizersList();
            },
          },
        ],
      },
      {
        label: 'Companies',
        //  icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Add Company',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.clickAddCompany();
            },
          },
          {
            label: 'Company List',
            icon: 'pi pi-th-large',
            command: () => {
              this.clickCompaniesList();
            },
          },
        ],
      },
    ];
  }
}
