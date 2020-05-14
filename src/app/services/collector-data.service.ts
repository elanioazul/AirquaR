import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectorDataService {

  private url = `${environment.airquaAPI}/api/v1/datacollected`;

  constructor(private http: HttpClient) { }
}


// createMarker():

// removeMarker():
