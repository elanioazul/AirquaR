import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url = `${environment.airquaAPI}api/v1/users`;

  public currentUser: string;

  constructor(private http: HttpClient) { }

  getLoggedUser(currentUser): Observable<User> {
    return this.http.get<User>(`${this.url}/${currentUser}`);
  }

  //getUsers(): Observable<any> {
  //  return this.http.get(this.url)
  //}

}
