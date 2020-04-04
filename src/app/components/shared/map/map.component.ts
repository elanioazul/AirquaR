import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // @ViewChild('mainNav') public mainNav;

  constructor() {
    // this.mySuperService.sidebar = this.mainNav;
  }

  ngOnInit(): void {
  }

}
