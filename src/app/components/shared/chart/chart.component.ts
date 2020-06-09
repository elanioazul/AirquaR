import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input('data') dataForChart: any;

  public xlabels: any;
  public yvalues: any;

  constructor() { }

  ngOnChanges(): void {
    debugger
    console.log(this.dataForChart);
    debugger
    this.dataForChart[0].keys = this.xlabels;
    this.dataForChart[0].values = this.yvalues;

    var mySuperChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.xlabels,
        datasets: [{
          label: 'Magnitude variation along the day',
          data: this.yvalues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
      }
    })
  }


}
