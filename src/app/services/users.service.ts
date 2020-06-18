import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private url = `${environment.airquaAPI}api/v1/users`;



  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) { }



  getLoggedUser(currentUser): Observable<User> {
    const user = this.storage.get('user');
    if (!user) {
      return this.requestUser(currentUser)
    }
    return of(user);
  }

  requestUser(currentUser) {
    return this.http.get<User>(`${this.url}/${currentUser}`).pipe(
      tap(res => this.storage.set('user', res))
    )
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }


}
