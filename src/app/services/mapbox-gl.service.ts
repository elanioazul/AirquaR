import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { StationsDataService } from './stations-data.service';
import { map, tap } from 'rxjs/operators';
import { Subscription, Observable, from, empty } from 'rxjs';
import { PopupSmComponent } from '../components/madrid/popup-sm/popup-sm.component'

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



  constructor(private stations: StationsDataService) {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
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
    this.map.on('load', () => {
      this.stations.getAirStations().subscribe(data => {
        this.addSource(this.map, 'airstations', data);
        this.addAirstationsLayer(this.map);
        this.addClickOnAirstation(this.map);
      })
      this.stations.getMeteoStations().subscribe(data => {
        this.addSource(this.map, 'meteostations', data);
        this.addMeteostationsLayer(this.map);
      })
    })
    return this.map;
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

  addClickOnAirstation(map) {
    map.on('click', 'airstationsLayer', (event) => {
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(`<span class="tag">${event.features[0].properties.estacion}</span>`)
        .addTo(map)
    })
  }

  addClickOnMeteostation(map) {
    map.on('click', 'meteostationsLayer', (event) => {
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(`<span class="tag">${event.features[0].properties.estacion}</span>`)
        .addTo(map)
    })
  }

  toogleLayer(layerName, visible) {
    const mode = visible ? 'visible' : 'none';
    this.map.setLayoutProperty(layerName, 'visibility', mode);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
