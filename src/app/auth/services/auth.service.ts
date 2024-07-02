import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../../Shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { ResponseAPI, ResponseUserAPI } from '../../Shared/types/respose.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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


  // getCurrentUser(): Observable<CurrentUserInterface> {
  //   const url = `${environment.apiUrl}/users/current-user`
  //   console.log(url);
  //   return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  // }

  getCurrentUser(token: string): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/current-user`
    console.log(url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const options = { headers };

    return this.http.get<ResponseUserAPI>(url, options).pipe(map(res => res.data))
  }



  // logOutUser(token: string) {

  //   const url = `${environment.apiUrl}/users/logout`
  //   console.log(url);
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   });
  //   const options = { headers };
  //   return this.http.post
  // }

}
