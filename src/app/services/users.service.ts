import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url = `${environment.airquaAPI}/api/v1/users`;

  constructor(private http: HttpClient) { }

  getUsersPostgres(): Observable<any> {
    return this.http.get(this.url)
  }

}
