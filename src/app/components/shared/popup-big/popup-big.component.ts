import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StationsDataService } from '../../../services/stations-data.service';
import { MapboxGLService } from '../../../services/mapbox-gl.service';
import { AirDataService } from '../../../services/data-air.service';
import { MeteoDataService } from '../../../services/data-meteo.service';
import { ParametersService } from '../../../services/parameters.service';

@Component({
  selector: 'app-popup-big',
  templateUrl: './popup-big.component.html',
  styleUrls: ['./popup-big.component.scss']
})
export class PopupBigComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    @Inject (MAT_DIALOG_DATA) public data: any,
    public stationsService: StationsDataService,
    public dialogRef: MatDialogRef<PopupBigComponent>,
    private mapboxservice: MapboxGLService,
    private dataAir: AirDataService,
    private dataMeteo: MeteoDataService,
    private parametersService : ParametersService
  ) { }


  public propertiesStation: any;

  public dataStream: any;
  public dataStreamTwo: any;

  public preselected: any;

  public secondaryStationList: [];

  public customizedDataRequestForChart: any;


  ngOnInit(): void {
    this.propertiesStation = this.mapboxservice.stationClickedProperties;
    if (this.mapboxservice.stationClicked === 'airstations') {
      this.data = this.parametersService.airParameters;
      this.preselected = this.parametersService.airParamSelected;
      this.stationsService.getAirStations().subscribe(
        (res) => {
          this.secondaryStationList = res.features;
      }, (error) => {
          console.log(error)
      })
    }
    if (this.mapboxservice.stationClicked === 'meteostations') {
      this.data = this.parametersService.meteoParameters;
      this.preselected = this.parametersService.meteoParamSelected;
      this.stationsService.getMeteoStations().subscribe(
        (res) => {
          this.secondaryStationList = res.features;
        }, (error) => {
          console.log(error)
      })
    }



  }

  get airStations() {
    return this.stationsService.getAirStations;
  }
  get meteoStations() {
    return this.stationsService.getMeteoStations;
  }

  loadDataforChartById(parameterForm) {
    debugger
    let dateControl = (<HTMLInputElement>document.getElementById("date")).value;
    let parseadita = Date.parse(dateControl)
    const newDate = new Date(parseadita)
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getUTCDate();

    if (this.mapboxservice.stationClicked === 'airstations') {
      this.customizedDataRequestForChart = {
        magnitud: parameterForm.value.parameter,
        ano: year,
        mes: month,
        dia: day
      };
      this.dataAir.getAirdataById(this.mapboxservice.stationClickedProperties.codigo_cor, this.customizedDataRequestForChart).subscribe(
        (res) => {
          this.dataStream = res;
        }, (error) => {
          console.log('error para el chart' + error)
        }
      )
    } else {
      this.customizedDataRequestForChart = {
        magnitud: parameterForm.value.parameter,
        ano: year,
        mes: month,
        dia: day
      };
      this.dataMeteo.getMeteodataById(this.mapboxservice.stationClickedProperties.codigo_cor, this.customizedDataRequestForChart).subscribe(
        (res) => {
          this.dataStream = res;
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

  loadSecondStationforChart(secondStationForm) {
    if (this.mapboxservice.stationClicked === 'airstations') {
      debugger
      this.dataAir.getAirdataById(secondStationForm.value.station, this.customizedDataRequestForChart).subscribe(
        (res) => {
          this.dataStreamTwo = res;
        }, (error) => {
          console.log(error)
        }
      )
    } else {
      this.dataMeteo.getMeteodataById(secondStationForm.value.station, this.customizedDataRequestForChart).subscribe(
        (res) => {
          console.log(res);
          this.dataStreamTwo = res;
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

  close() {
    this.dialogRef.close();
  }



}
