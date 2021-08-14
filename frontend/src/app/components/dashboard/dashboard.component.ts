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

  clickItem1() {
    alert('clicked item 1')
  }

  clickItem2() {
    alert('clicked item 2')
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Delete' ,
            icon: 'pi pi-fw pi-trash',
            command: () => { this.clickItem1(); }
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
            command: () => { this.clickItem2(); }
          }
        ]
      }
    ]
  }


}
