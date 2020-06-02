import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url = `${environment.airquaAPI}api/v1/users`;



  constructor(
    private http: HttpClient
  ) { }



  getLoggedUser(currentUser): Observable<User> {
    debugger
    return this.http.get<User>(`${this.url}/${currentUser}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }

  changePassword(user: User, password: string) {
    user['password'] = password;
    return this.updateUser(user);
  }

}
