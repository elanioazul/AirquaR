import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationsDataService } from '../../../services/stations-data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: StationsDataService,
    public dialogRef: MatDialogRef<PopupComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
