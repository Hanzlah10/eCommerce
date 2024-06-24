import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../../Shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  registerUser(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    let url = environment.apiUrl + 'users/register';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser))
  }
}
