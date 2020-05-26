import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-big',
  templateUrl: './popup-big.component.html',
  styleUrls: ['./popup-big.component.scss']
})
export class PopupBigComponent implements OnInit {

  public sortOfInfo: any;
  constructor() { }

  ngOnInit(): void {
    this.sortOfInfo = 'Meteo info'
  }

}
