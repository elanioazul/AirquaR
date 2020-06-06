import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationsDataService } from '../../../services/stations-data.service';
import { MapboxGLService } from '../../../services/mapbox-gl.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public stationsService: StationsDataService,
    private mapboxservice: MapboxGLService,
    public dialogRef: MatDialogRef<PopupComponent>
  ) { }

  ngOnInit(): void {

    this.data = {
      comun: [],
      air: [],
      meteo: []
    }

    if (this.mapboxservice.meteoStationClicked === undefined) {
      this.stationsService.getAirStationById(this.mapboxservice.airStationClicked).subscribe((res) => {
        let estacion = res[0].estacion;
        let dir = res[0].direccion;
        let alt = res[0].altitud;
        let long = res[0].lon_geogra;
        let lat = res[0].lat_geogra;
        this.data.comun.push(estacion, dir, alt, long, lat);
        let no2 = res[0].no2;
        let so2 = res[0].so2;
        let co = res[0].co;
        let pm10 = res[0].pm10;
        let pm25 = res[0].pm2_5;
        let o3 = res[0].o3;
        let btx = res[0].btx;
        let hc = res[0].hc;
        debugger
        this.data.air.push(no2, so2, co, pm10, pm25, o3, btx, hc);
        debugger
        console.log('soy una res con info de Air :' + res[0])
      }, (error) => {
        console.log(error)
      })
    } else {
      debugger
      this.stationsService.getMeteoStationById(this.mapboxservice.meteoStationClicked).subscribe((res) => {
        debugger
        let estacion = res[0].estacion;
        let dir = res[0].direccion;
        let alt = res[0].altitud;
        let long = res[0].lon_geogra;
        let lat = res[0].lat_geogra;
        this.data.comun.push(estacion, dir, alt, long, lat);
        let viento = res[0].v_viento;
        let dirviento = res[0].dir_viento;
        let temp = res[0].temperatura;
        let hum = res[0].hum_rel;
        let presion = res[0].presion;
        let radiac = res[0].rad_solar;
        let precipit = res[0].precipitacion;
        debugger
        this.data.meteo.push(viento, dirviento, temp, hum, presion, radiac, precipit);
        debugger
        console.log('soy una res con info de Meteo :' + res[0])
      })
    }
  }

  close() {
    this.dialogRef.close();
  }

}
