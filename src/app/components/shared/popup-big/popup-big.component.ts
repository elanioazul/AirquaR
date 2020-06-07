import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
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

  selectDataUpForm = this.fb.group({
    parameter: ['', [Validators.required]],
    date: ['', [Validators.required]],
  })
  selectDataDownForm = this.fb.group({
    secondstation: ['station', [Validators.required]]
  })

  public preselected: any;

  public secondaryStationList: [];

  ngOnInit(): void {
    if (this.mapboxservice.meteoStationClicked === undefined) {
      this.data = this.parametersService.airParameters;
      this.preselected = this.parametersService.airParamSelected;
      debugger
      this.stationsService.getAirStations().subscribe(
        (res) => {
          debugger
          this.secondaryStationList = res.features;
          debugger
      }, (error) => {
          console.log(error)
      })
    } else {
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
    if (this.mapboxservice.meteoStationClicked === undefined) {
      this.dataAir.getAirdataById(this.mapboxservice.airStationClicked).subscribe(
        (res) => {
          console.log(res);
        }, (error) => {
          console.log(error)
        }
      )

    } else {
      this.stationsService.getMeteoStationById(this.mapboxservice.meteoStationClicked).subscribe(
        (res) => {
          console.log(res);
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
