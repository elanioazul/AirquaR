import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
//import { MapboxDirections } from '@mapbox/mapbox-gl-directions';
import  MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import { StationsDataService } from './stations-data.service';
import { map, tap } from 'rxjs/operators';
import { Subscription, Subject, Observable, from, empty } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../components/shared/popup/popup.component';

@Injectable({
  providedIn: 'root'
})
export class MapboxGLService {


  //default settings to build up the map
  map: mapboxgl.Map;
  public mapbox = (mapboxgl as typeof mapboxgl);
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat = 40.415185;
  public lng = -3.694114;
  public zoom = 14;
  public pitch = 45;
  public bearing = -10.6;
  public scale = new mapboxgl.ScaleControl({
    maxWidth: 60,
    unit: 'meters'
  });

  private subscriptions: Subscription[] = [];

  public dialogRef;

  public stationClicked: any;
  public airStationClicked: any;
  public meteoStationClicked: any;

  constructor(
    public dialog: MatDialog,
    private stations: StationsDataService
    ) {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
    (MapboxDirections).accessToken = environment.mapBoxToken;
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
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.scale);

    return this.map;
  }

  addGeodata() {
    this.map.once('data', () => {
      this.stations.getAirStations().subscribe(data => {
        this.addSource(this.map, 'airstations', data);
        this.addAirstationsLayer(this.map);
        this.addClick(this.map);
      })
      this.stations.getMeteoStations().subscribe(data => {
        this.addSource(this.map, 'meteostations', data);
        this.addMeteostationsLayer(this.map);
      })
    })
  }

  addSource(map, sourceName, data) {
    map.addSource(sourceName, {
      type: 'geojson',
      data
    })
  }

  addAirstationsLayer(map) {
    map.addLayer({
      id: 'airstationsLayer',
      type: 'circle',
      source: 'airstations',
      paint: {
        'circle-radius': {
          'base': 1.75,
          'stops': [
            [12, 10],
            [22, 180]
          ]
        },
        'circle-color': 'Black'
      }
    });
  }

  addMeteostationsLayer(map) {
    map.addLayer({
      id: 'meteostationsLayer',
      type: 'circle',
      source: 'meteostations',
      paint: {
        'circle-radius': {
          'base': 1.75,
          'stops': [
            [12, 10],
            [22, 180]
          ]
        },
        'circle-color': 'Green'
      }
    });
  }

  addClick(map) {
    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point, { layers: ['airstationsLayer', 'meteostationsLayer']});
      if (features[0].layer.source === 'airstations') {
        this.airStationClicked = features[0].properties.codigo_cor;
      } if (features[0].layer.source === 'meteostations') {
        this.meteoStationClicked = features[0].properties.codigo_cor;
      }
      debugger
      let dialogRef = this.dialog.open(PopupComponent, {
        data: features[0].properties
      })
    })
  }

  toogleLayer(layerName, visible) {
    const mode = visible ? 'visible' : 'none';
    this.map.setLayoutProperty(layerName, 'visibility', mode);
  }

  navigation() {
    this.map.addControl(new MapboxDirections({accessToken:'pk.eyJ1IjoiaHVndWV0ZSIsImEiOiJjazZsMnNrNTMwOXNmM29wYTdpZ2FteWtzIn0.4xxdAN7esyBwMqI8CSq7ww'}), 'top-left');

  }

  geocoding() {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
