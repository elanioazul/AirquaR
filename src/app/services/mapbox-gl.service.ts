import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

//import { GeoJSON } from '../../../classes/map';

@Injectable({
  providedIn: 'root'
})
export class MapboxGLService {



  constructor() {
    // Asignamos el token desde variable de entorno con truco del any (Eku)
    (mapboxgl as any).accessToken = environment.mapBoxToken;
  }


  //metodos air/meteo

  // getMarkers(): FirebaseListObservable<any> {
  //   return this.db.list('/markers')
  // }

  //metodos collector

  // createMarker(data: GeoJSON) {
  //   return this.db.list('/markers')
  //                 .push(data)
  // }

  // removeMarker($key: string) {
  //   return this.db.object('/markers/' + $key).remove()
  // }

}
