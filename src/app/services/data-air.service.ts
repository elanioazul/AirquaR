import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, Subject } from 'rxjs';
import { Parameter } from '../classes/parameter';

@Injectable({
  providedIn: 'root'
})
export class AirDataService {

  private airdataurl = `${environment.airquaAPI}api/v1/airdata/station`;

  constructor(private http: HttpClient) { }

  getAirdataById(id, parameter: any): Observable<any> {
    debugger
    return this.http.post(`${this.airdataurl}/${id}`, parameter)
  }
}
