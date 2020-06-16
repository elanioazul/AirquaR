import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { MapboxGLService } from '../../../services/mapbox-gl.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input('data') dataForChart: any;
  @Input('dataSecondStation') dataForChartSecond: any;


  @Input() stationTwo: any;

  public xlabels: any[];
  public yvalues: any[];

  //la x como son las mismas horas utilizdo la xlabels variable
  public yvaluesSecondStation: any[];

  constructor(
    private mapboxService: MapboxGLService
  ) { }

  ngOnChanges(): void {
    if (Array.isArray(this.dataForChart) && this.dataForChart.length > 0) {
      this.xlabels = Object.keys(this.dataForChart[0]);
      this.yvalues = Object.values(this.dataForChart[0]);
    }
    if (Array.isArray(this.dataForChartSecond) && this.dataForChartSecond.length > 0) {
      this.yvaluesSecondStation = Object.values(this.dataForChartSecond[0])
    }

    var mySuperChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.xlabels,
        datasets: [{
          label: this.mapboxService.stationClickedProperties.estacion,
          data: this.yvalues,
          fill: false,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1
        }, {
          label: this.stationTwo,
          data:  this.yvaluesSecondStation,
          fill: false,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Parameter variation during the day',
          position: 'top'
        },
        legend: {
          display: true,
          align: 'start',
          position: 'top',
          labels: {
            boxWidth: 20,
            fontSize: 10,
          }

        },
      }
    })

  }


}
