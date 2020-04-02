import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleSidebarService } from '../../../services/toggle-sidebar.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // @ViewChild('mainNav') public mainNav;

  constructor(public mySuperService:ToggleSidebarService) {
    // this.mySuperService.sidebar = this.mainNav;
  }

  ngOnInit(): void {
  }

}
