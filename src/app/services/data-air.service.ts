import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirDataService {

  private airdataurl = `${environment.airquaAPI}api/v1/airdata/station`;

  constructor(private http: HttpClient) { }

  getAirdataById(id) {
    return this.http.get(`${this.airdataurl}/${id}`)
  }
}
