// Packages
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// Types
import { ProfileInterface } from '../../shared/types/profile.interface';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  constructor(private readonly http: HttpClient) {}

  public getUserProfile(slug: string): Observable<ProfileInterface> {
    return this.http
      .get(`/profiles/${slug}`)
      .pipe(map((response: GetUserProfileResponseInterface) => response.profile));
  }
}
