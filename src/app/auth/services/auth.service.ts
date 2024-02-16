// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// Types
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { CurrentUserInputInterface } from '../../shared/types/currentUserInput.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>('/users', data).pipe(map(this.getUser));
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>('/users/login', data).pipe(map(this.getUser));
  }

  public getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get('/user').pipe(map(this.getUser));
  }

  public updateCurrentUser(
    currentUserInput: CurrentUserInputInterface,
  ): Observable<CurrentUserInterface> {
    return this.http.put('/user', currentUserInput).pipe(map(this.getUser));
  }
}
