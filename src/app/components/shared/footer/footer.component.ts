import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';
import { MapboxGLService } from 'src/app/services/mapbox-gl.service';
import { element } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // flag = true;
  // displayA = 'inherit';
  // displayB = 'none';

  constructor(private mapService: MapboxGLService) {

  }



  ngOnInit(): void {
  }

  navigator ($event) {
    this.mapService.navigation();
  }

  geocoder($event) {
    this.mapService.geocoding();
  }

  displaynone($event) {
    //document.querySelector('mapboxgl-ctrl-top-left')[0].style.display = 'none';
  }










}
