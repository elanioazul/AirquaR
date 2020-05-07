import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

import { StationsDataService } from 'src/app/services/stations-data.service';



@Injectable({
  providedIn: 'root'
})
export class MapboxGLService {



  constructor(private stations: StationsDataService) {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
  }






}
