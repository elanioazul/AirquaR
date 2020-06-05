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
    if (this.mapboxservice.meteoStationClicked === undefined) {
      debugger
      this.stationsService.getAirStationById(this.mapboxservice.airStationClicked).subscribe((res) => {
        console.log('soy una res con info de Air :' + res)
      }, (error) => {
        console.log(error)
      })
    } else {
      debugger
      this.stationsService.getMeteoStationById(this.mapboxservice.meteoStationClicked).subscribe((res) => {
        debugger
        this.data = res;
        console.log('soy una res con info de Meteo :' + res)
      })
    }
  }

  loadData() {

  }

  close() {
    this.dialogRef.close();
  }

}
