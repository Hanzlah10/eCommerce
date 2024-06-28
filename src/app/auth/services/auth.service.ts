import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../../Shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { ResponseAPI } from '../../Shared/types/respose.interface';

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
    return this.http.post<ResponseAPI>(url, data).pipe(map((res => this.getUser(res.data))))
  }

  loginUser(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    let url = environment.apiUrl + '/users/login';
    return this.http.post<ResponseAPI>(url, data).pipe(map(res => res.data))
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/current-user`
    console.log(url);
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }

}


// http://localhost:8080/api/v1/users/current-user