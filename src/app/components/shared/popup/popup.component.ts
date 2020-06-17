import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationsDataService } from '../../../services/stations-data.service';
import { MapboxGLService } from '../../../services/mapbox-gl.service';
import { PopupBigComponent } from '../popup-big/popup-big.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

    public isAir = false;

  // public eresNull = function isNotNull(value) {
  //   let reg = new RegExp("null")
  //   if (value !== reg) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public stationsService: StationsDataService,
    private mapboxservice: MapboxGLService,
    public dialogRef: MatDialogRef<PopupComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (this.mapboxservice.stationClicked === 'airstations') {
      this.isAir = true
    }
    if (this.mapboxservice.stationClicked === 'meteostations') {
      this.isAir = this.isAir
    }

  }

  // deleteObjectItemByValue(Obj, val) {
  //   for (var key in Obj) {
  //       if (Obj[key] == val) {
  //           delete Obj[key];
  //           return Obj;
  //       }
  //   }
  // };

  isEmpty(value) {
    return (value == "" || value == null)
  }



  close() {
    this.dialogRef.close();
  }

  openBigPopup() {
    let dialogRef = this.dialog.open(PopupBigComponent)
  }

}
