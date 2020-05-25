import { Component, OnInit,  Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { StationsDataService } from '../../../services/stations-data.service';

@Component({
  selector: 'app-popup-sm',
  templateUrl: './popup-sm.component.html',
  styleUrls: ['./popup-sm.component.scss']
})
export class PopupSmComponent implements OnInit {

  @Input() popupVisible: boolean = false;

  @Input() popupId: string;

  @Output() close = new EventEmitter();

  public stationDetails: Object;
  public stationCoordinates: Object;


  constructor(private popup: ElementRef, private stations: StationsDataService) { }

  ngOnInit(): void {

  }



  onClose(): void {
    this.close.emit(this.popup);
  }

}
