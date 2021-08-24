import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart02',
  templateUrl: './chart02.component.html',
  styleUrls: ['./chart02.component.css'],
})
export class Chart02Component implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'D'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#ff3d00', '#1565c0', '#ffff00'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
}
