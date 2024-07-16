import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../../Shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { ResponseAPI, ResponseUserAPI } from '../../Shared/types/respose.interface';
import { PersistenceService } from '../../Shared/services/persistence.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private persistenceService: PersistenceService) { }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  registerUser(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    let url = environment.apiUrl + '/users/register';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };

    return this.http.post<ResponseAPI>(url, data, options).pipe(map((res => this.getUser(res.data))))
  }

  loginUser(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    let url = environment.apiUrl + '/users/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };
    return this.http.post<ResponseAPI>(url, data, options).pipe(map(res => res.data))
  }

  getCurrentUser(token: string): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/current-user`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const options = { headers };

    return this.http.get<ResponseUserAPI>(url, options).pipe(map(res => res.data))
  }



  logOutUser() {

    const url = `${environment.apiUrl}/users/logout`
    const token = this.persistenceService.get('accessToken')
    this.persistenceService.set('accessToken', '')
    this.persistenceService.set('refreshToken', '')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const options = { headers };

    return this.http.post(url, options)
  }

  forgotPassword(email: string) {
    const url = `${environment.apiUrl}/users/forgot-password`
    return this.http.post(url, email)
  }

}
