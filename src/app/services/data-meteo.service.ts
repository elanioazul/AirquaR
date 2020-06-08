import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoDataService {

  private meteodataurl = `${environment.airquaAPI}api/v1/meteodata/station`;

  constructor(private http: HttpClient) { }


  getMeteodataById(id, parameter: any): Observable<any> {
    debugger
    return this.http.post(`${this.meteodataurl}/${id}`, parameter)
  }
}
