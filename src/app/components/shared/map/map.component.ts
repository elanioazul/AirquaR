import { Component, OnInit, ViewChild } from '@angular/core';
import { MapboxGLService } from '../../../services/mapbox-gl.service';
import * as mapboxgl from 'mapbox-gl';

import { StationsDataService } from 'src/app/services/stations-data.service';

//import { GeoJSON, FeatureCollection } from '../../../classes/map';

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
  markersAir: any;//is holding data coming from stationsData service
  markersMeteo: any;//is holding data coming from stationsData service

  public geojsonAir = {
    type: "FeatureCollection",
    features: [{
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: new mapboxgl.LngLat (-3.712257, 40.423882)
        },
        "properties": {
            "cartodb_id": 1,
            "codigo": 28079004,
            "codigo_corto": 4,
            "estacion": "Pza. de España",
            "direccion": "Plaza de España",
            "longitud_etrs89": "3°42'43.91\"O",
            "latitud_etrs89": "40°25'25.98\"N",
            "altitud": 637,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "",
            "pm2_5": "",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 273600,
            "via_clase": "PLAZA",
            "via_par": "DE",
            "via_nombre": "ESPAÑA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "439579,3291",
            "coordenada_y_etrs89": "4475049,263",
            "longitud": -3.7122567,
            "latitud": 40.4238823
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": new mapboxgl.LngLat(-3.682316, 40.421553)
        },
        "properties": {
            "cartodb_id": 2,
            "codigo": 28079008,
            "codigo_corto": 8,
            "estacion": "Escuelas Aguirre",
            "direccion": "Entre C/ Alcalá y C/ O’ Donell ",
            "longitud_etrs89": "3°40'56.22\"O",
            "latitud_etrs89": "40°25'17.63\"N",
            "altitud": 672,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "X",
            "btx": "X",
            "hc": "X",
            "cod_via": 18900,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "ALCALA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "442117,2366",
            "coordenada_y_etrs89": "4474770,696",
            "longitud": -3.6823158,
            "latitud": 40.4215533
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": new mapboxgl.LngLat(-3.677349, 40.451473)
        },
        "properties": {
            "cartodb_id": 3,
            "codigo": 28079011,
            "codigo_corto": 11,
            "estacion": "Avda. Ramón y Cajal",
            "direccion": "Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara",
            "longitud_etrs89": "3°40'38.50\"O",
            "latitud_etrs89": "40°27'5.29\"N",
            "altitud": 708,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "",
            "btx": "X",
            "hc": "",
            "cod_via": 610450,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "PRINCIPE DE VERGARA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "442564,0457",
            "coordenada_y_etrs89": "4478088,595",
            "longitud": -3.6773491,
            "latitud": 40.4514734
        }
    }]
  }


  constructor(private mapService: MapboxGLService, private stationsData: StationsDataService) {}




  ngOnInit() {
    this.initializeMap();


  }

  initializeMap() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }

    this.buildMap()

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
    // this.map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions:
    //       {enableHighAccuracy: true},
    //       trackUserLocation: true
    //   })
    // );



  }



  // Funcion manejadora del evento que cambia el estilo en función del id del input
  switchLayer(layerId) {
    this.map.setStyle('mapbox://styles/mapbox/' + layerId);
  }






}
