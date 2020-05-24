import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { StationsDataService } from './stations-data.service';
import { map, tap } from 'rxjs/operators';
import { Subscription, Observable, from, empty } from 'rxjs';

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

  public layers = {
    air: {
      visible: true,
      markers: [],
      linker: ''
    },
    meteo: {
      visible: true,
      markers: [],
      linker: ''
    },
  };

  public toggleableLayersIds = ['airmarkers', 'meteomarkers'];

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
    this.map.on('load', function() {
      this.map.addSource('air-markers', {
        type: 'geojson',
        data: this.stations.getAirStations
      })
      this.map.addSource('meteo-markers', {
        type: 'geojson',
        data: this.stations.getMeteoStation
      })
    })
  }

  initLayers() {
    this.map.on('load', function() {
      this.map.addLayer({
        id: 'air-markers',
        source: 'air-markers',
        type: 'symbol',
        layout: {
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf'
        }
      })
      this.map.addLayer({
        id: 'meteo-markers',
        source: 'meteo-markers',
        type: 'symbol',
        layout: {
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#bf6600'
        }
      })
    })
  }


  initMarkers(mapa) {
    this.getAirStations().pipe(
      map((res: any) => {
        this.layers.air.markers = res;
        return this.layers.air.markers;
      }),
      tap((markers: any[]) => {
        markers.forEach(marker => marker.addTo(mapa))
      })
    ).subscribe();
    this.getMeteoStations().pipe(
      map((res: any) => {
        this.layers.meteo.markers = res;
        return this.layers.meteo.markers;
      }),
      tap((markers: any[]) => {
        markers.forEach(marker => marker.addTo(mapa))
      })
    ).subscribe();
  }

  getAirStations(): Observable<any[]> {
    return this.stations.getAirStations().pipe(
      map(res => {
        return res.geojson.features.map(this.parseMarkerAir);
      })
    );
  }

  getMeteoStations() {
    return this.stations.getMeteoStations().pipe(
      map(res => {
        return res[0].geojson.features.map(this.parseMarkerMeteo);
      })
    );
  }


  parseMarkerAir(marker) {
    const container = document.createElement('div');
    container.classList.add('markerAir');
    return new mapboxgl.Marker(container)
      .setLngLat(marker.geometry.coordinates);
  }

  parseMarkerMeteo(marker) {
    const container = document.createElement('div');
    container.classList.add('markerMeteo');
    return new mapboxgl.Marker(container)
      .setLngLat(marker.geometry.coordinates);
  }

  // addMarkersAir(markers) {
  //   markers.forEach(marker => {
  //     const container = document.createElement('div');
  //     container.classList.add('markerAir');
  //     new mapboxgl.Marker(container)
  //       .setLngLat(marker.geometry.coordinates)
  //       .addTo(this.map)
  //   })
  // }

  // addMarkersMeteo(markers) {
  //   markers.forEach(marker => {
  //     const container = document.createElement('div');
  //     container.classList.add('markerMeteo');
  //     new mapboxgl.Marker(container)
  //          .setLngLat(marker.geometry.coordinates)
  //          .addTo(this.map)
  //   })
  // }

  toggleLayers() {
    for (var i = 0; i < this.toggleableLayersIds.length; i++) {
      let id = this.toggleableLayersIds[i];

      let link = document.createElement('a');
      link.href = '#';
      link.className = 'active';
      link.textContent = id;

      let mapa = this.map;
      link.onclick = function(e) {
        var clickedLayer = link.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = mapa.getLayoutProperty(clickedLayer, 'visibility');

        if(visibility === 'visible') {
          mapa.setLayoutProperty(clickedLayer, 'visibility', 'none');
          link.className = '';
        } else {
          link.className = 'active';
          mapa.setLayoutProperty(clickedLayer, 'visibility', 'visible')
        }
      };
     //this.layers.air.linker = link
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }




}
