import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { StationsDataService } from './stations-data.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  layers = {
    air: {
      visible: true,
      markers: []
    },
    meteo: {
      visible: true,
      markers: []
    },
  };

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
    this.initMarkers(this.map);

    /*map.on('load', function(){
      map.addSource('air-source', {
        type: 'geojson',
        data: 'http://localhost:5000/api/v1/airStations'
      });
      map.addLayer({
        'id': 'drone',
        'type': 'symbol',
        'source': 'air-source',
        'layout': {
          'icon-image': 'rocket-15'
        }
      });
    });*/
  }


  initSources() {

  }

  initLayers() {

  }


  initMarkers(mapa) {
    this.getAirStations().pipe(
      map((res: any) => {
        debugger
        this.layers.air.markers = res;
        return this.layers.air.markers;
      }),
      tap((markers: any[]) => {
        debugger
        markers.forEach(marker => marker.addTo(mapa))
      })
    ).subscribe();
    this.getMeteoStations().pipe(
      map((res: any) => {
        debugger
        this.layers.meteo.markers = res;
        return this.layers.meteo.markers;
      }),
      tap((markers: any[]) => {
        debugger
        markers.forEach(marker => marker.addTo(mapa))
      })
    ).subscribe();
  }

  getAirStations(): Observable<any[]> {
    return this.stations.getAirStations().pipe(
      map(res => {
        debugger
        return res.geojson.features.map(this.parseMarker);
      })
    );
  }

  getMeteoStations() {
    return this.stations.getMeteoStations().pipe(
      map(res => {
        debugger
        return res.geojson.features.map(this.parseMarker);
      })
    );
  }


  parseMarker(marker) {
    const container = document.createElement('div');
    container.classList.add('markerAir');
    return new mapboxgl.Marker(container)
      .setLngLat(marker.geometry.coordinates);
  }

  addMarkersAir(markers) {
    markers.forEach(marker => {
      const container = document.createElement('div');
      container.classList.add('markerAir');
      new mapboxgl.Marker(container)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map)
    })
  }

  // addMarkersMeteo(markers) {
  //   markers.forEach(marker => {
  //     const container = document.createElement('div');
  //     container.classList.add('markerMeteo');
  //     new mapboxgl.Marker(container)
  //          .setLngLat(marker.geometry.coordinates)
  //          .addTo(this.map)
  //   })
  // }




}
