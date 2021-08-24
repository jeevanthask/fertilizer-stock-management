import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart01',
  templateUrl: './chart01.component.html',
  styleUrls: ['./chart01.component.css'],
})
export class Chart01Component implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'K'],
      datasets: [
        {
          data: [300, 50, 100, 45, 68, 90, 78, 56],
          backgroundColor: [
            '#9c27b0',
            '#ff9800',
            '#dd2c00',
            '#ffd600',
            '#76ff03',
            '#039be5',
            '#f50057',
            '#455a64',
          ],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
}
