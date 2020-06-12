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


  constructor(private mapService: MapboxGLService, private stationsData: StationsDataService) { }




  ngOnInit() {
    this.mapService.buildMap();
  }

  navigator() {
    this.mapService.navigation();
  }


  // switchLayer(layerId) {
  //   this.mapService.map.setStyle('mapbox://styles/mapbox/' + layerId);
  // }







}
