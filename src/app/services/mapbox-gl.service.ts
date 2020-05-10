import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';





@Injectable({
  providedIn: 'root'
})
export class MapboxGLService {



  constructor() {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
  }






}
