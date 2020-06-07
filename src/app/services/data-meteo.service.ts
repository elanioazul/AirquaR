import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoDataService {

  private meteodataurl = `${environment.airquaAPI}api/v1/meteodata/station`;

  constructor(private http: HttpClient) { }

  getMeteodataById(id) {
    return this.http.get(`${this.meteodataurl}/${id}`)
  }
}
