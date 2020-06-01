import { Component, OnInit } from '@angular/core';
import { StationsDataService } from '../../../services/stations-data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public model: any; // Model Property

  constructor(private stations: StationsDataService) { }

  ngOnInit(): void {
  }

}
