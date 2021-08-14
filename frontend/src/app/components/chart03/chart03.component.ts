import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart03',
  templateUrl: './chart03.component.html',
  styleUrls: ['./chart03.component.css']
})
export class Chart03Component implements OnInit {

  data: any;

  chartOptions: any;

  constructor() {
  }

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };

  }

}
