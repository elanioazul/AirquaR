import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoJSON } from '../classes/map';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationsDataService {

  public airStationPostgis: any = 'http://localhost:5000/api/v1/airstations';
  public meteoStationsPostgis: any = 'http://localhost:5000/api/v1/meteostations';

  constructor(private http: HttpClient) { }

  getAirStations(): Observable<any> {
    return this.http.get(this.airStationPostgis)
  }

  getMeteoStations(): Observable<any> {
    return this.http.get(this.meteoStationsPostgis)
  }
}
