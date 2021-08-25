import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combochart',
  templateUrl: './combochart.component.html',
  styleUrls: ['./combochart.component.css'],
})
export class CombochartComponent implements OnInit {
  data: any;

  chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#d50000',
          borderWidth: 2,
          fill: false,
          data: [50, 25, 12, 48, 56, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#ff6f00',
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#01579b',
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
