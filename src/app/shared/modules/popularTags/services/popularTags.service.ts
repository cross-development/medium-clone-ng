// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// Types
import { PopularTagType } from '../../../types/popularTag.type';
import { GetPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';

@Injectable({ providedIn: 'root' })
export class PopularTagsService {
  constructor(private readonly http: HttpClient) {}

  public getPopularTags(): Observable<PopularTagType[]> {
    return this.http
      .get('/tags')
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags));
  }
}
