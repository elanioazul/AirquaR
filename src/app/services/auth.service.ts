import { Injectable,Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Form } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Register } from '../classes/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${environment.airquaAPI}api/v1/users`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
    private router: Router,
    private http: HttpClient
  ) { }

  login(form: FormGroup): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/signin`, form.value, this.httpOptions).pipe(
      tap(response => {
        debugger
        this.storage.set('airquatoken', response.data.token)}
      )
    );
  }

  signup(user: Register): Observable<any> {
    return this.http.post<any>(`${this.url}/auth/signup`, user, this.httpOptions).pipe(
      tap(() => this.router.navigate(['/login']))
    )
  }

  logout(): void {
    this.storage.remove('token');
    this.router.navigate(['/login']);
  }
}
