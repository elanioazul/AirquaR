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

  loadDataforChart() {
    let dateControl = (<HTMLInputElement>document.getElementById("date")).value;
    let parseadita = Date.parse(dateControl)
    const newDate = new Date(parseadita)
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    const customizedDataRequestForChart = Object.assign({}, this.mapboxservice.airStationClicked)
    debugger
    if (this.mapboxservice.meteoStationClicked === undefined) {
      debugger
      this.dataAir.getAirdataById(this.mapboxservice.airStationClicked).subscribe(
        (res) => {
          debugger
          console.log('res para el chart' + res);
          debugger
        }, (error) => {
          console.log('error para el chart' + error)
        }
      )
    } else {
      this.dataMeteo.getMeteodataById(this.mapboxservice.meteoStationClicked).subscribe(
        (res) => {
          debugger
          console.log(res);
          debugger
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
