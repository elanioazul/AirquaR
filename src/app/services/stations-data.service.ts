import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoJSON } from '../classes/map';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationsDataService {

  public airStationPostgis: any = 'http://localhost:5000/api/v1/airstations';
  public meteoStationsPostgis: any = 'http://localhost:5000/api/v1/meteostations';

  //private _id = new Subject<string>();
  //id$ = this._id.asObservable();
  public urlairStationId: any = `${environment.airquaAPI}api/v1/airstations`;
  public urlmeteoStationId: any = `${environment.airquaAPI}api/v1/meteostations`;

  constructor(private http: HttpClient) { }

  getAirStations(): Observable<any> {
    return this.http.get(this.airStationPostgis).pipe(
      map((response: any) => response.geojson)
    )
  }

  getMeteoStations(): Observable<any> {
    return this.http.get(this.meteoStationsPostgis).pipe(
      map((response: any) => response.geojson)
    )
  }

  getAirStationById(id): Observable<any> {
    debugger
    return this.http.get(`${this.urlairStationId}/${id}`);
  }

  getMeteoStationById(id): Observable<any> {
    debugger
    return this.http.get(`${this.urlmeteoStationId}/${id}`);
  }

  //tiene que venir la comunicacion desde el marker, diciendo, soy el marker con iD tal.
  //pero como el marker son estilos y no DOM, no sé como hacer mandar ninguna comunicación desde los markers
  //sendStationId(id: string) {
  //  this._id.next(id);
  //}
}
