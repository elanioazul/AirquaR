import { Injectable,Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, Form } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = `${environment.airquaAPI}auth`;

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
    return this.http.post<any>(`${this.url}/local`, form.value, this.httpOptions).pipe(
      tap(response => this.storage.set('token', response.jwt))
    );
  }
}
