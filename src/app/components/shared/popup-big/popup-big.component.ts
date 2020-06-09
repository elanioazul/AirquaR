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

  //parametersForm: FormGroup;
  //secondStationForm: FormGroup;

  public dataStream: any;

  public stationName: any;

  public preselected: any;

  public secondaryStationList: [];

  ngOnInit(): void {
    if (this.mapboxservice.meteoStationClicked === undefined) {
      this.stationsService.getAirStationById(this.mapboxservice.airStationClicked).subscribe((res) => {
        this.stationName = res[0].estacion;
      })
      this.data = this.parametersService.airParameters;
      this.preselected = this.parametersService.airParamSelected;
      this.stationsService.getAirStations().subscribe(
        (res) => {
          this.secondaryStationList = res.features;
      }, (error) => {
          console.log(error)
      })
    } else {
      this.stationsService.getMeteoStationById(this.mapboxservice.meteoStationClicked).subscribe((res) => {
        this.stationName = res[0].estacion;
      })
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
    console.log(parameterForm)
    let dateControl = (<HTMLInputElement>document.getElementById("date")).value;
    let parseadita = Date.parse(dateControl)
    const newDate = new Date(parseadita)
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getUTCDate();

    if (this.mapboxservice.meteoStationClicked === undefined) {
      const customizedDataRequestForChart = {
        magnitud: parameterForm.value.parameter,
        ano: year,
        mes: month,
        dia: day
      };
      this.dataAir.getAirdataById(this.mapboxservice.airStationClicked, customizedDataRequestForChart).subscribe(
        (res) => {
          console.log('res para el chart' + res);
          this.dataStream = res;
        }, (error) => {
          console.log('error para el chart' + error)
        }
      )
    } else {
      const customizedDataRequestForChart = {
        magnitud: parameterForm.value.parameter,
        ano: year,
        mes: month,
        dia: day
      };
      this.dataMeteo.getMeteodataById(this.mapboxservice.meteoStationClicked, customizedDataRequestForChart).subscribe(
        (res) => {
          console.log(res);
          this.dataStream = res;
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

  loadSecondStationforChart() {

  }

  close() {
    this.dialogRef.close();
  }



}
