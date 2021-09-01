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
  isDefaultPanelClicked: boolean = true;

  constructor() {}

  clickShowHome() {
    this.isDefaultPanelClicked = true;
    this.isPanelClicked = '';
  }

  clickShowGraphs() {
    this.isPanelClicked = 'showGraphs';
    this.isDefaultPanelClicked = false;
  }

  clickAddFarmer() {
    this.isPanelClicked = 'addFarmer';
    this.isDefaultPanelClicked = false;
  }

  clickFarmersList() {
    this.isPanelClicked = 'farmersList';
    this.isDefaultPanelClicked = false;
  }

  clickAddOfficer() {
    this.isPanelClicked = 'addOfficer';
    this.isDefaultPanelClicked = false;
  }

  clickOfficersList() {
    this.isPanelClicked = 'officersList';
    this.isDefaultPanelClicked = false;
  }

  clickAddFertilizer() {
    this.isPanelClicked = 'addFertilizer';
    this.isDefaultPanelClicked = false;
  }

  clickFertilizersList() {
    this.isPanelClicked = 'fertilizersList';
    this.isDefaultPanelClicked = false;
  }

  clickAddCompany() {
    this.isPanelClicked = 'addCompany';
    this.isDefaultPanelClicked = false;
  }

  clickCompaniesList() {
    this.isPanelClicked = 'companiesList';
    this.isDefaultPanelClicked = false;
  }

  clickBillIssue() {
    this.isPanelClicked = 'issueBill';
    this.isDefaultPanelClicked = false;
  }

  clickBillIssueList() {
    this.isPanelClicked = 'issueBillList';
    this.isDefaultPanelClicked = false;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
              this.clickShowHome();
            },
          },
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
            label: 'Add New Fertilizer',
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
      {
        label: 'Issue Fertilizer',
        //  icon: 'pi pi-plus-circle',
        items: [
          {
            label: 'Issue Bill',
            icon: 'pi pi-plus-circle',
            command: () => {
              this.clickBillIssue();
            },
          },
          {
            label: 'Issue List',
            icon: 'pi pi-th-large',
            command: () => {
              this.clickBillIssueList();
            },
          },
        ],
      },
    ];
  }
}
