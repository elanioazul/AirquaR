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

  private _id = new Subject<string>();
  id$ = this._id.asObservable();
  public airStationId: any = `${environment.airquaAPI}/api/v1/airstations/${this.id$}`;
  public meteoStationId: any = `${environment.airquaAPI}/api/v1/meteostations/${this.id$}`;

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

  getAirStationById(): Observable<any> {
    return this.http.get(this.airStationId)
  }

  getMeteoStationById(): Observable<any> {
    return this.http.get(this.meteoStationId)
  }

  //tiene que venir la comunicacion desde el marker, diciendo, soy el marker con iD tal.
  //pero como el marker son estilos y no DOM, no sé como hacer mandar ninguna comunicación desde los markers
  sendStationId(id: string) {
    this._id.next(id);
  }
}
