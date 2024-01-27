// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

// Types
import { AuthResponseInterface } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public register(
    data: RegisterRequestInterface,
  ): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>('/users', data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
