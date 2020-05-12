import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';





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

  constructor() {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
  }


  buildMap() {
    debugger
    this.map = new mapboxgl.Map({
      container: 'map', //el tag del html #map
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      pitch: this.pitch,
      bearing: this.bearing
    });
    debugger
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.scale);
  }

  addMarker(markers) {
    debugger
    markers.forEach(marker => {
      const container = document.createElement('div');
      debugger
      container.classList.add('markerAir');
      debugger
      const coords = new mapboxgl.LngLat(marker.geometry.coordinates[0], marker.geometry.coordinates[1]);


      new mapboxgl.Marker(container).setLngLat(coords).addTo(this.map);
      // new mapboxgl.Marker(container)
      //     .setLngLat(marker.geometry.coordinates)
      //     .addTo(this.map)
    })
  }




}
