import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart04',
  templateUrl: './chart04.component.html',
  styleUrls: ['./chart04.component.css'],
})
export class Chart04Component implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [150, 50, 100],
          backgroundColor: ['#0277bd', '#ff1744', '#ffff00'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
}
