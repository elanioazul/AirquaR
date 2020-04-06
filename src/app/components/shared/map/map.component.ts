import { Component, OnInit, ViewChild } from '@angular/core';
import { MapboxGLService } from '../../../services/mapbox-gl.service';
import * as mapboxgl from 'mapbox-gl';
import { StationsDataService } from 'src/app/services/stations-data.service';

//import { GeoJSON } from '../../../classes/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  //default settings to build up the map
  public mapbox = (mapboxgl as typeof mapboxgl);
  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat = 40.415185;
  public lng = -3.694114;
  public zoom = 14;
  public pitch = 45;
  public bearing = -10.6;

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

  //add a scale
  public scale = new mapboxgl.ScaleControl({
    maxWidth: 60,
    unit: 'meters'
  });

  //data
  source: any; //live connection with mapbox
  markers: any; //will supply the data that update that source


  constructor(private mapService: MapboxGLService, private stationsData: StationsDataService) {}




  ngOnInit() {

    this.buildMap();
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.scale);

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map', //el tag del html #map
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      pitch: this.pitch,
      bearing: this.bearing
    });

  }

  // Funcion manejadora del evento que cambia el estilo en función del id del input
  switchLayer(layerId) {
    this.map.setStyle('mapbox://styles/mapbox/' + layerId);
  }




}
