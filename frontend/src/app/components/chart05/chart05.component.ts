import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart05',
  templateUrl: './chart05.component.html',
  styleUrls: ['./chart05.component.css'],
})
export class Chart05Component implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          data: [300, 50, 100, 45],
          backgroundColor: ['#76ff03', '#039be5', '#f50057', '#455a64'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };
  }
}
