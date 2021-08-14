import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chart01',
  templateUrl: './chart01.component.html',
  styleUrls: ['./chart01.component.css']
})
export class Chart01Component implements OnInit {

  data: any;

  chartOptions: any;


  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['A','B','C'],
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
