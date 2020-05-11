import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MapboxGLService } from '../../../services/mapbox-gl.service';


import { StationsDataService } from 'src/app/services/stations-data.service';

import { GeoJSON, FeatureCollection } from '../../../classes/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  //Radio bottons style. This to make ngFor
  public controls = [
    {
      id: 'streets-v11',
      value: 'streets',
      checked: true
    },
    {
      id: 'light-v10',
      value: 'light',
      checked: false
    },
    {
      id: 'dark-v10',
      value: 'dark',
      checked: false
    },
    {
      id: 'satellite-v9',
      value: 'satellite',
      checked: false
    }
  ]


  //data
  public source: any; //live connection with mapbox
  public markersAir: any;//is holding data coming from stationsData service
  public markersMeteo: any;//is holding data coming from stationsData service



  constructor(private mapService: MapboxGLService, private stationsData: StationsDataService) {}




  ngOnInit() {
    debugger
    // this.stationsData.getAirStationsMokapi().subscribe( (res) => {
    //   debugger
    //   this.markersAir = res;
    //   console.log(this.markersAir)
    // }, error => {
    //   console.error(error);
    // })
    this.markersAir = this.stationsData.getairStationHardcoded().features;
    console.log(this.markersAir)
    debugger
    this.initializeMap();


  }

  initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
      debugger
       navigator.geolocation.getCurrentPosition(position => {
        this.mapService.lat = position.coords.latitude;
        this.mapService.lng = position.coords.longitude;
        debugger
        this.mapService.buildMap();
        debugger
        this.mapService.addMarker(this.markersAir);
        // this.map.flyTo({
        //   center: [this.lng, this.lat]
        // })
      });
    }

  }


  // Funcion manejadora del evento que cambia el estilo en función del id del input
  switchLayer(layerId) {
    this.mapService.map.setStyle('mapbox://styles/mapbox/' + layerId);
  }






}
