import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

import { StationsDataService } from 'src/app/services/stations-data.service';



@Injectable({
  providedIn: 'root'
})
export class MapboxGLService {



  constructor() {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
  }


  //metodos air/meteo



  //métodos collector

  // getMarkers(): FirebaseListObservable<any> {
  //   return this.db.list('/markers')
  // }

  // createMarker(data: GeoJSON) {
  //   return this.db.list('/markers')
  //                 .push(data)
  // }

  // removeMarker($key: string) {
  //   return this.db.object('/markers/' + $key).remove()
  // }

}
