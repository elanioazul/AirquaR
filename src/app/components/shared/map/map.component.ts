import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MapboxGLService } from '../../../services/mapbox-gl.service';

import { Subscription, Observable, from, empty } from 'rxjs';

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

  private subscriptions: Subscription[] = [];

  constructor(private mapService: MapboxGLService, private stationsData: StationsDataService) { }




  ngOnInit() {
    debugger
    this.stationsData.getairStationsPostgis().subscribe((res) => {
      debugger
      this.markersAir = res[0].geojson.features;
      console.log(this.markersAir)
      this.initializeMap(this.markersAir);
    }, error => {
      console.error(error);
    })
  }

  initializeMap(markers) {
    this.mapService.buildMap();
    this.mapService.addMarkers(markers);
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.mapService.lat = position.coords.latitude;
        this.mapService.lng = position.coords.longitude;
      });
    }*/
  }


  switchLayer(layerId) {
    this.mapService.map.setStyle('mapbox://styles/mapbox/' + layerId);
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }



}
