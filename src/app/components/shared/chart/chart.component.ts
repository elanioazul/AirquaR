import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input('data') dataForChart: any;

  public xlabels: any[];
  public yvalues: any[];

  constructor() { }

  ngOnChanges(): void {
    if (Array.isArray(this.dataForChart) && this.dataForChart.length > 0) {
      this.xlabels = Object.keys(this.dataForChart[0]);
      this.yvalues = Object.values(this.dataForChart[0]);
    }

    var mySuperChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.xlabels,
        datasets: [{
          label: 'Parameter variation during the day',
          data: this.yvalues,
          fill: false,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1
        }]
      },
      options: {
      }
    })
  }


}