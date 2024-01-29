// Packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Types
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

@Injectable()
export class FeedService {
  constructor(private readonly http: HttpClient) {}

  public getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this.http.get<GetFeedResponseInterface>(url);
  }
}
